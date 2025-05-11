import styled from "styled-components"
import card_blog from '../../../assets/card_blog.jpg'
import { EngagementButton } from "../../moleculas/EngagementButton"
import { Device } from "../../../styles/Breakpoints"
export const Card = ({titlePublication,shortDescription,imagePublication}) => {
    return (
        <Container>
            <Section>
                <Image src={imagePublication} alt="Card Image" />
                <Detail>
                    <Title>{titlePublication}</Title>
                    <Description>{shortDescription}</Description>
                    <Info>
                        <EngagementButton icon="lets-icons:comment-light" value={5} text="comments" sizeIcon="20px"/>
                        <EngagementButton icon="icon-park-outline:like" value={5} text="likes" sizeIcon="15px"/>
                    </Info>
                </Detail>
            </Section>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    width: 95%;
    margin: auto;
    height: 350px;
    border: 1px solid rgba(111, 111, 111, 0.2);
    border-radius: 10px;
    @media ${Device.laptop}{
        width: 45%;
        margin: 0;
    }
`

const Section = styled.div`
    width: 90%;
    height: 90%;
    margin: auto;
`
const Image = styled.img`
    width: 100%;
    height: 60%;
    object-fit: cover;
    border-radius: 10px;
`

const Detail = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    height: 40%;
`

const Title = styled.h2`
    font-size: 20px;
    color: #333;
`
const Description = styled.p`
    font-size: 13px;
`

const Info = styled.div`
    display: flex;
    gap: 5px;
`

const Value = styled.p`
    font-size: 18px;
    color: #666;
`
