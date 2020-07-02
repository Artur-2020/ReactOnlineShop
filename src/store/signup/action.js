
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
 export const signupErrors = (a) =>{
    return {type:'signupErrors',value:a}
}

export const signupForm = (data) => {
    let errors={name:'',surname:'',age:'',email:'',password:'',confirmPassword:''}

    return dispatch=>{
        axios.post('http://localhost:8000/signupForm',data).
        then((result)=>{
            if(result.data=='ok'){
                dispatch({
                    type:'all'
                })
            }
            else{
                
                    errors.confirmPassword=result.data[1]
                    console.log(result.data[0])
                    
                   if(result.data[0]){
                    for(let i in result.data[0]['errors']){
                     
                        if( result.data[0]['errors'][i].properties == undefined){
                            result.data[0]['message']=result.data[0]['message'].substring(29,65)
                            errors[i] = result.data[0]['message']
                        }
                        
                        else if(result.data[0]['errors'][i].properties.message){
                            errors[i] =  result.data[0]['errors'][i].properties.message
                        }                      
                    }
                   }
                   if(errors.email==''){
                    errors.email=result.data[2].email

               }
                  
                
              
                const ChangeError = (err) =>{
                    dispatch(signupErrors(err))
                }
                ChangeError(errors)
                
            }
           
        })
        .catch((error)=>{
            console.log(error)
        })
    }
}