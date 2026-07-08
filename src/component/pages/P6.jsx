import "../../style/pages/P6.css"
import { Navigate, useNavigate } from "react-router-dom"
export default function P6(){
    const Navigate = useNavigate()
    return (
        <>
        <div className="p6-container">
            <h1 className="p6-head">What's the Occasion?</h1>
            <p className="p6-text">We'll style you perfectly for every moment! 🌸</p>
            <div className="p6-btn">
                <button className="p6-skin">Casual</button> <br />
                <button className="p6-height">Work</button> <br />
                <button className="p6-body">Party</button> <br />
                <button className="p6-face">Family Gathering</button> <br />
                <button className="p6-wedding">Wedding</button> <br />

                <button className="p6-next" onClick={()=> Navigate("/P")}>NEXT</button>
            </div>
        </div>
        </>
    )
}