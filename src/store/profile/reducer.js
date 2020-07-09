const profileState = {
   user:{id:'',name:'',surname:'',age:'',email:'',product:[]},
   errors:{name:'',surname:'',age:'',email:''},
   changeValues:{name:'',surname:'',age:'',email:''},
}
const profileReducer = (state=profileState,action) => {
    switch(action.type){
     
        case 'profileAll':
            let a = {...state,user:action.value}  
            return a
        case 'logOut':
             return {...state,user:{id:'',name:'',surname:'',age:'',email:''}}    
           
        case 'editErrors':
            return {...state,errors:action.value}
        case 'id':
            profileState.user ={...profileState.user,id:action.value}
            return {...state}
        case 'editValues':

            return  {...state,changeValues:action.value}
            
        case 'editAll':
            return {...state,changeValues:{name:'',surname:'',age:'',email:''},errors:{name:'',surname:'',age:'',email:''},}    
        


            
                
        default: return state    
    }    
}

export default profileReducer