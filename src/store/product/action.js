    import axios from 'axios'

export const changeProduct = ()=>{
    return function(dispatch){
        axios.post('http://localhost:8000/products').
        then((result)=>{
            if(result.data){
            dispatch({type:'showProduct',value:result.data})

            }
        }).
        catch((error)=>{

        })
        
    }
}
export const addCart = (product) => {
    return function(dispatch){
        axios.post('http://localhost:8000/addCart',product).
        then((result)=>{
            dispatch(
                console.log(result.data)
            )

            
            
        }).
        catch((error)=>{

        })
        
    }
}