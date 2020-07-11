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
export const deleteFromMyProduct = (prod) => {
    return function(dispatch){
        let userId = localStorage.getItem('userId')
        let id = prod._id
        let image = prod.image
        axios.post('http://localhost:8000/deleteFromMyProduct',{id,image,userId}).
        then((result)=>{
            
           
            
            dispatch({type:'myProductShow',value:result.data})

            
        }).
        catch((error)=>{
            console.log(error)

        })
        
    }
}