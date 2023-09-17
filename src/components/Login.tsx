import React from 'react'

export type propsTypeLogin={
    statusType:number
}

const Login = ({statusType}:propsTypeLogin) => {
  return <h4>{`Please login status ${statusType}`}</h4>
}

export default Login
