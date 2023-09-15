import React from 'react'

type propsType={
    children:React.ReactNode
}

const Oscar = (props:propsType) => {
  return (
    <div>
      {props.children}
    </div>
  )
}

export default Oscar
