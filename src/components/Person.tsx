import React from 'react'

import { name } from './Person.type'

type propsType={
    name:name
}

const Person = (props:propsType) => {
  return (
    <div>
      <p>{`${props.name.firstName}-${props.name.lastName}`}</p>
    </div>
  )
}

export default Person
