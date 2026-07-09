import { useState,useContext } from "react"
import { Usercontext } from "../../App"
import "../../style/pages/P2.css"
import {useNavigate} from "react-router-dom"

export default function P2(){
    
    const Navigate = useNavigate()
    const [selected,setselected]=useState("")
    const [error,seterror]=useState("")
    const {selections,setselections}= useContext(Usercontext)
    function handle(){
        if(selected === ""){
            seterror("Please select your skin tone to proceed"); 
        }
        else{
            setselections({...selections, skintone: selected}); 
            Navigate("/P1");}
    }
    return (
        <>
        <div className="p2">
            <h1 className="p2-head">Select Your Skin Tone ?</h1>
            <p className="p2-text">Tap to find your perfect look! 🌸</p>
            <div className="p2-img">    
                <img src="img1.png" alt="" className="p2-img1"/>
                <img src="img2.png" alt="" className="p2-img2"/>
                <img src="img3.png" alt="" className="p2-img3"/>
                <img src="img4.png" alt="" className="p2-img4"/>
                <img src="img5.png" alt="" className="p2-img5"/>
            </div>
            <div className="p2-btn">
                <button className="p2-fair" onClick={()=> setselected("Fair")} 
                    style={{backgroundColor: selected === "Fair"? "#ff6b8a" : "#E8849A"}}>Fair</button>
                <button className="p2-light"  onClick={()=> setselected("Light")} 
                    style={{backgroundColor: selected === "Light"?"#ff6b8a" : "#E8849A"}}>Light</button>
                <button className="p2-medium" onClick={()=> setselected("Medium")} 
                    style={{backgroundColor: selected === "Medium"?"#ff6b8a" : "#E8849A"}}>Medium</button>
                <button className="p2-tan" onClick={()=> setselected("Tan")} 
                    style={{backgroundColor: selected === "Tan"?"#ff6b8a" : "#E8849A"}}>Tan</button>
                <button className="p2-deep" onClick={()=> setselected("Deep")} 
                    style={{backgroundColor: selected === "Deep"?"#ff6b8a" : "#E8849A"}}>Deep</button>
            </div>

                <button className="p2-save" onClick={handle}>SAVE</button>
                <h2 className="p2-error">{error}</h2>
        
        </div>
        </>
    )
}