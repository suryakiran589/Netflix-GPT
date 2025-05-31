import Header from "./Header"
import { useState, useRef } from "react"
import { handleEmail } from "../utils/handleEmail"

const Login = () => {
    const email =useRef(null)
    const password =useRef(null)
    const isSignIn = useState(true)

    const handleLogin = (e) =>{
        e.preventDefault()
        console.log(handleEmail(email.current.value,password.current.value))
        console.log(email.current.value)
    }

    return <div className="flex flex-wrap ">
        <Header/>
        <form className="absolute left-[650px] top-44 flex flex-col m-3 bg-black p-11 bg-opacity-80 rounded-md ">
            <h3 className="text-white m-3 font-bold text-3xl">Sign In</h3>
            {!isSignIn && <input ref={email} type="text" className="bg-gray-600 m-3 p-4 rounded-md bg-opacity-75 outline-none w-[300px] text-white" placeholder="Enter email">Full Name</input>}
            <input ref={email} type="email" className="bg-gray-600 m-3 p-4 rounded-md bg-opacity-75 outline-none w-[300px] text-white" placeholder="Enter email"></input>
            <input ref={password} type="password" className="bg-gray-600 m-3 p-4 rounded-md bg-opacity-75 outline-none w-[300px] text-white" placeholder="Enter password"></input>
            <button className="bg-red-600 text-white w-[300px] m-3 p-2 rounded-md" onClick={handleLogin}>Login</button>
        </form>
        <div className="h-[100vh] w-[400vh]">
             <img className="h-[100%] w-[100%]" src="https://assets.nflxext.com/ffe/siteui/vlv3/914ad279-199e-4095-9c10-2409dc9e5e1b/web/IN-en-20250519-TRIFECTA-perspective_8f1ca896-9e49-4a4e-90f0-22fc49650bd9_large.jpg"></img>
        </div>
    </div>
}

export default Login