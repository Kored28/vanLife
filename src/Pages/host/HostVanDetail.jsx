import { useEffect, useState } from "react"
import { Link, NavLink, Outlet, useParams } from "react-router-dom"


const HostVanDetail = () => {
    const [currentVan, setCurrentVan] = useState(null)
    const param = useParams()
    useEffect(() => {
      fetch(`/api/host/vans/${param.id}`)
        .then((res) => res.json())
        .then ((data) => setCurrentVan(data.van))
    }, [param.id])
  return (
    <div className="flex flex-col px-7 py-7">
      <div className="flex flex-col">
        <Link to='..' relative="path" className=" text-sm mb-7">
          &larr; <span className="underline">Back to all vans</span>
        </Link>
        {currentVan ? (
           <div className="flex flex-col bg-white p-5">
              <div className="flex mb-4">
                  <img src={currentVan.imageUrl} className="w-40" />
                  <div className="flex flex-col px-5 justify-center">
                      <i className={`van-type ${currentVan.type} selected h-8 py-1 px-6 rounded bg-van-100 w-20 flex justify-center capitalize mb-4`}>
                          {currentVan.type}
                      </i>
                      <h3 className="text-2xl font-semibold mb-2">{currentVan.name}</h3>
                      <p className="text-xl font-semibold mb-2">${currentVan.price}<span className="text-xl font-normal">/day</span></p>
                  </div>
                  
              </div>
              <div className="flex gap-8">
                  <NavLink to={`.`} end className={({isActive}) => isActive ? "underline font-bold": null}>Details</NavLink>
                  <NavLink to={`pricing`} className={({isActive}) => isActive ? "underline font-bold": null}>Pricing</NavLink>
                  <NavLink to={`photos`} className={({isActive}) => isActive ? "underline font-bold": null}>Photos</NavLink>
              </div>
              <Outlet context={{ currentVan }}/>
           </div>
        ): <h2 className="font-bold text-2xl">Loading....</h2>}
      </div>
    </div>
  )
}

export default HostVanDetail