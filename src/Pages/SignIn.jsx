import { Link, useLoaderData, Form, useActionData, useNavigation } from "react-router-dom"



const SignIn = () => {
    const error = useActionData()
    const message = useLoaderData()
    const navigation = useNavigation()

    
  return (
    <div className="flex flex-col px-7 py-7">
        <h1 className="text-3xl font-bold text-center mt-20 mb-8">
            Sign into your account
        </h1>
        {message && <h2 className="text-red-600 text-2xl font-bold mb-4">{message}</h2>}
        {error && <h2 className="text-red-600 text-2xl font-bold mb-4">{error}</h2>}
        <Form replace method="post" className="flex flex-col gap-3 mb-16">
            <input 
            type="email" 
            name="email" 
            placeholder="Email"
            className="w-100 py-2 px-3 rounded text-base"
            />
            <input 
            type="password" 
            name="password" 
            placeholder="Password"
            className="w-100 py-2 px-3 rounded text-base mb-9"
            />
            <button 
             disabled={navigation.state === "submitting"} 
             className="bg-signin-100 py-3 text-white font-bold"
            >
                {navigation.state === 'submitting' ? "Logging in.." : "Log in"}
            </button>
        </Form>

        <div className="flex justify-center mb-11">
            <p className="flex text-base font-medium gap-2">
                Don’t have an account?
                <Link className="text-signin-100">Create one now</Link>
            </p>
        </div>
    </div>
  )
}

export default SignIn