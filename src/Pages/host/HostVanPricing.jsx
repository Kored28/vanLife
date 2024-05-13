
import { useOutletContext } from "react-router-dom"

const HostVanPricing = () => {
  const {currentVan} = useOutletContext()
  return (
    <div className="flex py-6">
      {currentVan ? (
        <div className=" flex ">
          <p className="text-xl font-semibold mb-2">${currentVan.price}<span className="text-xl font-normal">/day</span></p>
        </div>
      ) : <h2>Loading...</h2>}
    </div>
  )
}

export default HostVanPricing