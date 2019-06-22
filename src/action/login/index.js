 import {login} from "api/login"

const loginAction = (val)=>({
    type:"LOGIN_ACTION",
    value:val
})

export const AsyncLoginAction = (val)=>{
    return async(dispatch)=>{
        let data = await login(val)
        if(data.data.status){
            window.sessionStorage.setItem("token",data.data.token)
        }
        dispatch(loginAction(data))
    }
}