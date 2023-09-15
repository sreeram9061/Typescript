
type propsType={
    text:string
    handleChanges:(event:React.ChangeEvent<HTMLInputElement>)=> void
}

const Input = ({text,handleChanges}:propsType) => {
  return (
    <div>
        <input type="text" value={text} onChange={handleChanges} />
    </div>
  )
}

export default Input
