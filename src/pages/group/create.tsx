import { useState } from "react"
import IService, { ServicesType } from "../../interfaces/service"
import Group, { addNewGroup } from "../../models/group"

const CreateGroupForm = () => {

  const [creatorId, setCreatorId] = useState<string>("SmRYsbwsrRUlpQJaSGKKRjee7tj1")
  const [suscriptionPrice, setSuscriptionPrice] = useState<number>(5)
  const [serviceType, setServiceType] = useState<ServicesType>(ServicesType.netflix)
  const [maxCoSuscriptors, setMaxCoSuscriptors] = useState<number>(4)

  const handleClick = async () => {
    const serviceModel: IService = {
      totalPrice: suscriptionPrice,
      pricePerUser: suscriptionPrice / maxCoSuscriptors,
      service: serviceType,
      maxCoSuscriptors: maxCoSuscriptors
    }
    const group = new Group(creatorId, suscriptionPrice, serviceModel, maxCoSuscriptors)
    const response = await addNewGroup(group)
    console.log(`${response.status}`);
  }

  return (
    <form className="p-8">
      <div className="w-full flex flex-wrap">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
            Suscription Price
          </label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="5$"
            onChange={(event) => {
              console.log(`${event.target.value}`)
              setSuscriptionPrice(parseFloat(event.target.value))
            }} />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
            Service
          </label>
          <div className="relative">
            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state"
              onChange={(event) => {
                console.log(`${event.target.value}`)
                setServiceType(event.target.value)
              }}
            >
              <option value={ServicesType.netflix}>Netflix</option>
              <option value={ServicesType.crunchyRoll}>CrunchyRoll</option>
              <option value={ServicesType.disney}>Disney+</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
            Max Co-Suscriptors
          </label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="4"
            onChange={(event) => {
              console.log(`${event.target.value}`)
              setMaxCoSuscriptors(parseFloat(event.target.value))
            }} />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <button className="px-4 py-2 font-bold rounded-full" type="button" onClick={() => handleClick()} >
          Sign Up
        </button>
      </div>
    </form>
  )
}

export default CreateGroupForm
