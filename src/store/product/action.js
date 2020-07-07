    import axios from 'axios'

export const changeProduct = ()=>{
    return function(dispatch){
        axios.post('http://localhost:8000/products').
        then((result)=>{
            console.log(result.data)
            if(result.data){
            dispatch({type:'showProduct',value:result.data})

            }
        }).
        catch((error)=>{

        })
        
    }
}