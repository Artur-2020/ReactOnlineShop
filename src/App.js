import React from 'react';
import './App.css';
import axios from 'axios';
import {Provider} from 'react-redux'
import Reducer from './store/reducer'
import {createStore,applyMiddleware} from 'redux'
// applyMiddleweare sinxroni haamar e
import LoginContainer from './components/login/loginContainer'
import SignupContainer from './components/signup/signupContainer'
import ProductContainer from './components/product/productContainer.js'
import HeaderComponent from './components/header/headerComponent'
import thunk from 'redux-thunk'
//thunkiu mijocov sinxronavorum enq vor actionnery sinxronavorvats ashxaten tvyaly ga nor action ashxati
const Store = createStore(Reducer,applyMiddleware(thunk))

class App extends React.Component{
  constructor(){

    super()

   
  }
  render(){
    return(
     <Provider store = {Store}>
       <HeaderComponent/>
        <LoginContainer/>
        {/* <SignupContainer/> */}
        <ProductContainer/>


     </Provider>
    )
  }
}

export default App;
