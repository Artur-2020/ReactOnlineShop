import {combineReducers} from 'redux'
import loginReducer from './login/reducer'
import signupReducer from './signup/reducer'
import productReducer from './product/reducer.js'

const reducer = combineReducers({
    loginState:loginReducer,
    signupState:signupReducer,
    productState:productReducer

})

export default reducer 