
const addProductState = {
    name:'',
    count:'',
    price:'',
    description:'',
    user:'',
    errors:{name:'',count:'',price:'',description:''}

}
const addProductReducer = (state=addProductState,action) => {
    switch(action.type){
        case 'addProductName':
            return {...state,name:action.value}
        case 'addProductCount':
            return {...state,count:action.value}    
        case 'addProductPrice':
            return {...state,price:action.value}    
        case 'addProductDescription':
            return {...state,description:action.value}   
        case 'addProductErrors':
            return {...state,errors:action.value}
        case 'addProductAll':
            return{...state,name:'',price:'',count:'',description:'',errors:{name:'',count:'',price:'',description:''}}           
        default: return state    
    }    
}

export default addProductReducer