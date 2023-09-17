import { propsTypeLogin } from "./Login"

type propsType={
    isLogin:boolean,
    Component:React.ComponentType<propsTypeLogin>
}

const AppCoponent = ({isLogin,Component}:propsType) => {
    if(!isLogin){
        return <Component statusType={404}/>
    }else{
        return <p>log Out</p>
    }
}

export default AppCoponent
