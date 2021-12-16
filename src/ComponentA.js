import React,{useEffect,useState} from 'react';
 import { setName, setNumber } from './store/action';
 import {useSelector,useDispatch} from 'react-redux';


function ComponentA(props) {
    const nameS = useSelector (state=>state.userName);

    const numberS = useSelector(state => state.number)

    const dispatch = useDispatch();

     useEffect(() => {
         setTimeout(() => {
            console.log(nameS);
        }, 5000);
        
       console.log('name',nameS);
    },[nameS])

    const dis=()=>{
        console.log('click')
        dispatch(setName('Surya'));
        dispatch(setNumber("09348378"))
        // props.setSs(true);
    }

    return (
        <div>
            <h1>im component A {nameS} {numberS} </h1>
            <button onClick={dis}>click</button>
        </div>
    )
}

export default ComponentA
