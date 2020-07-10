import axios from 'axios'

export const showMyProducts = () => {
    if(localStorage.getItem('userId')){
        let id = localStorage.getItem('userId')
        return dispatch => {
            if(id != undefined){
                 
                 axios.post('http://localhost:8000/showMyProducts',{id})
                .then((result) => {                       
                        dispatch({
                            type:'myProductShow',value:result.data
                        })
                    
                })
                .catch((error)=>{
                    console.log(error)
                })
            }
      
            
            
        }
    }
}