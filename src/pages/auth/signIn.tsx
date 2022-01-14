import { useState } from "react"
import { AuthMethod } from "../../interfaces/authMethod"
import User, { checkIfUserValid, selectSignInAuthMethod } from "../../models/user"

const SignIn = () => {

  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [isValidUser, setIsValidUser] = useState<boolean>(false)
  const [authMethod, setAuthMethod] = useState<AuthMethod>(AuthMethod.email)

  const checkUser: () => void = () => {
    setIsValidUser(checkIfUserValid(email, password))
  }

  const handleClick: () => void = async () => {
    if (isValidUser) {
      const user = new User(email, password)
      const response = await selectSignInAuthMethod(authMethod, user)
      console.log(`${Object.values(response)}`);
    }
  }

  return(
    <div className="flex w-full justify-center gap-8 px-8 mt-32 h-45">
      <div className="w-full max-w-xs ">
        <form className="px-8 border-2 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
              Email
            </label>
            <input className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email" onChange={({ target }) => {
              setEmail(target.value)
              checkUser()
            }} />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
              Password
            </label>
            <input className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" onChange={({ target }) => {
              setPassword(target.value)
              checkUser()
            }} />
            {!isValidUser &&
              <p className={`text-xs italic text-red-500`}>Please choose a password and an email.</p>}
          </div>
          <div className="flex items-center justify-center">
            <button className="px-4 py-2 font-bold rounded-full" type="button" onClick={() => handleClick()} >
              Sign In
            </button>
          </div>
        </form>
        <p className="text-xs text-center text-gray-500">
          &copy;2020 Rodlusoft. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default SignIn
