import "../../style/pages/P17.css"
import { useNavigate } from "react-router-dom"
export default function P17(){
    const Navigate = useNavigate()
    return(
        <>
        <div className="p17-head">
            <h1 className="p17-heading">Style Made For You</h1>
            <p className="p17-text">Hairstyle that flatter your outfit perfectly 🎀</p>

            <div className="p17-btn">
                <img src="p17-img1.png" alt="" className="p17-img1"/>
                <button className="p17-btn1" onClick={()=>localStorage.setItem("hairstyle","p17-img1")}>Select</button>

                <img src="p17-img2.png" alt="" className="p17-img2"/>
                <button className="p17-btn2" onClick={()=>localStorage.setItem("hairstyle","p17-img2")}>Select</button>

                <img src="p17-img3.png" alt="" className="p17-img3"/>
                <button className="p17-btn3" onClick={()=>localStorage.setItem("hairstyle","p17-img3")}>Select</button>

                <img src="p17-img4.png" alt="" className="p17-img4"/>
                <button className="p17-btn4" onClick={()=>localStorage.setItem("hairstyle","p17-img4")}>Select</button>

                <img src="p17-img5.png" alt="" className="p17-img5"/>
                <button className="p17-btn5" onClick={()=>localStorage.setItem("hairstyle","p17-img5")}>Select</button>

                <img src="p17-img6.png" alt="" className="p17-img6"/>
                <button className="p17-btn6" onClick={()=>localStorage.setItem("hairstyle","p17-img6")}>Select</button>

                <img src="p17-img7.png" alt="" className="p17-img7"/>
                <button className="p17-btn7" onClick={()=>localStorage.setItem("hairstyle","p17-img7")}>Select</button>

                <img src="p17-img8.png" alt="" className="p17-img8"/>
                <button className="p17-btn8" onClick={()=>localStorage.setItem("hairstyle","p17-img8")}>Select</button>

                <button className="p17-next" onClick={()=> Navigate("/P7")}>SAVE</button>
            </div>
        </div>
        </>
    )
}