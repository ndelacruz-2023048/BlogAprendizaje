import { create } from "zustand";

export const useCommentStore = create((set,get)=>({
    isFormCommentOpen:false,
    setIsFormCommentOpen:()=>{
        const {isFormCommentOpen} = get()
        set({isFormCommentOpen:isFormCommentOpen===true?false:true})
    }
}))

