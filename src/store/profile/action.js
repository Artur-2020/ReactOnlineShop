import axios from 'axios'

export const changeUserInfo = (history,location,login) => {
    console.log(login)
    let id = ''
    return dispatch => {
        if(location.state.id != undefined){
             id = location.state.id 
             axios.post('http://localhost:8000/findUser',{id})
            .then((result) => {
                if(result.data === 'error' || login.id ==''){
                    console.log(result.data)
                    history.push({pathname:'/login'})

                }
                else{
                    dispatch({
                        type:'profileAll',value:result.data
                    })
                } 
            })
            .catch((error)=>{
                console.log(error)
            })
        }
        else{
            history.push({pathname:'/login'})
            
        }
        
        
    }
}
export const editErrors = (a) => {
    return {type:'editErrors',value:a}
}
export const LogOut = (history) => {
    history.push({pathname:'/login'})
    return {type:'logOut'}
}

export const EditData = (data) => {
    let errors = {name:'',surname:'',age:'',email:''}

    return dispatch => {
        axios.post('http://localhost:8000/editdata',data)
        .then((result) => {

           if(result.data[0] == 'ok'){
            dispatch({
                type:'profileAll',value:data
            })
            const edit = () =>{
                dispatch(editAll())               
            }
            edit()
           }
          
           else{
            for(let i in result.data[0]){
                if(errors[i]=='')
                errors[i] = result.data[0][i]
            }
            console.log(errors)
            const ChangeError = (err) =>{
                dispatch(editErrors(err))
                
            }
            ChangeError(errors)
           }
        })
        .catch((error)=>{
            console.log(error)
        })
    }
        
}

export const changeValues = (a) => {
    return {type:"editValues",value:a}
}

export const editAll = () =>{
    return {type:'editAll'}
}