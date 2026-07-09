import "../../style/pages/P10.css"
import { useNavigate } from "react-router-dom"
export default function P10(){
    const Navigate = useNavigate()
    return(
        <>
        <div className="p10-head">
            <h1 className="p10-heading">Your Glow Look</h1>
            <p className="p10-text">Shades that enhance your natural beauty 💄</p>

            <div className="p10-btn">
                <img src="p10-img1.png" alt="img not found" className="p10-img1"/>
                <button className="p10-btn1" onClick={()=>localStorage.setItem("makeup","p10-img1")}>Foundation</button>

                <img src="p10-img2.png" alt="img not found" className="p10-img2"/>
                <button className="p10-btn2" onClick={()=>localStorage.setItem("makeup","p10-img2")}>Lipstick</button>

                <img src="p10-img3.png" alt="img not found" className="p10-img3"/>
                <button className="p10-btn3" onClick={()=>localStorage.setItem("makeup","p10-img3")}>Eyeshadow</button>

                <img src="p10-img4.png" alt="img not found" className="p10-img4"/>
                <button className="p10-btn4" onClick={()=>localStorage.setItem("makeup","p10-img4")}>Blush</button>

                <button className="p10-next" onClick={()=> Navigate("/P7")}>SAVE</button>
            </div>
        </div>
        </>
    )
}