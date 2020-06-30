const loginState={
    email:'',
    password:'',
    errors:{login:'',password:""}
}
const loginReducer = (state=loginState,action) => {
    switch(action.type){
        case 'loginEmail':
            return {...state,email:action.value}
        case 'loginPassword':
            return {...state,password:action.value}
        case 'loginErrors':
            return {...state,errors:action.value}
        case 'loginAll':
            return {...state,email:'',password:''}       
        default: return state    
    }    


}
export default loginReducer