import { Suspense } from "react"
import { Await, Link, useLoaderData, useSearchParams } from "react-router-dom"


const Vans = () => {
  const dataPromise = useLoaderData()

  const [searchParams, setSearchParams] = useSearchParams()
  const typeFilter = searchParams.get("type")

  const render = (vans) => {
    const searchResult =  typeFilter ? vans.filter((van) => van.type === typeFilter ) : vans
    return(
      <>
        <div className="flex flex-wrap gap-2 mb-9">
          <button onClick={() => setSearchParams({type: "simple"})}  className={`van-type ${typeFilter === "simple" ? "simple selected" : "simple"}`}>Simple</button>
          <button onClick={() => setSearchParams({type: "luxury"})} className={`van-type ${typeFilter === "luxury" ? "luxury selected" : "luxury"} `}>Luxury</button>
          <button onClick={() => setSearchParams({type: "rugged"})} className={`van-type ${typeFilter === "rugged" ? "rugged selected" : "rugged"}`}>Rugged</button>
          {typeFilter ? (
            <button onClick={() => setSearchParams({})} className="van-type clear-filters">Clear filter</button>
          )  : null}
        </div>
        <div className="flex flex-wrap gap-8 ">
          {searchResult.map((van) => (
            <div key={van.id} className="flex flex-col w-56 gap-2" >
              <Link to={van.id} state={{search : searchParams.toString(), type: typeFilter}}>
                <img src={van.imageUrl} className="w-56 rounded" />
                <div className="flex justify-between">
                  <h3 className="text-xl font-semibold">{van.name}</h3>
                  <p className=" flex flex-col text-xl font-semibold">${van.price} <span className="text-sm font-normal">/day</span> </p>
                </div>
                <i className={`van-type ${van.type} selected h-8 py-1 px-6 rounded bg-van-100 w-20 flex justify-center capitalize`}>
                  {van.type}
                </i>
              </Link>
            </div>
          ))}
        </div>
      </>
    )
  } 
 
  return (
    <div className="flex flex-col px-7 py-7">
      <h1 className="text-2xl font-bold mb-3">
        Explore our van options
      </h1>
      <Suspense fallback={<h2 className="text-xl font-bold">Loading Vans...</h2>}>
        <Await resolve={dataPromise.vans}>
          {render}      
        </Await>
      </Suspense>
    </div>
  )
}

export default Vans


