import { useOutletContext } from "react-router-dom"

const Details = () => {
    const {currentVan} = useOutletContext()
  return (
    <div className="flex py-6">
        {currentVan ? (
            <div className=" flex flex-col gap-7">
                <p className="text-sm"><span className="font-bold pr-2">Name:</span> {currentVan.name}</p>
                <p className="text-sm capitalize"><span className="font-bold pr-2">Category:</span> {currentVan.type}</p>
                <p className="text-sm"><span className="font-bold pr-2">Description:</span> {currentVan.description}</p>
                <p className="text-sm"><span className="font-bold pr-2">Visibility:</span> Public</p>
            </div>
        ) : <h2>Loading</h2>}
    </div>
  )
}

export default Details