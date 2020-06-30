import axios from 'axios'


export const chnageLoginEmail = (a) => {
    return {type:'loginEmail',value:a}
}
export  const changeLoginPassword = (a) => {
    return {type:'loginPassword',value:a}
}
export const loginErrors = (a) =>{
    return {type:'loginErrors',value:a}
}


export const loginForm = (data) => {
    let errors={email:'',password:''}

    return dispatch=>{
        axios.post('http://localhost:8000/loginForm',data).
        then((result)=>{
            if(result.data=='ok'){
                dispatch({
                    type:'loginAll'
                })
            }
            else{
                for(let i in result.data){
                    if(errors[i]=='')
                    errors[i] = result.data[i]
                }
                const ChangeError = (err) =>{
                    dispatch(loginErrors(err))
                }
                console.log(errors)
                ChangeError(errors)


            }
           
           
        })
        .catch((error)=>{
            console.log(error)
        })
    }
}