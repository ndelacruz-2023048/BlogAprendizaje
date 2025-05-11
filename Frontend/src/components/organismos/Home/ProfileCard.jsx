import styled from "styled-components"
import fondo from '../../../assets/fondo.webp'
import { MetricCard } from "../../moleculas/MetricCard"
import { Device } from "../../../styles/Breakpoints"
import Gorra from "../../../assets/gorrarkinal.avif"
import { IconSocialMedia } from "../../atomos/IconSocialMedia"
import usePublicationStore from "../../../../stores/PublicationStore"
export const ProfileCard = ()=>{
    const {publications}= usePublicationStore()
    return(
        <Container>
            <Main>
                <Section1>
                    <StatsPanel>
                        <ContainerMetrics>
                            <MetricCard value={publications?.data?.length} title={"Posts"} left='30%' bottom='25%'/>
                            <MetricCard value={150} title={"Comments"}left='70%' bottom='25%'/>
                            <MetricCard value={56} title={"Likes"}/>
                        </ContainerMetrics>
                    </StatsPanel>
                </Section1>
                <Section2>
                    <SocialMedia>
                        <IconSocialMedia image="prime:twitter" size='18px'/>
                        <IconSocialMedia image="ant-design:instagram-outlined" size='25px'/>
                        <IconSocialMedia image="icomoon-free:facebook" size="20px"/>
                    </SocialMedia>
                    <Info>
                        <Title>Blog(Taller,Tecnologia,Practica)🔥</Title>
                        <Description>Ciudad de Guatemala,Guatemala</Description>
                    </Info>
                </Section2>
            </Main>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    height: 350px;
    width: 100%;
    background-color: #fff;
    border-radius: 20px;
`

const Main = styled.div`
    margin: auto;
    height: 95%;
    width: 95%;
`

const Section1 = styled.div`
    position: relative;
    background-image: url(${fondo});
    background-size: cover;
    width: 100%;
    height: 60%;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: start;
    /* position: relative; */
    @media ${Device.tablet}{
        justify-content: center;
        align-items: start;
    }
    @media ${Device.desktop}{
        justify-content: end;
        align-items: end;
    }
`

const StatsPanel = styled.div`
    display: flex;
    justify-content: center;
    height: 30%;
    width: 90%;
    z-index: 10;
    margin-top: 10px;
    backdrop-filter: blur(10px);
    border: 0.2px solid rgb(225, 225, 225,0.7);
    border-radius: 10px;
    
    @media ${Device.laptop}{
        height: 30%;
        backdrop-filter: blur(70px);
    }
    @media ${Device.desktop}{
        backdrop-filter: blur(10px);
        width: 35%;
        margin-bottom: 10px;
        margin-right: 10px;
    }
`

const ContainerMetrics= styled.div`
    display: flex;
    justify-content: space-between;
    gap: 8px;
    width: 80%;
    height: 85%;
    margin: auto;
    @media ${Device.tablet}{
        flex-direction: row;
        align-items: center;

    }
`


const Section2 = styled.div`
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    background-color: #fff;
    height: 40%;
    @media ${Device.tablet}{
        flex-direction: column;
    }

`

const SocialMedia = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    height: 20%;
    @media ${Device.tablet}{
        justify-content: end;
    }
`

const Info = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    flex-direction: column;
    height: 60%;
`

const Title = styled.h3`
    position: relative;
    font-weight: 500;
    &::after{
        position: absolute;
        content: "";
        width: 130px;
        height: 130px;
        background-color: #dd1414;
        bottom: 30px;
        left: 30%;
        background-image: url(${Gorra});
        background-size: cover;
        border-radius: 50%;
        border: 5px solid #fff;
        z-index: 10;
    }
    font-size: 20px;
`

const Description = styled.p`
    font-weight: 200;
    font-size: 15px;
`