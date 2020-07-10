import axios from 'axios'

export const showCart = ()=>{
    return function(dispatch){
        axios.post('http://localhost:8000/showcart').
        then((result)=>{
            console.log('cart',result.data)
            if(result.data){
            dispatch({type:'showCartsss',value:result.data})

            }
        }).
        catch((error)=>{
            console.log(error)

        })
        
    }
}