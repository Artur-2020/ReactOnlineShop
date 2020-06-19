const loginState={
    email:'',
    password:'',
}
const loginReducer = (state=loginState,action) => {
    switch(action.type){
        case 'loginEmail':
            return {...state,email:action.value}
        case 'loginPassword':
            return {...state,password:action.value}
        default: return state    
    }    


}
export default loginReducer