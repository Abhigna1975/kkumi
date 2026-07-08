import "../../style/pages/P8.css"
import { useNavigate } from "react-router-dom"
export default function P8(){
    const Navigate = useNavigate()
    return (
        <>
        <div className="p8-heading">
            <h1 className="p8-head">Colors that suit ‘FAIR’ skin tone</h1>
            <div className="p8-btn">
                <button className="p8-skin" onClick={()=>localStorage.setItem("color","blush pink")}>Blush Pink</button> <br />
                <button className="p8-height" onClick={()=>localStorage.setItem("color","Baby Blue")}>Baby Blue</button> <br />
                <button className="p8-body" onClick={()=>localStorage.setItem("color","Lavender")}>Lavender</button> <br />
                <button className="p8-face" onClick={()=>localStorage.setItem("color","Mint Green")}>Mint Green</button> <br />
                <button className="p8-wedding" onClick={()=>localStorage.setItem("color","Soft White")}>Soft White</button> <br />
                <button className="p8-peach" onClick={()=>localStorage.setItem("color","Light Peach")}>Light Peach</button> <br /> 

                <button className="p8-next" onClick={()=>Navigate("/P7")}>SAVE</button>
            </div>
        </div>
        </>
    )
}