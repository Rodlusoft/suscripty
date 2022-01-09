import { useRouter } from "next/router"
import { useState } from "react"
import ImagePicker from "../../components/auth/signUp/ImagePicker"
import { AuthMethod } from "../../interfaces/authMethod"

const SignUpForm = () => {

  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [username, setUsername] = useState<string>("")
  const [isValidUser, setIsValidUser] = useState<boolean>(false)
  const [image, setImage] = useState<File>()
  const router = useRouter()

  const handleClick = async () => {
    if (isValidUser) {
      await checkUserAuthentication()
    }
  }

  const checkUserAuthentication: () => void = async () => {
    const method = AuthMethod.email

    const response = await fetch(
      '/api/auth/signUp',
      {
        method: "POST",
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
          image: image,
          method: method
        })
      })

    console.log({
      username: username,
      email: email,
      password: password,
      image: image,
      method: method
    })
    const user = await response.json()

    console.log(await user)

    return user
  }

  const checkIfUserValid: () => boolean = () => {
    return (email.trim() !== "" && password.trim().length > 5 && username.trim() !== "")
  }

  const changeImage: (e: any) => void = (e) => {
    setImage(e)
    console.log(image)
  }

  return (
    <div className="flex w-full justify-center gap-8 px-8 mt-32 h-45">
      <div className="w-full max-w-xs ">
        <form className="px-8 border-2 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
              Username
            </label>
            <ImagePicker
              changeImage={(e) => { changeImage(e) }}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
              Username
            </label>
            <input className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Username" onChange={({ target }) => {
              setUsername(target.value)
              setIsValidUser(checkIfUserValid())
            }} />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
              Email
            </label>
            <input className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email" onChange={({ target }) => {
              setEmail(target.value)
              setIsValidUser(checkIfUserValid())
            }} />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
              Password
            </label>
            <input className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" onChange={({ target }) => {
              setPassword(target.value)
              setIsValidUser(checkIfUserValid())
            }} />
            {!isValidUser &&
              <p className={`text-xs italic text-red-500`}>Please choose a password and an email.</p>}
          </div>
          <div className="flex items-center justify-center">
            <button className="px-4 py-2 font-bold rounded-full" type="button" onClick={() => handleClick()} >
              Sign Up
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

export default SignUpForm 