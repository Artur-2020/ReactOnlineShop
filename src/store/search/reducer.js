const searchState = {
	product:[
		
	]
}
const searchReducer = (state=searchState,action) =>{
	switch(action.type){
		case 'searchResult':
             let a = {...state,product:action.value}
             console.log(a)
             return a
		default: return state	
	}

}
export default searchReducer
