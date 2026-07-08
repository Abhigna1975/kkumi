import "../../style/pages/P1.css"
import { Navigate, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useContext } from "react"
import { Usercontext } from "../../App"

export default function P1(){
    const navigate = useNavigate()
    const [selected,setselected]=useState("")
    const [error,seterror]=useState("")
    const {selections} = useContext(Usercontext)
    function handle(){
        if(!selections.skintone|| !selections.feet||!selections.bodyshape||!selections.faceshape){
            seterror("Please complete all the 4 to proceed")}
        else{navigate("/P7")}
    }
    return (
        <div className="p1-container">
            <h1 className="p1-head">Build Your Perfect Look!</h1>
            <p className="p1-text">Complete these 4 steps for personalised recommendations just for you!</p>
            <div className="p1-btn">
                <button className="p1-skin" onClick={()=> navigate("/P2")}>Skin Tone</button> <br />
                <button className="p1-height" onClick={()=> navigate("/P3")}>Height</button> <br />
                <button className="p1-body" onClick={()=> navigate("/P4")}>Body Shape</button> <br />
                <button className="p1-face" onClick={()=> navigate("/P5")}>Face Shape</button> <br />

                <button className="p1-next" onClick={handle}>NEXT</button>
                <p className="p1-text1">Skin Tone:     {selections.skintone} |    Height: {selections.feet}'{selections.inches}"|   Body Shape: {selections.bodyshape} |  Face Shape: {selections.faceshape}</p>
                <h2 className="p1-error">{error}</h2>
            </div>
        </div>
    )
}
