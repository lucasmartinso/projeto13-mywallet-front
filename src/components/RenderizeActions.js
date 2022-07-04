import styled from "styled-components";

export default function RenderizeActions({date,description,value,type}) { 
    return(
        <OneRecord type={type}>
            <a>{date}</a> 
            <ItemDescription><span>{description}</span></ItemDescription>
            <b>{value.toFixed(2)}</b>
        </OneRecord> 
    )
} 

const OneRecord = styled.li` 
    margin-bottom: 18px; 
    display: flex; 
    justify-content: space-between; 
    a { 
        color: rgba(198, 198, 198, 1); 
    } 

    span { 
        color: rgba(0, 0, 0, 1);
    } 

    b { 
        color: ${props => props.type === "entrada" ? "rgba(3, 172, 0, 1)" : "rgba(199, 0, 0, 1)"};
    }
` 
const ItemDescription = styled.div`
    width: 300px;
    display: flex; 
    justify-content: flex-start;
    padding-left: 12px;
`