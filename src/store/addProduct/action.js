import axios from 'axios'

export const addProductName = (a)=>{
    return {type:"addProductName",value:a}
}
export const addProductCount = (a)=>{
    return {type:"addProductCount",value:a}
}
export const addProductPrice = (a)=>{
    return {type:"addProductPrice",value:a}
}
export const addProductDescription = (a)=>{
    return {type:"addProductDescription",value:a}
}
export const addProductImage = (a) =>{
    return {type:'addProductImage',value:a}
}
export const addProductForm = (data,history) => {
    let id = localStorage.getItem('userId')
    data.id = id
   

    return dispatch=>{
        axios.post('http://localhost:8000/addProduct',data).
        then((result)=>{
            console.log(result.data)
            if(result.data=='ok'){
                dispatch({
                    type:'addProductAll'
                })
                function Go(){
                     history.push({pathname:'/'})
                }
                setTimeout(Go, 2000);
            }

            else{
                dispatch({
                    type:'addProductErrors',value:result.data
                })
            }
           
           
        })
        .catch((error)=>{
            console.log(error)
        })
    }
}
export const uploadImage = (file)=>{
    return dispatch=>{
        axios.post('http://localhost:8000/upload',file).
        then((result)=>{
            console.log(result.data)
            
           dispatch({type:'4545as454s5a4'})
        })
        .catch((error)=>{
            console.log(error)
        })

    }
}    