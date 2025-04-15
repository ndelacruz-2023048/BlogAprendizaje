import { Icon } from "@iconify/react/dist/iconify.js"
import styled from "styled-components"

export const BtnFilter2 = ()=>{
    return(
        <Container>
            <Icon icon="proicons:tune" className="icon"/>
        </Container>
    )
}

const Container = styled.button`
    background-color: #fff;
    border: 1px solid rgba(111, 111, 111, 0.2);
    border-radius: 20px;
    padding: 4px 20px;
    .icon{
        color:#044681;
        font-size: 20px;
    }
    &:hover{
        background-color: rgba(111, 111, 111, 0.2);
    }
`