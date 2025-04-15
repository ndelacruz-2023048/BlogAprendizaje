import { Icon } from "@iconify/react/dist/iconify.js"
import styled from "styled-components"

export const EngagementButton = ({icon,value,text,sizeIcon}) => {
    return (
        <Container sizeIcon={sizeIcon}>
            <Icon icon={icon} className="icon"/>
            <Value>{value}</Value>
            <Text>{text}</Text>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 2px;
    border: 1px solid rgba(111, 111, 111, 0.2);
    border-radius: 20px;
    padding: 4px 11px;
    .icon{
        font-size: ${(props)=>props.sizeIcon};
        color: rgb(111, 111, 111);
    }
`

const Value = styled.p`
font-size: 13px;
    
`
const Text = styled.p`
    font-size: 13px;
`