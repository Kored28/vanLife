import { useOutletContext } from "react-router-dom"

const HostVanPhotos = () => {
  const {currentVan} = useOutletContext()
  return (
    <div className="flex py-6">
      {currentVan ? (
        <div className=" flex flex-col ">
          <img src={currentVan.imageUrl} className="w-24" />
        </div>
      ) : <h2>Loading...</h2>}
    </div>
  )
}

export default HostVanPhotos