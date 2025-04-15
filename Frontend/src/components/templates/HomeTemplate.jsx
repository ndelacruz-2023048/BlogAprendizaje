import styled from "styled-components"
import { ProfileCard } from "../organismos/Home/ProfileCard"
import { Device } from "../../styles/Breakpoints"

export const HomeTemplate=()=>{
    return(
        <Container>
            <Header/>
            <Main>
                <ProfileCard/>
            </Main>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    width: 100%;
    background-color: #d7d7d7;
    height: 100vh;
`

const Header = styled.div`
    background-color: #fff;
    height: 80px;
    width: 100%;
`

const Main = styled.div`
    display: flex;
    width: 100%;
    @media ${Device.tablet}{
        width: 80%;
    }
    @media ${Device.laptop}{
        width: 60%;
    }
`