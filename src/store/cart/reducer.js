const cartState = {
    cart:[]
}
const cartReducer = (state=cartState,action) =>{
	switch(action.type){
		case 'showCart':
			return  {...state,cart:action.value}
		default: return state	
	}

}
export default cartReducer
