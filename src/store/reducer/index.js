import { email, name, number } from "../action/types";

const intialState = {
    userName:"",
    userEmail:"kiran@gmail.com",
    UserNumber:"",
}

 const webReducer=(state,action)=>{
     console.log('action',action);
     console.log('state',state);
     
      switch(action.type){
          case name :
              return{...state,userName:action.payload}
          case email :
              return{...state,userEmail:action.payload}  
          case number :
              return{...state,UserNumber:action.payload}    
            default :
              return intialState   
      }
}
export default webReducer;