import { loginUser } from "./api"
import { redirect } from "react-router-dom"

export const loginAction = async ({request}) => {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    const pathname = new URL(request.url).searchParams.get("redirectTo") || "/host/vans"

    try {
        const data = await loginUser(email, password)
        localStorage.setItem("loggedIn", true)
        console.log(data)

        const response = redirect(pathname)
        console.log(pathname)
        response.body = true
        return response
    } catch (error) {
        return error.message
    }
} 