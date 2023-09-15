import React from 'react'

type propsType={
    handleClick:(e:React.MouseEvent<HTMLButtonElement>,id:number)=> void
}

const Button = ({handleClick}:propsType)=>{
  return (
    <div>
      <button onClick={(e)=>handleClick(e,1)}>click me</button>
    </div>
  )
}

export default Button
