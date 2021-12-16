import React,{useEffect,useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { setName } from './store/action';


function ComponentB(props) {
    const [nameS,setNameS] = useState(useSelector(state=>state.userName));
    const [uemail, setUemail] = useState(useSelector(mail => mail.userEmail));
    
    const dispatch = useDispatch();

     useEffect(() => {
         setTimeout(() => {
            console.log(nameS);
        }, 5000);
        
       console.log('name',nameS);
    },[nameS,uemail])

    const dis=()=>{
        console.log('click')
        dispatch(setName('SuryaB'));
        props.setSs(false);
    }

    return (
        <div>
            <h1>im component B {nameS}</h1>
            <h2>email :  {uemail}</h2>
            <button onClick={dis}>click</button>
        </div>
    )
}

export default ComponentB
