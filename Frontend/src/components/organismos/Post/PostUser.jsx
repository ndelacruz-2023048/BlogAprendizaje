import styled from "styled-components"
import gorrarkinal from '../../../assets/gorrarkinal.avif'
import { Circle } from "../../atomos/Circle"
import { Device } from "../../../styles/Breakpoints"
export const PostUser =()=>{
    return(
        <Container>
            <Image src={gorrarkinal}/>
            <ProfileDescription>
                <Section1>
                    <UserName>Nery de la Cruz</UserName>
                </Section1>
                <Section2>
                    <TextPosted className="descriptionUser">Posted: </TextPosted>
                    <DatePosted className="descriptionUser">Jan 05, 2024</DatePosted>
                    <Circle circleWidth="5px" circleHeight="5px" circleColor="#ababab" />
                    <TimeReading className="descriptionUser">5 mins read</TimeReading>
                </Section2>
            </ProfileDescription>
        </Container>
    )
}

const Container =  styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`

const Image = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`

const ProfileDescription = styled.div`
    display: flex;
    flex-direction: column;
`

const Section1 = styled.div`
    
`

const Section2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 4px;
    .circle{
        display: none;
    }
    @media ${Device.tablet}{
        flex-direction: row;
        align-items: center;
        font-size: 12px;
        .circle{
            display: flex;
        }
    }
`

const UserName = styled.p`
    font-weight: 400;
`

const TextPosted = styled.p`
    
    color:#777474;
    font-size:12px;
font-weight:500;
`
const DatePosted = styled.p`
        
    color:#777474;
    font-size:12px;
    font-weight:500;
`

const TimeReading = styled.p`
        
    color:#777474;
    font-size:12px;
    font-weight:500;
`
