import styled from "styled-components"
import usePublicationStore from "../../../stores/PublicationStore";

export const BtnFilter = ({name,text,value,state})=>{

    const {activeTypeClass,
        setActiveTypeClass,
        atributesToFilterObject,
        setAtributesToFilterObject,
        fetchFilteredPublications,
        atributesToFilter,
        setAtributeToFilter} = usePublicationStore()
    let newListAtributes=[]
    const handleClick = (e)=>{
        let objeto={}
        if(e.currentTarget.name!=="all"){
            const atributesFilterArray = [...atributesToFilter]
            const newAtributes = atributesFilterArray.filter((e)=>{
                if(Object.keys(e)[0]!=='typeClass'){
                    return e
                }
            })
            newAtributes.push({["typeClass"]:e.currentTarget.name})
            setAtributeToFilter(newAtributes)
            setAtributesToFilterObject({...atributesToFilterObject,["typeClass"]:e.currentTarget.name})
            fetchFilteredPublications()

        }else{
            const atributesFilterArray = [...atributesToFilter]
            const newAtributes = atributesFilterArray.filter((e)=>{
                if(Object.keys(e)[0]!=='typeClass'){
                    return e
                }
            })
            setAtributeToFilter(newAtributes)
            delete atributesToFilterObject.typeClass
            fetchFilteredPublications()
        }
        setActiveTypeClass(e.currentTarget.name)
        
        
    }

    
    return(
        <Button name={name}  onClick={handleClick} className={state ? "active" : ""}>
            <Text>{text}</Text>
            <Value className="number">{value}</Value>
        </Button>
    )
}

const Button = styled.button`
    display: flex;
    align-items: center;
    border:1px solid rgba(111, 111, 111, 0.2);
    border-radius: 20px;
    padding: 4px 11px;
    color:#032b4f;
    gap: 10px;
    background-color: #fff;
    &:hover{
        background-color: rgba(111, 111, 111, 0.2);
    }
    &.active{
        background-color: #032b4f;
        color: #fff;
        .number{
            background-color: #dd5100;
        }
    }


`

const Text = styled.p`

`
const Value = styled.p`
    background-color: rgba(111, 111, 111, 0.2);
    border-radius: 50%;
    padding: 5px 9px;
    font-size: 15px;
    font-weight: 400;

`