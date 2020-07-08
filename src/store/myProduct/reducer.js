const { act } = require("react-dom/test-utils")

const myProductState = {
    product:[],
}

const myProductReducer = (state = myProductState,action) => {
    switch(action.type){
        case 'myProductShow':
            return {...state,product:action.value}
    }

}
export default myProductReducer