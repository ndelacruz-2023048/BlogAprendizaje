import { create } from "zustand";

export const useUserStore = create((set,get)=>({
    responseCreatingUser:{},
    createUser:async(p)=>{
        const response = await fetch("http://localhost:2636/user/register",{
            method:"POST",
            headers: {
                "Content-Type": "application/json" // Le dice al servidor que el cuerpo es JSON
            },
            body:JSON.stringify(p)
        })
        const responseJSON = await response.json()
        set({responseCreatingUser:responseJSON})
        return {
            responseJSON
        }
    },
}))