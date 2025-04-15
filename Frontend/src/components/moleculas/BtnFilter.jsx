import styled from "styled-components"

export const BtnFilter = ({text,value,state})=>{
    return(
        <Button className={state ? "active" : ""}>
            <Text>{text}</Text>
            <Value className="number">{value}</Value>
        </Button>
    )
}

const Button = styled.button`
    display: flex;
    align-items: center;
    border:1px solid rgba(111, 111, 111, 0.2);
    border-radius: 20px;
    padding: 4px 11px;
    color:#032b4f;
    gap: 10px;
    background-color: #fff;
    &:hover{
        background-color: rgba(111, 111, 111, 0.2);
    }
    &.active{
        background-color: #032b4f;
        color: #fff;
        .number{
            background-color: #dd5100;
        }
    }


`

const Text = styled.p`

`
const Value = styled.p`
    background-color: rgba(111, 111, 111, 0.2);
    border-radius: 50%;
    padding: 5px 9px;
    font-size: 15px;
    font-weight: 400;

`