import { useNavigate } from "react-router-dom"
import "../style/Login.css"
import { useState } from "react"
export default function Login(){
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [error,setError]=useState("")
    const navigate = useNavigate()
    function handleLogin(e){
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
        <div className="login-head">
            <form action="" onSubmit={handleLogin} className="login-head">
                <h1 className="login-heading">LOGIN</h1>
                <input type="email" placeholder="Enter your email" className="login-email" onChange={e => setEmail(e.target.value)}/> <br />
                <input type="password" placeholder="Enter your password" className="login-pwd" onChange={e => setPassword(e.target.value)}/> <br />
                <button className="login-submit">LOGIN</button>
                <div>
                    <span>
                        <p className="login-text">or</p>
                    </span>
                    <span>
                        <a href="/Signup" className="login-signup">SIGN UP</a>
                    </span>
                </div>
                <p style={{color:"red"}}>{error}</p>
            </form>
        </div>
        </>
    )
}