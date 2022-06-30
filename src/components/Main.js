import styled from "styled-components"; 
import axios from "axios"; 
import { useState } from "react";  
import { useNavigate } from "react-router-dom";

export default function Main() { 
    return( 
        <Container>
            <Header>
                <h2>Olá, Fulano</h2> 
                <ion-icon name="exit-outline"></ion-icon>
            </Header> 

            <Records>
                <h3>Não há registros de entrada ou saída</h3>
            </Records>

            <OptionBoxes>
                <button>
                    <ion-icon name="add-circle-outline"></ion-icon> 
                    <h4>Nova Entrada</h4>
                </button> 
                <button>
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
const Records = styled.div`
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