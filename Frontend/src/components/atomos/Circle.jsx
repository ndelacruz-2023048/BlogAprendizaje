import styled from "styled-components"

export const Circle = ({circleHeight,circleWidth,circleColor,circleClass})=>{
    return(
        <Point circleHeight={circleHeight} circleWidth={circleWidth} circleColor={circleColor} circleClass={circleClass}/>
    )
}

const Point = styled.span`
    width: ${(props)=>props.circleHeight};
    height: ${(props)=>props.circleWidth};
    border-radius: 50%;
    background-color: ${(props)=>props.circleColor};
`