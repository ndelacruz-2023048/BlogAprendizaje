import styled from "styled-components"
import { Post } from "../organismos/Post/Post"
import { Icon } from "@iconify/react/dist/iconify.js"
import { Device } from "../../styles/Breakpoints"
import { NavLink } from "react-router"
import { Comments } from "../organismos/Comments/Comments"

export const PostTemplate = ()=>{
    return(
        <Container>
            <HeaderStyle/>
            <MenuPost>
                <IconContainer>
                    <Icon icon="lets-icons:favorite-light" className="icon"/>
                </IconContainer>
                <IconContainer>
                    <Icon icon="mdi-light:comment" className="icon"/>
                </IconContainer>
                <IconContainer>
                    <NavLink to="/">
                        <Icon icon="octicon:home-24" className="icon"/>
                    </NavLink>
                </IconContainer>
            </MenuPost>
            <Post/>
            <Comments/>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 50px;
`
const HeaderStyle = styled.div`
    width: 100%;
    height: 90px;
    background-color: #fff;
    border-bottom: 2px solid #e7e4e4;
`

const MenuPost = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    height: auto;
    width: auto;
    position: fixed;
    top: 15%;
    right: 5%;
    @media ${Device.tablet}{
        top: 15%;
        right: 2%;
    }
    @media ${Device.laptop}{
        top: 15%;
        right: 4%;
    }
    @media ${Device.desktop}{
        top: 15%;
        right: 10%;
    }
`

const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f8f6f6;
    border-radius: 50%;
    padding: 8px;
    .icon{
        color: #bbbbbb;
        font-size: 26px;
        font-weight: 500;
        stroke-width: 1.2;
    }
    @media ${Device.tablet}{
        padding: 10px;
        .icon{
            font: 35px;
        }
    }
    @media ${Device.laptop}{
        padding: 15px;
        .icon{
            font: 35px;
        }
    }
`
