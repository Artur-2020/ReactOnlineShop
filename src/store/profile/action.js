import axios from 'axios'

export const changeUserInfo = () => {
    return dispatch => {
        axios.post('http://localhost:8000/findUser')
        .then((resullt) => {
            dispatch({
                type:'profileAll',value:resullt.data
            })
        })
        .catch((error)=>{
            console.log(error)
        })
    }
}