import styled from "styled-components"
import { BtnFilter } from "../../moleculas/BtnFilter"
import { BtnFilter2 } from "../../moleculas/BtnFilter2"
import { Card } from "./Card"
import { Device } from "../../../styles/Breakpoints"
import { use, useEffect } from "react"
import usePublicationStore from "../../../../stores/PublicationStore"
export const ContentSection =() => {
    const {
        filteredPublications,
        isLoadingFilteredPublications,
        fetchFilteredPublications,
        isLoadingPublications,
        fetchPublications,
        publications,
        activeTypeClass} = usePublicationStore()
    useEffect(()=>{
        fetchFilteredPublications()
        fetchPublications()
    },[])
    
    

    return(
        <Container>
            <Section1>
                <FilterCourses>
                    <BtnFilter name="all" text="All" value={publications?.data?.length }state={activeTypeClass==="all"?true:false}/>
                    <BtnFilter name={publications?.taller?.[0]?.typeClass} text="Taller" value={publications?.taller?.length} state={activeTypeClass==="taller"?true:false}/>
                    <BtnFilter name={publications?.tecnologia?.[0]?.typeClass} text="Tecnologia" value={publications?.tecnologia?.length} state={activeTypeClass==="tecnologia"?true:false}/>
                    <BtnFilter name={publications?.practica?.[0]?.typeClass} text="Práctica Supervisada" value={publications?.practica?.length} state={activeTypeClass==="practica"?true:false}/>
                </FilterCourses>
                <Filters>
                    <BtnFilter2/>
                </Filters>
            </Section1>
            <Section2>
                {isLoadingFilteredPublications?(
                    <h1>Cargando...</h1>
                ):(
                    filteredPublications?.data?.map((publication)=>(
                        <Card titlePublication={publication.titlePublication} shortDescription={publication.shortDescription} imagePublication={publication.imagePublication}/>
                    ))
                )} 
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
    position: relative;

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