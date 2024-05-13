import { Link, NavLink } from "react-router-dom"
import { requireAuth } from "../Util/Util"

const Navbar = () => {
  const logOut = (e) => {
    e.preventDefault()
    localStorage.removeItem("loggedIn")
    requireAuth()
  }
 
  return (
    <div className=" text-sm flex items-center justify-between py-6 px-7 ">
        <Link to='/'   className={"text-black text-xl font-extrabold"}>#VANLIFE</Link>
        <div className="text-navtext text-sm font-medium flex gap-6">
          <NavLink className={({isActive}) => isActive ? "underline font-bold": null} to='/host'>Host</NavLink>
          <NavLink className={({isActive}) => isActive ? "underline font-bold": null}  to='/about'>About</NavLink>
          <NavLink className={({isActive}) => isActive ? "underline font-bold": null} to='/vans'>Vans</NavLink>
          <NavLink className={({isActive}) => isActive ? "text-black font-extrabold text-base": null} to='/login'><i className="fa-regular fa-circle-user"></i></NavLink>
          <NavLink onClick={logOut}>x</NavLink>
        </div> 
    </div>
  )
}

export default Navbar