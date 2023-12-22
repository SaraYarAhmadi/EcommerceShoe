import React, { useReducer } from 'react'

const inputReducer =(state:any, action:any)=>{
switch(action.type){
    case "CHANGE":{
        return {
            ...state,
            value:action.value,
            isValid:action.isValid
        }
    }
}
}

export default function Input(props:any) {

    const[mainInput ,dispatch]= useReducer(inputReducer , {
        value:'',
        isValid:false
    })


const changeInputHandler = (event:any)=>{
    console.log();
    dispatch({
        type:"CHANGE",
        value:event?.target.value,
        isValid:true
    })
}

  return (
    <input
    type={props.type}
    placeholder={props.placeholder}
    className={`${props.className} ${mainInput.isValid ? "border-2 border-green-400" : "border-2 border-red-600"} `}
    onChange={changeInputHandler}
    value={mainInput.value}
    />
  )
}
