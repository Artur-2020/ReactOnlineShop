const productState = {
	product:[
		{name:'Notebook'}
	]
}
const productReducer = (state=productState,action) =>{
	switch(action.type){
		case 'product':
			return {...state,product:action.value}
		default: return state	
	}

}
export default productReducer
