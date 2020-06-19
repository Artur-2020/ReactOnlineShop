const signupState = {
    name:'',
    surname:'',
    age:'',
    email:'',
    password:'',
}
 const signupReducer = (state=signupState,action) => {
    switch (action.type){
        case 'signupName':
            return {...state,name:action.value}
        case 'signupSurname':
            return {...state,surname:action.value}
        case 'signupAge':
            return {...state,age:action.value}
        case 'signupEmail':
            return {...state,email:action.value}
        case 'signupPassword':
            return {...state,password:action.value}        
        default:return state    
    }
}
export default signupReducer