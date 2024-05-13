import { defer } from "react-router-dom"
import { requireAuth } from "./Util"
import { getHostVans } from "./api"

export const hostLoader = async(request) =>{
    await requireAuth(request)
    return defer({vans: getHostVans()})
}
