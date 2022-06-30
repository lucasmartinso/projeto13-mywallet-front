import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import Main from "./Main";
import Revenue from "./ Revenue";
import Outgoing from "./Outgoing";

export default function App() { 
    return( 
        <BrowserRouter>
            <Routes> 
                <Route path="/" element={<Login />} /> 
                <Route path="/signUp" element={<SignUp />} />  
                <Route path="/main" element={<Main />} /> 
                <Route path="/revenue" element={<Revenue />} /> 
                <Route path="/outgoing" element={<Outgoing />} /> 
            </Routes> 
        </BrowserRouter>
    )
}