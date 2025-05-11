import styled from "styled-components"
import { ProfileCard } from "../organismos/Home/ProfileCard"
import { Device } from "../../styles/Breakpoints"
import { ContentSection } from "../organismos/Home/ContentSection"
import { Comments } from "../organismos/Comments/Comments"

export const HomeTemplate=()=>{
    return(
        <Container>
            <Header/>
            <Main>
                <ProfileCard/>
                <ContentSection/>
                <Comments/>
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
    background-color: #efefef;
    height: 100%;
`

const Header = styled.div`
    background-color: #fff;
    height: 80px;
    width: 100%;
`

const Main = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
    margin-bottom: 20px;
    @media ${Device.tablet}{
        width: 80%;
    }
    @media ${Device.laptop}{
        width: 90%;
    }
    @media ${Device.desktop}{
        width: 80%;
    }
`