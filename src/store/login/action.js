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
// export const userId = (a) => {
//     return {type:'id',value:a}
// }



export const loginForm = (data,history) => {
    let errors={email:'',password:''}

    return dispatch=>{
        axios.post('http://localhost:8000/loginForm',data).
        then((result)=>{
            console.log(result.data[1])
            if(result.data[0]=='ok'){
                dispatch({
                    type:'loginAll'
                })
                dispatch({
                    type:'id',
                    value: result.data[1]
                })
                // const changeId = (id) => {
                //     dispatch(userId(id))
                // }
                // changeId(result.data[1]) 

                localStorage.setItem('userId',result.data[1])
                history.push({pathname:'/profile'})
            }
            else{
                for(let i in result.data[0]){
                    if(errors[i]=='')
                    errors[i] = result.data[0][i]
                }
                const ChangeError = (err) =>{
                    dispatch(loginErrors(err))
                }
                ChangeError(errors)


            }
           
           
        })
        .catch((error)=>{
            console.log(error)
        })
    }
}