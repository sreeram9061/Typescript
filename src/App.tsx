import Button from "./components/Button"
import Container from "./components/Container"
import Counter from "./components/Counter"
import Header from "./components/Header"
import Input from "./components/Input"
import Name from "./components/Name"
import Oscar from "./components/Oscar"
import Person from "./components/Person"
import PersonList from "./components/PersonList"
import Status from "./components/Status"
import User from "./components/User"
import AppCoponent from './components/AppCoponent';
import Login from "./components/Login"
import Generic from "./components/Generic"
import RandomNumbers from "./components/RandomNumbers"

const persons={
  firstName:'Sreeram',
  lastName:"G"
}

const usersList=[
  {
    firstname:'sreeram',
    lastname:'g'
  },
  {
    firstname:'sreekuttan',
    lastname:'makachi',
    obj:{
      name:'makan'
    }
  },
  {
    firstname:'thaval',
    lastname:'val',
  },
]


function App() {

  return (<>
  <Name name="sreeram"/>
  <Person name={persons}/>
  <PersonList names={usersList} />
  <Status status="loading" />

  <Oscar>
  <Header>this children props</Header>
  </Oscar>

  <Button handleClick={(e,n)=>{
    console.log("button clicked",e,n)
  }}/>

  <Input text="val" handleChanges={(e)=>{
    console.log(e.target.value)
  }} />

  <Container styles={{width:"200px",height:"200px",backgroundColor:"yellow"}}/>

  {/* HOCKS */}
  {/* useState with as keay  */}
  <User/>
  {/* useReducer */}
  <Counter/>
  {/* another component in to the props */}
  <AppCoponent isLogin={true} Component={Login}/>
  {/* generic props */}
  <Generic items={[{id:3,name:"sreera"},{id:4,name:"ram"}]} click={(val)=>{console.log(val)}} />
  {/* props restricting */}
  <RandomNumbers value={0} isNegative />   
  
  </>)
}

export default App
