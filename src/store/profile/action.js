import axios from 'axios'

export const changeUserInfo = (history,location) => {
    let id = ''
    let id1 = localStorage.getItem('userId')
    return dispatch => {
        if(id1 != undefined){
             
             axios.post('http://localhost:8000/findUser',{id1})
            .then((result) => {
                if(result.data === 'error'){
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
    let id = localStorage.getItem('userId')
    data.id = id
    return dispatch => {
        axios.post('http://localhost:8000/editdata',data)
        .then((result) => {
            let id = localStorage.getItem('userId')
            console.log() 
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