import { useState,useContext } from "react"
import "../../style/pages/P3.css"
import {useNavigate} from "react-router-dom"
import { Usercontext } from "../../App";

export default function P3(){
    const Navigate = useNavigate()
    const [feet,setfeet]=useState("")
    const [inches,setinches]=useState("")
    const { selections, setselections } = useContext(Usercontext);
    const [error,seterror]=useState("")
    function handle(){
        if(feet===""){
            seterror("Please select your height to proceed")
        }else{
            setselections({...selections, feet, inches});Navigate("/P1")
        }
    }
    return (
        <>
        <div className="p3-head">
            <h1 className="p3-heading">Select Your Height ?</h1>
            <p className="p3-text">Tap to find your perfect look! 🌸</p>
            <div className="p3-par">
                <h1 className="p3-feet">Feet</h1>
                <select className="p3-btn1" onChange={e=>setfeet(e.target.value)}>
                    <option className="p3-btn1" value="4">4'</option>
                    <option className="p3-btn1" value="5">5'</option>
                    <option className="p3-btn1" value="6">6'</option>
                </select>
                <h1 className="p3-inches">Inches</h1>
                <select className="p3-btn2" onChange={e=>setinches(e.target.value)}>
                    <option value="0">0"</option>
                    <option value="1">1"</option>
                    <option value="2">2"</option>
                    <option value="3">3"</option>
                    <option value="4">4"</option>
                    <option value="5">5"</option>
                    <option value="6">6"</option>
                    <option value="7">7"</option>
                    <option value="8">8"</option>
                    <option value="9">9"</option>
                    <option value="10">10"</option>
                    <option value="11">11"</option>
                </select>
            </div>
            <button className="p3-save" onClick={handle}>SAVE</button>
            <h2 className="p3-error">{error}</h2>
            </div>
        </>
    )
}