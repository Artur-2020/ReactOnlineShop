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
import ProfileContainer from './components/profile/profileContainer'
import thunk from 'redux-thunk'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//thunkiu mijocov sinxronavorum enq vor actionnery sinxronavorvats ashxaten tvyaly ga nor action ashxati
const Store = createStore(Reducer,applyMiddleware(thunk))

class App extends React.Component{
  constructor(props){
    super(props)
    console.log(this.props.history)

   
  }
  render(){
    return(
     <Provider store = {Store}>
       <Router>
         <Route path='/login' component={LoginContainer}/>
         <Route path='/profile' exact component={ProfileContainer}/>
         <Route path='/product'  component={ProductContainer}/>
         <Route path='/' exact component={SignupContainer}/>
       </Router>

     </Provider>
    )
  }
}

export default App;
