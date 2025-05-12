import Comment from './comment_model.js'
export const getCommentByPublication = async(request,response)=>{
    try {
        const comments = await Comment.find({publication:request.params.id}).populate("user")
        response.status(200).send({success:true,message:"Comments list",data:comments})
    } catch (error) {
        console.error(error)
        return response.status(500).send({message:'General error sending comments'})
    }
}


export const newComment =async (request,response)=>{
    console.log(request.body);
    const data = request.body
    try {
        const comment = new Comment(data)
        await comment.save()
        
        response.status(200).send({success:true,message:"New Comment"})
    } catch (error) {
        console.error(error)
        return response.status(500).send({message:'General error saving comment'})
    }
}



