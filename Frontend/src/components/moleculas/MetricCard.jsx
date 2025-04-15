import styled from "styled-components"
import { Device } from "../../styles/Breakpoints"

export const MetricCard = ({value,title,left,bottom}) => {
    return(
        <Container left={left} bottom={bottom}>
            <Value>{value}</Value>
            <Title>{title}</Title>
        </Container>
    )
}

const Container = styled.div`

    
        border-bottom: none;
        padding-bottom: 0;
        &::after{
            content: "";
            position: absolute;
            width: 1px;
            height: 30px;
            background-color: #ffffff7d;
            left: ${props => props.left};
            bottom: ${props => props.bottom};
        }
    

    @media ${Device.desktop}{
        border-bottom: none;
        padding-bottom: 0;

    }
`

const Title = styled.p`
    color: #fff;
    font-weight: 100;
    
`

const Value = styled.p`
    color: #fff;
    
`