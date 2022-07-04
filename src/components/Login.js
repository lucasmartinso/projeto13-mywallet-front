import { useState } from "react";
import styled from "styled-components"; 
import { ThreeDots } from  'react-loader-spinner'; 
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";


export default function Login({setUserData}) { 
    const [clicked, setClicked] = useState(false); 
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 

    const navigate = useNavigate(); 

    function sendInfo(event) { 
        event.preventDefault(); 

        setClicked(true);
        const info = {email,password}; 
        const promise = axios.post("http://localhost:4000/login",info); 

        promise.then(response => { 
            setUserData(response.data); 
            navigate("/main");
        }); 

        promise.catch(error => { 
            console.log(error); 
            alert("DADOS INVÁLIDOS, EMAIL OU SENHA INCORRETOS"); 
            window.location.reload();  
        });
    } 

    return(
        <>
        <Title>MyWallet</Title> 

        <form onSubmit={sendInfo}>
            <Data>
            <input type="email" placeholder= "Email" value={email} onChange={(event) => setEmail(event.target.value)} required/>
            <input type="password" placeholder="Senha" value={password} onChange={(event) => setPassword(event.target.value)} required/>  
            <button>
                {clicked ? (
                    <ThreeDots color="white" height={80} width={80} /> 
                ) : ("Entrar") }
            </button>
            </Data> 
        </form> 
        
        <Link to="/signUp"><Message>Primeira vez? Cadastre-se!</Message></Link>
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
const Message = styled.div`
    display: flex; 
    justify-content: center; 
    color: rgba(255, 255, 255, 1);; 
    font-size: 20px; 
    font-weight: 700;  
    margin-top: 32px; 
    text-decoration: underline; 
    text-decoration-color: #9153BD;

    &:hover { 
        cursor: pointer; 
    }
`