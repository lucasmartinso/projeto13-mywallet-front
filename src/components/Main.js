import styled from "styled-components"; 
import axios from "axios"; 
import { useState, useEffect } from "react";  
import { useNavigate } from "react-router-dom";
import RenderizeActions from "./RenderizeActions";

export default function Main({userData}) {  
    const [actions, setActions] = useState();
    const [sum, setSum] = useState(0);
    const navigate = useNavigate(); 
    
    useEffect(() => {
        const config = { 
            headers: {Authorization : `Bearer ${userData.token}`}
        }; 
        
        const promise = axios.get("http://localhost:4000/records",config);

        promise.then(response => { 
            setActions(response.data);
            sumAll();
        });  

        promise.catch(error => { 
            console.log(error); 
            alert("ERRO AO CARREGAR");
            navigate("/");
        });
    }, []);  

   function sumAll() { 
        let soma = 0;
        for(let i=0; i<actions.length; i++) { 
            if(actions[i].type === "entrada") { 
                soma = actions[i].value;
            } else { 
                soma -= actions[i].value;
            }
        } 
        setSum(soma);
   } 

   console.log(sum);

    return( 
        <Container>
            <Header>
                <h2>Olá, {userData.name}</h2> 
                <ion-icon name="exit-outline" onClick={() => navigate("/")}></ion-icon>
            </Header>  

            {actions ? (
                <Records> 
                {actions.map(action => 
                    <RenderizeActions 
                        date = {action.date} 
                        description = {action.description}
                        value = {action.value}
                        type = {action.type}
                    />
                )}
                    <Total sum={sum}>
                        <a>SALDO</a>
                        <span>{sum}</span>
                    </Total>
                </Records> ) : (
                <WhiteNote> 
                    <h3>Não há registros de entrada ou saída</h3>
                </WhiteNote> 
            )}

            <OptionBoxes>
                <button onClick={() => navigate("/revenue")}>
                    <ion-icon name="add-circle-outline"></ion-icon> 
                    <h4>Nova Entrada</h4>
                </button> 
                <button onClick={() => navigate("/outgoing")}>
                    <ion-icon name="remove-circle-outline"></ion-icon>
                    <h4>Nova Saída</h4>
                </button>
            </OptionBoxes>
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
const Header = styled.div`
    width: 100%; 
    height: 100%; 
    display: flex; 
    justify-content: space-between; 
    color: rgba(255, 255, 255, 1);  
    margin-bottom: 22px;

   h2{ 
       font-size: 26px;
       font-weight: 700;
   } 

   ion-icon { 
       width: 24px;
       height: 24px; 

        &:hover { 
            cursor:pointer; 
        }
    }

`
const WhiteNote = styled.div`
    width: 326px; 
    height: 446px; 
    background-color: rgba(255, 255, 255, 1); 
    margin-bottom: 13px; 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    border-radius: 5px; 
    box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.15);

    h3 { 
        width: 180px; 
        height: 46px;
        display: flex; 
        align-text: center;
        color: rgba(134, 134, 134, 1);
        font-size: 20px; 
        text-align: center;
    }
` 
const Records = styled.ul`
    width: 326px; 
    height: 446px; 
    background-color: rgba(255, 255, 255, 1); 
    padding: 23px 11px 10px 12px;
    margin-bottom: 13px; 
    display: flex; 
    flex-direction: column;
    border-radius: 5px; 
    box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.15);  
    font-size: 16px; 
`
const Total = styled.div` 
    height: 1000px;
    display: flex; 
    justify-content: space-between;
    align-items: flex-end;

    a { 
        font-weight: 700;
    } 

    span { 
        color: ${props => props.sum > 0 ? "rgba(3, 172, 0, 1)" : "rgba(199, 0, 0, 1)"};
    }
`
const OptionBoxes = styled.div`
    width: 100%; 
    height: 100%; 
    display: flex; 
    justify-content: space-between;  
    
    button { 
        display: flex; 
        justify-content: space-between; 
        flex-direction: column;
        width: 155px; 
        height: 114px; 
        background-color: rgba(163, 40, 214, 1); 
        padding: 10px 0px 10px 10px;  
        color: rgba(255, 255, 255, 1); 
        border: none; 
        border-radius: 5px;
        box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.15); 

        &:hover { 
            cursor: pointer;
        }
    }

    ion-icon { 
        width: 22px;
        height: 22px; 
    } 

    h4{ 
        width: 64px; 
        height: 40px;
        display: flex; 
        align-text: center;
        font-size: 17px; 
        text-align: justify;
    } 

    &:hover { 
        cursor: pointer;
    }
`