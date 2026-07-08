import { useState } from "react";
import "../style/Page2.css"
import { useNavigate } from "react-router-dom";
export default function Page2(){
    const navigate=useNavigate()
    return(
        <>
        <div className="page2-bgimg">
            <button className="page2-btn1" onClick={()=>navigate("/Login")}>LOGIN</button>
            <p className="page2-text"> -- or --</p>
            <button className="page2-btn2" onClick={()=>navigate("/Signup")}>SIGN UP</button>
        </div>
        </>
    )
}