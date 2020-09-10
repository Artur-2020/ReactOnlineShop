import axios from 'axios'


export const changeSearchValue=(a)=>{
    console.log('searchi actiony ashxatec')
    return {type:'searchValue',value:a}
}
export const openSearch=(history,value)=>{
    return dispatch=>{
        console.log('uxarkvox',value)
        axios.post('http://localhost:8000/searchResult',{value}).
        then((result)=>{

            console.log(result.data)
            dispatch({
                type:'searchResult',
                value:result.data
            })
            if(result.data !== []){
                history.push({pathname:'/search'})
            }
           
            
           
        })
        .catch((error)=>{
            console.log(error)
        })
    }
   
}
