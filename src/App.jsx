import {BrowserRouter,Routes,Route,Link,Navigate, useNavigate,useLocation, RouterProvider} from "react-router-dom"
import Nav from "./component/Nav"
import Home from "./component/Home"
import Login from "./component/Login"
import Signup from "./component/Signup"
import Contactus from "./component/Contactus"
import Page2 from "./component/page2"
import P1 from "./component/pages/P1"
import P2 from "./component/pages/P2"
import P3 from "./component/pages/P3"
import P4 from "./component/pages/P4"
import P5 from "./component/pages/P5"
import P6 from "./component/pages/P6"
import P7 from "./component/pages/P7"
import P8 from "./component/pages/P8"
import P9 from "./component/pages/P9"
import P10 from "./component/pages/P10"
import P11 from "./component/pages/P11"
import P12 from "./component/pages/P12"
import P13 from "./component/pages/P13"
import P14 from "./component/pages/P14"
import P15 from "./component/pages/P15"
import P16 from "./component/pages/P16"
import P17 from "./component/pages/P17"
import Recomendations from "./component/Recomendations"
import "./App.css"
import { useState,createContext } from "react"

export const Usercontext = createContext();
export default function App(){
  const [selections,setselections]=useState({})
  return(
    <Usercontext.Provider value={{selections,setselections}}>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<><Home/><Nav/></>} name="Home"/>
            <Route path="/Login" element={<><Login/><Nav/></>} name="Login"/>
            <Route path="/Signup" element={<><Signup/><Nav/></>} name="Signup"/>
            <Route path="/Contactus" element={<><Contactus/><Nav/></>} name="Contactus"/>
            <Route path="/Page2" element={<><Page2/><Nav/></>} name="Page2"/>
            <Route path="/P1" element={<><P1/><Nav/></>} name="P1"/>
            <Route path="/P2" element={<><P2/><Nav/></>} name="P2"/>
            <Route path="/P3" element={<><P3/><Nav/></>} name="P3"/>
            <Route path="/P4" element={<><P4/><Nav/></>} name="P4"/>
            <Route path="/P5" element={<><P5/><Nav/></>} name="P5"/>
            <Route path="/P6" element={<><P6/><Nav/></>} name="P6"/>
            <Route path="/P7" element={<><P7/><Nav/></>} name="P7"/>
            <Route path="/P8" element={<><P8/><Nav/></>} name="P8"/>
            <Route path="/P9" element={<><P9/><Nav/></>} name="P9"/>
            <Route path="/P10" element={<><P10/><Nav/></>} name="P10"/>
            <Route path="/P11" element={<><P11/><Nav/></>} name="P11"/>
            <Route path="/P12" element={<><P12/><Nav/></>} name="P12"/>
            <Route path="/P13" element={<><P13/><Nav/></>} name="P13"/>
            <Route path="/P14" element={<><P14/><Nav/></>} name="P14"/>
            <Route path="/P15" element={<><P15/><Nav/></>} name="P15"/>
            <Route path="/P16" element={<><P16/><Nav/></>} name="P16"/>
            <Route path="/P17" element={<><P17/><Nav/></>} name="P17"/>
            <Route path="/Recomendations" element={<><Recomendations/><Nav/></>} name="Recomendations"/>
            <Route path="*" element={<Navigate to="/"/>} name=""/>
          </Route>
        </Routes>
    </BrowserRouter>
    </Usercontext.Provider>
  )
}