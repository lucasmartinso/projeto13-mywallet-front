import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import Main from "./Main";
import Revenue from "./ Revenue";
import Outgoing from "./Outgoing";

export default function App() {  
    const [userData, setUserData] = useState(""); 
    return( 
        <BrowserRouter>
            <Routes> 
                <Route path="/" element={<Login setUserData={setUserData}/>} /> 
                <Route path="/signUp" element={<SignUp />} />  
                <Route path="/main" element={<Main userData={userData}/>} /> 
                <Route path="/revenue" element={<Revenue userData={userData}/>} /> 
                <Route path="/outgoing" element={<Outgoing userData={userData}/>} /> 
            </Routes> 
        </BrowserRouter>
    )
}