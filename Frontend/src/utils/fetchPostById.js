import usePublicationStore from "../../stores/PublicationStore"
import wrapPromise from "./wrapPromise"


const fetchPostDetail = async(postId)=>{
    try {
        const response = await fetch(`http://localhost:2636/publicationbyid/${postId}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

const fetchData = async(postId)=>{
    const {setPostById} = usePublicationStore()
    const data = await fetchPostDetail(postId)
    setPostById(data)
    return{
        postDetail: fetchPostDetail(postId)
    }
}

export default fetchData