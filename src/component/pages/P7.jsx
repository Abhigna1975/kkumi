import "../../style/pages/P7.css"
import { Navigate, useNavigate } from "react-router-dom"
export default function P7(){
    const Navigate = useNavigate()
    return (
        <>
        <div className="p7-heading">
            <h1 className="p7-head">What's the Occasion?</h1>
            <p className="p7-text">We'll style you perfectly for every moment! 🌸</p>
            <div className="p7-btn">
                <button className="p7-skin" onClick={()=> Navigate("/P8")}>Outfit Colors</button> <br />
                <button className="p7-height" onClick={()=> Navigate("/P17")}>Hair</button> <br />
                <button className="p7-body" onClick={()=> Navigate("/P10")}>Makeup</button> <br />
                <button className="p7-face" onClick={()=> Navigate("/P11")}>Outfits</button> <br />
                <button className="p7-wedding" onClick={()=> Navigate("/P12")}>Footwear</button> <br />

                <button className="p7-next" onClick={()=> Navigate("/P13")}>HERE IS HOW YOU LOOK 🌟</button>
            </div>
        </div>
        </>
    )
}