const profileState = {
   user:{name:'',surname:'',age:''}
}
const profileReducer = (state=profileState,action) => {
    switch(action.type){
     
        case 'profileAll':
            let a = {...state,user:action.value}   
            console.log('reducery ashxatec')
            console.log(a)
            return a    
        default: return state    
    }    
}

export default profileReducer