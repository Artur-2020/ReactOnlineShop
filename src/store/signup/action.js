
import axios from 'axios'


export const changeSignupName = (a)=>{
    return {type:'signupName',value:a}
}
export const changeSignupSurname = (a)=>{
    return {type:'signupSurname',value:a}
}
export const changeSignupAge = (a)=>{
    return {type:'signupAge',value:a}
}
export const changeSignupEmail = (a)=>{
    return {type:'signupEmail',value:a}
}
export const changeSignupPassword = (a)=>{
    return {type:'signupPassword',value:a}
}
export const changeSignupConfirmPassword = (a)=>{
    return {type:'signupConfirmPassword',value:a}
}
export const signupForm = (data) => {
    return dispatch=>{
        axios.post('http://localhost:8000/signupForm',data).
        then((result)=>{
            console.log('amen inch normal a')
            dispatch({
                type:'all'
            })
        })
        .catch((error)=>{
            console.log(error)
        })
    }
}