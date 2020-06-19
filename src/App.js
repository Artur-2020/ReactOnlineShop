import React from 'react';
import './App.css';
import axios from 'axios';
import {Provider} from 'react-redux'
import Reducer from './store/reducer'
import {createStore} from 'redux'
import LoginContainer from './components/login/loginContainer'
import SignupContainer from './components/signup/signupContainer'
const Store = createStore(Reducer)

class App extends React.Component{
  constructor(){

    super()

    axios.post('http://localhost:8000/test',{name:'Artur'}).
    then((data)=>{
      console.log(data)
    }).
    catch((error)=>{
      console.log(error)
    })
  }
  render(){
    return(
     <Provider store = {Store}>
       <LoginContainer/>
       <SignupContainer/>


     </Provider>
    )
  }
}

export default App;
