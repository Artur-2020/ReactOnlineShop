const cartState = {
	cart:[],
	totalPrice:0
}
const cartReducer = (state=cartState,action) =>{
	switch(action.type){
		case 'showCart':
			return  {...state,cart:action.value}
		case 'changeTotalPrice':
			let a =  {...state,totalPrice:action.value}	
			console.log('Total Price',a)
			return a
		default: return state	

	}

}
export default cartReducer
