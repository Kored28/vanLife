import { defer } from "react-router-dom";
import { getVans } from "./api";


export function loader() {
    return defer({vans: getVans()})
}


export function Detailloader({ params }) {
    return defer({van: getVans(params.id)})
}


