import { useNavigate } from "react-router-dom"
import "../style/Home.css"
export default function Home(){
    const navigate = useNavigate()
    return(
        <div className="home-container no-scroll">
            <h1 className="home-head"></h1>
            <h1 className="home-logo"></h1>
            <h1 className="home-text">Because beauty looks different on everyone</h1>
            <button className="home-btn" onClick={()=>navigate("/Page2")}>GET STARTED</button>
        </div>
    )
}