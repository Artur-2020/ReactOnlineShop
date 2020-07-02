const loginState={
    email:'',
    password:'',
    errors:{email:'',password:""},
    user:{name:'',surname:'',age:''}

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
            return {...state,email:'',password:'',errors:{email:'',password:''}}    
        case 'user':
            let a =  {...state,user:action.value}
            console.log(a)
            return a       
        default: return state    
    }    


}
export default loginReducer