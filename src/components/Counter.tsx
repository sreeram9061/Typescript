import React, { useReducer } from 'react'

type stateArgument={
    count:number
}


type ingremntOrDegrementActions={
    type:"DEGREMENT"|"INGREMENT"|"RESET",
    payload:number
}

type restAction={
    type:"RESET",
}

type actionArgment =  ingremntOrDegrementActions | restAction;

const Counter = () => {
    const initialState={count:0}

    const reducer=(state:stateArgument,action:actionArgment)=>{
        switch (action.type) {
            case "INGREMENT":
                return {count:state.count+action.payload}
            case "DEGREMENT":
                if(state.count==0) return state
                return {count:state.count-action.payload}
            case "RESET":
                return initialState
            default: 
                return state;
        }
    }

   const[state,dispatch]= useReducer(reducer,initialState)
   const handleIngrement=()=>{
    dispatch({
        type:"INGREMENT",
        payload:1
    })
   }
   const handleDegrement=()=>{
    dispatch({
        type:"DEGREMENT",
        payload:1
    })
   }

  return (
    <div>
        <h1>{state.count}</h1>
        <button onClick={handleIngrement}>+</button>
        <button onClick={handleDegrement}>-</button>
        <button onClick={()=>dispatch({type:"RESET"})}>Reset</button>
      
    </div>
  )
}

export default Counter
