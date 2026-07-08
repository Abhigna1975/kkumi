import { useNavigate } from "react-router-dom"
import "../style/Signup.css"
import { useState } from "react"
export default function Signup(){
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [error,setError]=useState("")
    const navigate = useNavigate()
    function handleSignup(e){
        e.preventDefault()
        if(email === "abc@123.com" && password === "abc@123"){
        navigate("/P1")
        }
        else{
            setError("Invalid error or password")
        }
    }
    return(
        <>
        <form action="" onSubmit={handleSignup} className="signup-head">
            <h1 className="signup-heading">SIGN UP</h1>
            <input type="text" placeholder="Enter your name" className="signup-name" onChange={e => setName(e.target.value)}/> <br />
            <input type="email" placeholder="Enter your email" className="signup-email" onChange={e => setEmail(e.target.value)}/> <br />
            <input type="password" placeholder="Enter your password" className="signup-pwd" onChange={e => setPassword(e.target.value)}/> <br />
            <button className="signup-submit">SIGNUP</button>
            <div>
                <span>
                    <p className="signup-text">or</p>
                </span>
                <span>
                    <a href="/Login" className="signup-login">LOGIN</a>
                </span>
            </div>
            <p style={{color:"red"}}>{error}</p>
        </form>
        </>
    )
}