import { Icon } from "@iconify/react/dist/iconify.js"
import styled from "styled-components"
import usePublicationStore from "../../../stores/PublicationStore"
import { Device } from "../../styles/Breakpoints"
export const BtnFilter2 = ()=>{
    const {
        isOpenFilters,
        setOpenFilter,
        paramsFiltersPublications,
        setParamsFiltersPublications,
        atributesToFilter,
        setAtributeToFilter,
        atributesToFilterObject,
        setAtributesToFilterObject,
        fetchFilteredPublications} = usePublicationStore()
    
    const handleChange = (event)=>{
        if(event.target.checked){
        const atributesFilter = [...atributesToFilter]
        atributesFilter.push({[event.target.name]:event.target.value})
        setAtributeToFilter(atributesFilter)
        const atributesObject = Object.fromEntries(atributesFilter.map(e => [Object.keys(e),Object.values(e)[0]]))
        setAtributesToFilterObject(atributesObject)
        fetchFilteredPublications()
        
        }else{
            const atributesFilter = [...atributesToFilter]
            const newAtributesFilter = atributesFilter.filter((element)=>{
                const objectKey=Object.keys(element)[0]
                const objectValue=Object.values(element)[0]
                const isObjectKeyEqual = objectKey !== event.target.name
                const isObjectValueEqual = objectValue!== event.target.value
                if(isObjectKeyEqual === false && isObjectValueEqual === false){
                }else{
                    return element
                }
            })
            setAtributeToFilter(newAtributesFilter)
            const atributesObject = Object.fromEntries(newAtributesFilter.map(e => [Object.keys(e),Object.values(e)[0]]))
            setAtributesToFilterObject(atributesObject)
            fetchFilteredPublications()
        }
    }

        
    return(
        <Container >
            <Icon onClick={()=>setOpenFilter()}  icon="proicons:tune" className="icon"/>
            <BoxFilters className={isOpenFilters?"active":""}>
                <Icon onClick={()=>setOpenFilter()} icon="humbleicons:times" className={isOpenFilters?"exit active":"exit"}/>
                <Filter className={isOpenFilters?"active":""}>
                    <ContainerOptionFilter>
                        <OptionFilter type="checkbox"  name="datePublication" value="asc" onChange={handleChange}/>
                        <TextOptionFilter>Mas relevantes</TextOptionFilter>
                    </ContainerOptionFilter>
                    <ContainerOptionFilter>
                        <OptionFilter type="checkbox"  name="datePublication" value="desc" onChange={handleChange}/>
                        <TextOptionFilter>Mas antiguos</TextOptionFilter>
                    </ContainerOptionFilter>
                    <ContainerOptionFilter>
                        <OptionFilter type="checkbox"  name="titlePublication" value="asc" onChange={handleChange}/>
                        <TextOptionFilter>A-Z</TextOptionFilter>
                    </ContainerOptionFilter>
                    <ContainerOptionFilter>
                        <OptionFilter type="checkbox"  name="titlePublication" value="desc" onChange={handleChange}/>
                        <TextOptionFilter>Z-A</TextOptionFilter>
                    </ContainerOptionFilter>
                </Filter>
            </BoxFilters>
        </Container>
    )
}

const Container = styled.button`
    background-color: #fff;
    border: 1px solid rgba(111, 111, 111, 0.2);
    border-radius: 20px;
    padding: 4px 20px;
    .icon{
        color:#044681;
        font-size: 20px;
    }
    &:hover{
        background-color: rgba(111, 111, 111, 0.2);
    }
`

const BoxFilters = styled.div`
    position: absolute;
    top: 0px;
    right: 0px;
    flex-direction: column;
    align-items: end;
    transition: all 0.3s ease-in-out;
    opacity: 0;
    border-radius: 20px;
    .exit{
        display: none;
        &.active{
            display: flex;
            font-size: 30px;
            margin-right: 5px;
            margin-top: 5px;
            cursor: pointer;
        }
    }
    
    &.active{
        display: flex;
        width: 60%;
        height: 150px;
        background-color: #fff;
        border: 1px solid rgba(111, 111, 111, 0.2);
        border-radius: 20px;
        opacity: 1;
        transition: all 0.3s ease-in-out;
        @media ${Device.laptop}{
            width: 25%;
        }
    }
`

const Filter = styled.form`
    display: none;
    height: 100%;
    &.active{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        width: 95%;

    }
`

const ContainerOptionFilter = styled.div`
    display: flex;
    gap: 8px;
    width: 100%;
`

const OptionFilter = styled.input`
    height: 15px;
    width: 15px;
    margin: 0;
    -webkit-appearance: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
    position: relative;

    &::after {
    content: '✔';
    position: absolute;
    top: -5px;
    left: 0;
    font-size: 16px;
    color: #838383;
    opacity: 0;
    transition: opacity 0.2s ease;
    }

    &:checked::after{
        opacity: 1;
        
    }
`

const TextOptionFilter = styled.p`
    font-size: 15px;
`