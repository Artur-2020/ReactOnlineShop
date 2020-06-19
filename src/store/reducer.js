import {combineReducers} from 'redux'
import loginReducer from './login/reducer'
import signupReducer from './signup/reducer'

const reducer = combineReducers({
    loginState:loginReducer,
    signupState:signupReducer

})

export default reducer 