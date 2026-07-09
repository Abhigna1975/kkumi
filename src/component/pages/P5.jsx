import { useState,useContext} from "react"
import "../../style/pages/P5.css"
import { useNavigate } from "react-router-dom"
import { Usercontext } from "../../App";

export default function P5(){
    const Navigate = useNavigate()
    const [selected,setselected]=useState("")
    const { selections, setselections } = useContext(Usercontext);
    const [error,seterror]=useState("")
    function handle(){
        if(selected===""){
            seterror("Please select your face shape to proceed")
        }else {
            setselections({...selections, faceshape: selected}),Navigate("/P1")
        }
    }
    return(
        <>
        <div className="p5-head">
            <h1 className="p5-heading">Select Your Face Shape?</h1>
            <p className="p5-text">Tap to find your perfect look! 🌸</p>

            <div className="p5-img">
                <img src="p5-img1.png" alt="" className="p5-img1"/>
                <img src="p5-img2.png" alt="" className="p5-img2"/>
                <img src="p5-img3.png" alt="" className="p5-img3"/>
                <img src="p5-img4.png" alt="" className="p5-img4"/>
                <img src="p5-img5.png" alt="" className="p5-img5"/>
                <img src="p5-img6.png" alt="" className="p5-img6"/>
            </div>

            <div className="p5-btn">
                <button className="p5-btn1" onClick={()=>setselected("Oval")}
  style={{backgroundColor: selected==="Oval"?"#ff6b8a":"#E8849A"}}>Oval</button>           
                <button className="p5-btn2" onClick={()=>setselected("Round")}
  style={{backgroundColor: selected==="Round"?"#ff6b8a":"#E8849A"}}>Round</button>
                <button className="p5-btn3" onClick={()=>setselected("Oblong")}
  style={{backgroundColor: selected==="Oblong"?"#ff6b8a":"#E8849A"}}>Oblong</button>
                <button className="p5-btn4" onClick={()=>setselected("Square")}
  style={{backgroundColor: selected==="Square"?"#ff6b8a":"#E8849A"}}>Square</button>
                <button className="p5-btn5" onClick={()=>setselected("Heart")}
  style={{backgroundColor: selected==="Heart"?"#ff6b8a":"#E8849A"}}>Heart</button>
                <button className="p5-btn6" onClick={()=>setselected("Diamond")}
  style={{backgroundColor: selected==="Diamond"?"#ff6b8a":"#E8849A"}}>Diamond</button>
            </div>

            <button className="p5-next" onClick={handle}>SAVE</button>
            <h2 className="p5-error">{error}</h2>
        </div>
        </>
    )
}