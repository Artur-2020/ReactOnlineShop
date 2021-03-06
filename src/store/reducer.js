import {combineReducers} from 'redux'
import loginReducer from './login/reducer'
import signupReducer from './signup/reducer'
import productReducer from './product/reducer'
import profileReducer from './profile/reducer'
import addProductReducer from './addProduct/reducer'
import myProductReducer from './myProduct/reducer'
import cartReducer from  './cart/reducer'
import headerReducer from './header/reducer'
import searchReducer from './search/reducer'

const reducer = combineReducers({
    loginState:loginReducer,
    signupState:signupReducer,
    productState:productReducer,
    profileState:profileReducer,
    addProductState:addProductReducer,
    myProductState:myProductReducer,
    cartState:cartReducer,
    headerState:headerReducer,
    searchState:searchReducer
})

export default reducer 