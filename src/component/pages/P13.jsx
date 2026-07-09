import "../../style/pages/P13.css"
export default function P13(){
    const outfitColor = localStorage.getItem("color")
    const hair = localStorage.getItem("hairstyle")
    const makeup = localStorage.getItem("makeup")
    const outfit = localStorage.getItem("outfit")
    const footwear = localStorage.getItem("footwear")
    return(
        <>
        <div className="p13-head">
            <h1 className="p13-heading">Here Is Your Final Look</h1>
            <p className="p13-text">Your dream look is ready — own it! ✨</p>
            <div className="p13-layers">
                <img src="p13-img.png" alt="img not found" className="p13-maniqune"/>
                <img src={`${hair}.png`} alt="img not found" className="p13-hair"/>
                <img src={`${makeup}.png`} alt="img not found" className="p13-makeup"/>
                <img src={`${outfit}.png`} alt="img not found" className="p13-outfit"/>
                <img src={`${footwear}.png`} alt="img not found" className="p13-footwear"/>
            </div>
            <h1 className="p13-rate">Rate Your Look!</h1>
            <h1 className="p13-star">⭐️ ⭐️ ⭐️ ⭐️ ⭐️</h1>
        </div>
        </>
    )
}