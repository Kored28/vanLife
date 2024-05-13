import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const Host = () => {
 const [vans, setVans] = useState([])
 
 useEffect(() => {
   fetch("/api/host/vans")
   .then((res) => res.json())
   .then((data) => setVans(data.vans))
 }, [])
  
  return (
    <div className="container flex flex-col py-3">     
      <div className="flex flex-col bg-host-100 px-7">
        <h2 className="text-4xl font-bold py-5">Welcome!</h2>
        <div className="flex justify-between mb-6">
          <p>Income last <span className="underline font-medium">30days</span></p>
          <Link to="/host/income">Details</Link>
        </div>
        <h2 className="font-extrabold text-5xl mb-6">$2,260</h2>
      </div>
      <div className="flex py-8 justify-between px-7 bg-host-200">
        <div className="flex items-center gap-3">
          <p className="font-bold text-2xl">Review Score</p>
          <p className="text-xl"><span className="font-bold">5.0</span>/5</p>
        </div>
        <Link to="/host/reviews">Details</Link>
      </div>
      <div className="flex flex-col px-7 py-6">
        <div className="flex justify-between mb-6">
          <h2 className="font-bold text-2xl">Your listed vans</h2>
          <Link to="/host/vans">View all</Link>
        </div>
        <div className="flex flex-col gap-6">
          {vans.map((van) => (
            <div key={van.id} className="flex items-center justify-between px-7 h-24 bg-white">
              <div className="flex items-center gap-4">
                <img src={van.imageUrl} className="w-16 h-16"/>
                <div className="flex flex-col gap-0">
                  <h2 className="text-xl font-semibold">{van.name}</h2>
                  <p>${van.price}/day</p>
                </div>
              </div>
              <Link>Edit</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Host