import { useQuery } from "@tanstack/react-query"
import { HomeTemplate } from "../components/templates/HomeTemplate"
import { useCommentStore } from "../../stores/CommentStore"

export const HomePage = ()=>{
    const {fetchComments} = useCommentStore()
    const {data,isLoading} = useQuery({queryKey:['comments'],queryFn:()=>fetchComments()})
    if(isLoading) return <div>Cargando...</div>
    return(
        <HomeTemplate/>
    )
}