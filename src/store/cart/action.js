import axios from 'axios'

export const showCart = (a)=>{
    return function(dispatch){
        axios.post('http://localhost:8000/showcart').
        then((result)=>{
            
           
            if(result.data){
            dispatch({type:'showCart',value:result.data})

            }
        }).
        catch((error)=>{
            console.log(error)

        })
        
    }
}
 export const deleteFromCart = (id) => {
    return function(dispatch){
        axios.post('http://localhost:8000/deleteFromCart',{id}).
        then((result)=>{
            console.log(result.data)
            
           
            
            dispatch({type:'showCart',value:result.data})

            
        }).
        catch((error)=>{
            console.log(error)

        })
        
    }
}