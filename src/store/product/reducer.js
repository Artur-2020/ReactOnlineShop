const productState = {
	product:[
		
	]
}
const productReducer = (state=productState,action) =>{
	switch(action.type){
		case 'showProduct':
			 return  {...state,product:action.value}
		default: return state	
	}

}
export default productReducer
