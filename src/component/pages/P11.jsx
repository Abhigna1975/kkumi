import "../../style/pages/P11.css"
import { useNavigate } from "react-router-dom"
export default function P11(){
    const Navigate = useNavigate()
    return(
        <>
        <div className="p11-head">
            <h1 className="p11-heading">Style Made For You</h1>
            <p className="p11-text">Outfits that flatter your shape & tone perfectly 🎀</p>

            <div className="p11-btn">
                <img src="/p11-img1.png" alt="" className="p11-img1"/>
                <button className="p11-btn1" onClick={()=>localStorage.setItem("outfit","p11-img1")}>Gown</button>

                <img src="/p11-img2.png" alt="" className="p11-img2"/>
                <button className="p11-btn2" onClick={()=>localStorage.setItem("outfit","p11-img2")}>Skirt</button>

                <img src="/p11-img3.png" alt="" className="p11-img3"/>
                <button className="p11-btn3" onClick={()=>localStorage.setItem("outfit","p11-img3")}>Jeans</button>

                <img src="/p11-img4.png" alt="" className="p11-img4"/>
                <button className="p11-btn4" onClick={()=>localStorage.setItem("outfit","p11-img4")}>Onepiece</button>

                <button className="p11-next" onClick={()=> Navigate("/P7")}>SAVE</button>
            </div>
        </div>
        </>
    )
}
