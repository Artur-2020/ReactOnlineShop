import {combineReducers} from 'redux'
import loginReducer from './login/reducer'
import signupReducer from './signup/reducer'
import productReducer from './product/reducer'
import profileReducer from './profile/reducer'
import addProductReducer from './addProduct/reducer'

const reducer = combineReducers({
    loginState:loginReducer,
    signupState:signupReducer,
    productState:productReducer,
    profileState:profileReducer,
    addProductState:addProductReducer

})

export default reducer 