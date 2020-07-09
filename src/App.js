import React from 'react';
import './App.css';
import axios from 'axios';
import {Provider} from 'react-redux'
import Reducer from './store/reducer'
import {createStore,applyMiddleware} from 'redux'
import LoginContainer from './components/login/loginContainer'
import SignupContainer from './components/signup/signupContainer'
import ProductContainer from './components/product/productContainer.js'
import ProfileContainer from './components/profile/profileContainer'
import AddProductContainer from './components/addProduct/addProdctContainer'
import MyProductContainer from './components/myProduct/myProductContainer'
import thunk from 'redux-thunk'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import productContainer from './components/product/productContainer.js';
//thunkiu mijocov sinxronavorum enq vor actionnery sinxronavorvats ashxaten tvyaly ga nor action ashxati
const Store = createStore(Reducer,applyMiddleware(thunk))
// applyMiddleweare sinxroni haamar e


class App extends React.Component{
  constructor(props){
    super(props)

   
  }
  render(){
    return(
     <Provider store = {Store}>
       <Router>
         <Route path = '/myProduct' component = {MyProductContainer}/>
         <Route path='/profile' component = {ProfileContainer}/>
         <Route path='/login' component={LoginContainer}/>
         <Route path='/signup' exact component={SignupContainer}/>
         <Route path='/product'  component={ProductContainer}/>
         <Route path ='/addProduct' component = {AddProductContainer}/>
         <Route path='/' exact component={productContainer}/>
       </Router>

     </Provider>
    )
  }
}

export default App;
