const { act } = require("react-dom/test-utils")

const myProductState = {
    product:[],
}

const myProductReducer = (state = myProductState,action) => {
    switch(action.type){
        case 'myProductShow':
            let a =  {...state,product:action.value}
            return a
        default: return state	

    }

}
export default myProductReducer