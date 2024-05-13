import { Link } from "react-router-dom"


const NotFound = () => {
  return (
    <div className="flex flex-col px-7 py-32 my-10 gap-4">
        <p className="text-4xl font-bold">
            Sorry, the page you were <br /> looking for was not found.
        </p>
        <Link to="/" className="py-4 bg-black text-white flex justify-center">Return Home</Link>
    </div>
  )
}

export default NotFound