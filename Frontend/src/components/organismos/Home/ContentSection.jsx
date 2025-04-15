import styled from "styled-components"
import { BtnFilter } from "../../moleculas/BtnFilter"
import { BtnFilter2 } from "../../moleculas/BtnFilter2"
import { Card } from "./Card"
import { Device } from "../../../styles/Breakpoints"

export const ContentSection = () => {
    return(
        <Container>
            <Section1>
                <FilterCourses>
                    <BtnFilter text="All" value="5"state={true}/>
                    <BtnFilter text="Taller" value="5" state={false}/>
                    <BtnFilter text="Tecnologia" value="5" state={false}/>
                    <BtnFilter text="Práctica Supervisada" value="5"state={false}/>
                </FilterCourses>
                <Filters>
                    <BtnFilter2/>
                </Filters>
            </Section1>
            <Section2>
                <Card/>
                <Card/>
                <Card/>
            </Section2>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    background-color: #fff;
    border-radius: 20px;
    height: 800px;
`

const Section1 = styled.div`
    display: flex;
    justify-content: space-between;
    border-radius: 20px;
    height: 40px;
    width: 90%;
    margin-top: 20px;

`
const Section2 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    height: 680px;
    width: 90%;
    overflow-y: scroll;
    @media ${Device.tablet}{
        flex-direction: row;
        flex-wrap: wrap;
    }
`

const FilterCourses = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`

const Filters = styled.div`
    display: flex;
    align-items: center;
`