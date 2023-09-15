import React from 'react'

type propsType={
    names:{
        firstname:string,
        lastname:string,
        obj?:{
            name:string
        }
    }[]
}

const PersonList = ({names}:propsType) => {
  return (
    <div>
        {
            names.map((el)=>{
                return(
                    <>
                    <p>{`${el.firstname}-${el.lastname}`} {el.obj?.name && <p>{el.obj?.name}</p>}</p>
                    </>
                )
            })
        }
      
    </div>
  )
}

export default PersonList
