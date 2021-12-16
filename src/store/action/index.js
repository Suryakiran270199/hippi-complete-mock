import { email, name, number } from "./types"

export const setName = (surya) =>{
    console.log('NAMRE',surya);
    return{
        type:name,
        payload:surya
    }
}
 export const setEmail =(userEmail) =>{
     return {
         type:email,
         payload:userEmail
     }
 }

 export const setNumber =(userNumber)=>{
     return {
         type:number,
         payload:userNumber
     }
 }