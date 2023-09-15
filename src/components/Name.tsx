import React from 'react'

type PropsName={
    name:string
}

const Name = (props:PropsName) => {
  return (
    <div>
      <p>{props.name}</p>
    </div>
  )
}

export default Name
