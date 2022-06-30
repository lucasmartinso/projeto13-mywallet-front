import { useState } from "react";
import styled from "styled-components"; 
import { ThreeDots } from  'react-loader-spinner'; 
import { useNavigate } from "react-router-dom";
import axios from "axios";


export default function Login() { 
    const [clicked, setClicked] = useState(false); 
    const navigate = useNavigate(); 

    return(
        <>
        <Title>MyWallet</Title> 

        <form>
            <Data>
            <input type="email" placeholder= "Email" required/>
            <input type="password" placeholder="Senha" required/>  
            <button onClick={() => setClicked(true)}>
                {clicked ? (
                    <ThreeDots color="white" height={80} width={80} /> 
                ) : ("Entrar") }
            </button>
            </Data> 
        </form> 

        </>
    )
}

const Title = styled.div`
    width: 100%; 
    height: 100%; 
    display: flex; 
    justify-content: center; 
    font-family: 'Saira Stencil One', cursive;
    color: rgba(255, 255, 255, 1); 
    margin-top: 159px;  
    margin-bottom: 26px; 
    font-size: 32px;
` 
const Data = styled.div` 
    width: 100%; 
    height: 100%; 
    display: flex; 
    align-items: center; 
    flex-direction: column;  

    input{  
        width: 326px;
        height: 58px; 
        display: flex; 
        align-items: center;
        background-color: rgba(255, 255, 255, 1);
        font-color: rgba(0, 0, 0, 1); 
        padding-left: 15px; 
        font-size: 20px; 
        margin-bottom: 14px;  
        border-radius: 5px;
        border: none;
    }

    button{ 
        width: 326px; 
        height: 46px; 
        display: flex; 
        justify-content: center; 
        align-items: center;
        background-color: rgba(163, 40, 214, 1);
        color: rgba(255, 255, 255, 1); 
        font-size: 20px;
        border-radius: 5px;
        border: none;
        font-weight: bold;
        box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.15);

        &:hover { 
            cursor: pointer;
        }
    }
`