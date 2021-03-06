import styled from "styled-components"; 
import axios from "axios"; 
import { useState } from "react";  
import { ThreeDots } from  'react-loader-spinner'; 
import { useNavigate } from "react-router-dom"; 
import { Link } from "react-router-dom";

export default function SignUp () { 
    const [clicked, setClicked] = useState(false); 
    const [name, setName] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState("");  
    const [confirmPassword, setConfirmPassword] = useState(""); 

    const navigate = useNavigate(); 
    
    function sendInfo(event) { 
        event.preventDefault(); 

        setClicked(true); 
        const info = {name,email, password, confirmPassword}; 
        const promise = axios.post("https://projeto13-mywallet-back-lucas.herokuapp.com/registration",info);

        promise.then(response => { 
            console.log(response.data); 
            navigate("/")
        }); 

        promise.catch(error => {
            console.log(error); 
            alert("USUÁRIO INVÁLIDO OU EXISTENTE\n\nNome, email, senha ou confirmação de senha incorretos ou já existentes\n\nPREENCHA NOVAMENTE!!");
            window.location.reload();
        });
    }
    
    return(
        <>
        <Title>MyWallet</Title> 

        <form onSubmit={sendInfo}>
            <Data>
            <input type="text" placeholder= "Nome" value={name} onChange={(event) => setName(event.target.value)} required/> 
            <input type="email" placeholder= "Email" value={email} onChange={(event) => setEmail(event.target.value)} required/>
            <input type="password" placeholder="Senha" value={password} onChange={(event) => setPassword(event.target.value)} required/> 
            <input type="password" placeholder="Confirme a senha" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} required/> 
            <button>
                {clicked ? (
                    <ThreeDots color="white" height={80} width={80} /> 
                ) : ("Entrar") }
            </button>
            </Data>  
        </form>  

        <Link to="/"><Message>Já tem uma conta? Entre agora!</Message></Link>
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