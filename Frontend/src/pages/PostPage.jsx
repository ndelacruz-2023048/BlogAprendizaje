import { Suspense } from "react"
import usePublicationStore from "../../stores/PublicationStore"
import { PostTemplate } from "../components/templates/PostTemplate"
import  postFetcher  from "../utils/fetchPostById"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router"
// console.log("Id del post",pathname.substring(6,pathname.length));
export const PostPage = ()=>{
    // console.log(resource.postDetail.read());
    // const post = resource.postDetail.read()
    // setPostById(resource.postDetail.read())
    const {id} = useParams()
    const postId = id
    const {fetchPostById} = usePublicationStore()
    const {data,isLoading} = useQuery({queryKey:['postById',postId],queryFn:()=>fetchPostById(postId), enabled: !!postId})
    if(isLoading) return <div>Cargando...</div>    
    return(
        <PostTemplate/>
    )
}