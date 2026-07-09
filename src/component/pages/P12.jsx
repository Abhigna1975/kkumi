import "../../style/pages/P12.css"
import { useNavigate } from "react-router-dom"
export default function P12(){
    const Navigate = useNavigate()
    return(
        <>
        <div className="p12-head">
            <h1 className="p12-heading">Your Glow Look</h1>
            <p className="p12-text">Shades that enhance your natural beauty 💄</p>

            <div className="p12-btn">
                <img src="p12-img1.png" alt="" className="p12-img1"/>
                <button className="p12-btn1" onClick={()=>localStorage.setItem("footwear","p12-img1")}>Sneakers</button>

                <img src="p12-img2.png" alt="" className="p12-img2"/>
                <button className="p12-btn2" onClick={()=>localStorage.setItem("footwear","p12-img2")}>Sandals</button>

                <img src="p12-img3.png" alt="" className="p12-img3"/>
                <button className="p12-btn3" onClick={()=>localStorage.setItem("footwear","p12-img3")}>Heels</button>

                <img src="p12-img4.png" alt="" className="p12-img4"/>
                <button className="p12-btn4" onClick={()=>localStorage.setItem("footwear","p12-img4")}>Boots</button>

                <button className="p12-next" onClick={()=> Navigate("/P7")}>SAVE</button>
            </div>
        </div>
        </>
    )
}
