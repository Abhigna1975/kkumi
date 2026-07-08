import { Link } from "react-router-dom"
import { useState } from "react"
import "../style/Nav.css"
export default function Nav(){
    const [isOpen,setisOpen]=useState(false)
    return(
        <>
        <nav className="Nav">
            <img src="/nav.png" alt="" onClick={()=>setisOpen(!isOpen)}/>
            {isOpen &&(
                <div className="Nav-sidebar">
                    <Link to="/">Home</Link>
                    <Link to="/Login">Login</Link>
                    <Link to="/Signup">Signup</Link>
                    <Link to="/Contactus">Contact</Link>
                </div>
            )}
            </nav>
        </>
    )
}