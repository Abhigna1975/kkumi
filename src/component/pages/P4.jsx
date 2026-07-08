import "../../style/pages/P4.css"
import { useState,useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Usercontext } from "../../App";

export default function P4(){
    const Navigate = useNavigate()
    const [selected, setselected] = useState("")
    const { selections, setselections } = useContext(Usercontext);
    const [error,seterror] = useState("")
    function handle(){
        if(selected === ""){
            seterror("Please select you body shape to proceed")
        }
        else{
            setselections({...selections, bodyshape: selected}), Navigate("/P1")
        }
    }
    return(
        <>
        <div className="p4-head">
            <h1 className="p4-heading">Select Your Body Shape?</h1>
            <p className="p4-text">Tap to find your perfect look! 🌸</p>

            <div className="p4-img">
                <img src="/p4-img1.png" alt="" className="p4-img1"/>
                <img src="/p4-img2.png" alt="" className="p4-img2"/>
                <img src="/p4-img3.png" alt="" className="p4-img3"/>
                <img src="/p4-img4.png" alt="" className="p4-img4"/>
                <img src="/p4-img5.png" alt="" className="p4-img5"/>
            </div>

            <div className="p4-btn">
                <button className="p4-btn1" onClick={()=>setselected("Rectangle")}
  style={{backgroundColor: selected==="Rectangle"?"#ff6b8a":"#E8849A"}}>Rectangle</button>
                <button className="p4-btn2" onClick={()=>setselected("Pear")}
  style={{backgroundColor: selected==="Pear"?"#ff6b8a":"#E8849A"}}>Pear</button>
                <button className="p4-btn3" onClick={()=>setselected("Hourglass")}
  style={{backgroundColor: selected==="Hourglass"?"#ff6b8a":"#E8849A"}}>Hourglass</button>           
                <button className="p4-btn4" onClick={()=>setselected("Inverted Triangle")}
  style={{backgroundColor: selected==="Inverted Triangle"?"#ff6b8a":"#E8849A"}}>Inverted Triangle</button>
                <button className="p4-btn5" onClick={()=>setselected("Apple")}
  style={{backgroundColor: selected==="Apple"?"#ff6b8a":"#E8849A"}}>Apple</button>
            </div>

            <button className="p4-next" onClick={handle}>SAVE</button>
            <h2 className="p4-error">{error}</h2>
        </div>
        </>
    )
}