import { Suspense } from "react"
import usePublicationStore from "../../stores/PublicationStore"
import { PostTemplate } from "../components/templates/PostTemplate"
import  postFetcher  from "../utils/fetchPostById"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router"
import { useCommentStore } from "../../stores/CommentStore"
// console.log("Id del post",pathname.substring(6,pathname.length));
export const PostPage = ()=>{
    // console.log(resource.postDetail.read());
    // const post = resource.postDetail.read()
    // setPostById(resource.postDetail.read())
    const {id} = useParams()
    const postId = id
    const {fetchPostById} = usePublicationStore()
    const {fetchCommentsByPostId} = useCommentStore()
    const {data,isLoading} = useQuery({queryKey:['postById',postId],queryFn:()=>fetchPostById(postId), enabled: !!postId})
    const dataComments = useQuery({queryKey:['commentByPostId',postId],queryFn:()=>fetchCommentsByPostId(postId), enabled: !!postId})
    if(isLoading) return <div>Cargando...</div>    
    return(
        <PostTemplate/>
    )
}