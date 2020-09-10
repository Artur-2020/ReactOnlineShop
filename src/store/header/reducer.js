const headerState = {
    searchValue:'',
    
 }
 const profileReducer = (state=headerState,action) => {
     switch(action.type){
      
        case 'searchValue':
            let a =  {...state,searchValue:action.value}
            console.log('headeri reducery ashxatec',a)

            return a

                 
         default: return state    
     }    
 }
 
 export default profileReducer