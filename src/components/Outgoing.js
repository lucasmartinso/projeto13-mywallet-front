import styled from "styled-components"; 
import axios from "axios"; 
import { useState } from "react";  
import { ThreeDots } from  'react-loader-spinner'; 
import { useNavigate } from "react-router-dom"; 

export default function Outgoing({userData}) {  
    const [clicked, setClicked] = useState(false); 
    const [value, setValue] = useState();
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    function sendInfo(event) { 
        event.preventDefault(); 

        setClicked(true);
        const info = {value,description}; 
        const config = {
            headers: {Authorization: `Bearer ${userData.token}`}
        };  
        const promise = axios.post("https://projeto13-mywallet-back-lucas.herokuapp.com/outgoing",info,config); 

        promise.then(response => { 
            console.log(response.data); 
            navigate("/main");
        }); 

        promise.catch(error => { 
            console.log(error); 
            alert("DADOS INVÁLIDOS OU INCORRETOS"); 
            navigate("/");
            window.location.reload();  
        });
    }

    return(
        <Container>
            <Title>
                <h3>Nova Saída</h3>
            </Title> 

            <form onSubmit={sendInfo}>
            <Data>
            <input type="number" placeholder= "Valor" value={value} onChange={(event) => setValue(event.target.value)} required/>
            <input type="text" placeholder="Descrição" value={description} onChange={(event) => setDescription(event.target.value)} required/>  
            <button>
                {clicked ? (
                    <ThreeDots color="white" height={80} width={80} /> 
                ) : ("Salvar saída") }
            </button>
            </Data> 
        </form> 
        </Container>
    )
}  

const Container = styled.div`
    width: 100%; 
    height: 100%; 
    padding: 25px 25px 16px 25px;
    display: flex; 
    align-items: center; 
    flex-direction: column;
` 
const Title = styled.div`
    width: 100%; 
    height: 100%;
    margin-bottom: 40px; 

    h3{ 
        color: rgba(255, 255, 255, 1);
        font-size: 26px;
        font-weight: 700;
    }  
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
        font-weight: 700;
        box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.15);

        &:hover { 
            cursor: pointer;
        }
    }
`