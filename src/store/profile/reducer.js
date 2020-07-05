const profileState = {
   user:{name:'',surname:'',age:'',email:''},
   errors:{name:'',surname:'',age:'',email:''},
   changeValues:{name:'',surname:'',age:'',email:''}
}
const profileReducer = (state=profileState,action) => {
    switch(action.type){
     
        case 'profileAll':
            return {...state,user:action.value}   
        case 'logOut':
            let a = {...state,user:{name:'',surname:'',age:'',email:''}}    
            console.log(a)
            return a
        case 'editErrors':
            console.log('errori reducery ashxatec')
            return {...state,errors:action.value}
        case 'editValues':

            let b = {...state,changeValues:action.value}
            console.log(b)
            return b
        case 'editAll':
            return {...state,changeValues:{name:'',surname:'',age:'',email:''},errors:{name:'',surname:'',age:'',email:''},}    
        


            
                
        default: return state    
    }    
}

export default profileReducer