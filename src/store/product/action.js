    import axios from 'axios'

export const changeProduct = ()=>{
    return function(dispatch){
        axios.post('http://localhost:8000/products').
        then((result)=>{
            dispatch({type:'product',value:result.data})
        }).
        catch((error)=>{

        })
        
    }
}