import { Suspense } from "react"
import { Await, Link, useLoaderData } from "react-router-dom"

const HostVan = () => {
  const dataPromise = useLoaderData()

  return (
    <div className="flex flex-col px-7 py-7">
      <h2 className="text-3xl font-bold mb-7">Your listed vans</h2>
     <Suspense fallback={<h2 className="text-xl font-bold">Loading Vans...</h2>}>
        <Await resolve={dataPromise.vans}>
          {(vans) => {
            return(
              <div className="flex flex-col gap-3">
                { vans.map((van) => (
                  <Link to={van.id} key={van.id} className="flex items-center justify-between px-7 h-24 bg-white">
                    <div className="flex items-center gap-4">
                      <img src={van.imageUrl} className="w-16 h-16"/>
                      <div className="flex flex-col gap-0">
                        <h2 className="text-xl font-semibold">{van.name}</h2>
                        <p>${van.price}/day</p>
                      </div>
                    </div>
                  </Link>
                )) }
              </div>
            )
          }}
        </Await>
     </Suspense>
    </div>
  )
}

export default HostVan