import { NavLink, Outlet } from "react-router-dom"


const HostLayout = () => {
  
  return (
    <div className="container flex flex-col py-7">
        <div className="flex gap-8 text-black px-7 text-lg mb-6">
          <NavLink end className={({isActive}) => isActive ? "underline font-bold": null}to='.'>Dashboard</NavLink>
          <NavLink className={({isActive}) => isActive ? "underline font-bold": null} to='income'>Income</NavLink>
          <NavLink className={({isActive}) => isActive ? "underline font-bold": null} to='vans'>Vans</NavLink>
          <NavLink className={({isActive}) => isActive ? "underline font-bold": null} to='reviews'>Review</NavLink>
        </div>
        <Outlet/>
    </div>
  )
}

export default HostLayout