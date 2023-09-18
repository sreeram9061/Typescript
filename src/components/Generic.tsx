
type genPropsType<T>={
    items:T[],
    click:(value:T)=>void
}

const Generic =<T extends {id:number,name:string} >({items,click}:genPropsType<T>) => {
    
  return (
    <div>
        {
            items.map(item=>{
               return <p onClick={()=>click(item)}>{item.name}</p>
            })
        }
    </div>
  )
}

export default Generic