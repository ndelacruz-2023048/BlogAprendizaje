import { create } from "zustand";

export const useCommentStore = create((set,get)=>({
    isFormCommentOpen:false,
    setIsFormCommentOpen:()=>{
        const {isFormCommentOpen} = get()
        set({isFormCommentOpen:isFormCommentOpen===true?false:true})
    },
    responseCreatingComment:{},
    createComment:async(p)=>{
        const response = await fetch("http://localhost:2636/comment/register",{
            method:"POST",
            headers: {
                "Content-Type": "application/json" // Le dice al servidor que el cuerpo es JSON
            },
            body:JSON.stringify(p)
        })
        const responseJSON = await response.json()
        set({responseCreatingComment:responseJSON})
        return {
            responseJSON
        }
    },
    commentsByPostId:[],
    fetchCommentsByPostId:async (postId)=>{
        try {
            const response = await fetch(`http://localhost:2636/comment/${postId}`)
            const data = await response.json()
            set({commentsByPostId:data})
            return data
        } catch (error) {
            console.log('Error fetching post by id',error);
        }
    },
}))

