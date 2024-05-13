import { useRouteError } from "react-router-dom"

const Error = () => {
  const err = useRouteError()
  return (
    <h1 className="text-5xl font-bold p-10">Error: {err.message}</h1>
  )
}

export default Error