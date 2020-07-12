const { default: action } = require("../action")

const paymentState = {
    totalPrice:0
}
const paymentReducer = (state= paymentState,action)=>{
    switch(action.type){
        case 'changePaymentTotal':
            return {...state,totalPrice:action.value}
		default: return state	
            
    }
}
export default paymentReducer