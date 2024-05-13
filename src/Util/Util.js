import { redirect } from "react-router-dom"

export  function requireAuth({request}) {
  const pathname = new URL(request.url).pathname
  const isLoggedIn = localStorage.getItem("loggedIn")
  const newSearchParams = new URLSearchParams()
  const location = "You must login first"
  newSearchParams.set("message", location)

  if (!isLoggedIn) {
    const response = redirect(`/login?${newSearchParams.toString()}&redirectTo=${pathname}`)
    response.body = true  
    return response
  }

  return null
}