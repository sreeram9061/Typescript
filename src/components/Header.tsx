type propsType={
    children:string
}

const Header = (props:propsType) => {
  return (
    <div>
      <p>{props.children}</p>
    </div>
  )
}

export default Header
