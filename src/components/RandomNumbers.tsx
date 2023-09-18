type randomNumbersType={
    value:number
}


type random=  | randomNumbersType & {
    isPositive:boolean,
    isNegative?:never,
    isZero?:never,
} | randomNumbersType & {
    isNegative:boolean,
    isPositive?:never,
    isZero?:never,
} | randomNumbersType & {
    isZero:boolean,
    isPositive?:never,
    isNegative?:never,
}


const RandomNumbers = ({value,isPositive,isNegative,isZero}:random) => {
    
  return (
    <div>
        <p>{value}</p>
    </div>
  )
}

export default RandomNumbers