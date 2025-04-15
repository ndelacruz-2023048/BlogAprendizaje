import styled from "styled-components"
import {Icon} from '@iconify/react'
export const IconSocialMedia = ({image,size})=>{
    return(
        <Container size={size}>
            <Icon icon={image} className="icon"/>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;    
    height: 35px;
    border: 3px solid rgba(177, 177, 177, 0.2);
    border-radius: 50%;
    background-color: #fff;
    .icon{
        color: #2e3d51;
        font-size: ${props => props.size};
    }
`