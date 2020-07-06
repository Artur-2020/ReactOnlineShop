const loginState={
    email:'',
    password:'',
    errors:{email:'',password:""},
    // id:'',

}
const loginReducer = (state=loginState,action) => {
    switch(action.type){
        case 'loginEmail':
            return {...state,email:action.value}
        case 'loginPassword':
            return {...state,password:action.value}
        case 'loginErrors':
            return {...state,errors:action.value}
        // case 'id':
        //     console.log('id-n poxec',action.value)
        //     return {...state,id:action.value}     
        case 'loginAll':
            return   {...state,email:'',password:'',errors:{email:'',password:''}}       
            
        default: return state    
    }    
}
export default loginReducer