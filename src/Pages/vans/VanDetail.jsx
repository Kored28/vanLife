import { Suspense } from "react"
import { Await, Link, useLoaderData, useLocation } from "react-router-dom"



const VanDetail = () => {
  const dataPromise = useLoaderData()
  const location = useLocation()

     
  const search = location.state?.search || ""
  const type = location.state?.type || "all vans"

  return (
    <div className="flex flex-col px-7 py-7">
      <div className="flex flex-col">
        <Link to={`..?${search}`} relative="path" className=" text-sm mb-7">
          &larr; <span className="underline">Back to {type}</span>
        </Link>
       
        <Suspense fallback={<h2 className="text-xl font-bold">Loading Vans...</h2>}>
          <Await resolve={dataPromise.van}>
            {(van) => {
              return(
                <div className="flex flex-col">
                  <img src={van.imageUrl} className="w-100 h-100 rounded mb-10" />
                  <i className={`van-type ${van.type} selected h-8 py-1 px-6 rounded bg-van-100 w-20 flex justify-center capitalize mb-6`}>
                    {van.type}
                  </i>
                  <h3 className="text-3xl font-semibold mb-2">{van.name}</h3>
                  <p className="text-2xl font-semibold mb-2">${van.price} <span className="text-xl font-normal">/day</span> </p>
                  <p className="text-base mb-4">{van.description}</p>
                  <button className="bg-van-300 text-white text-lg py-2 rounded font-bold">Rent this van</button>
                </div>
              )
            }}
          </Await>
        </Suspense>
       
      </div>
    </div>
  )
}

export default VanDetail