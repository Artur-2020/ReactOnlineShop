import React from 'react';
import './App.css';
import axios from 'axios';

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
      <div>
        <h1>Hello World!!!</h1>
      </div>
    )
  }
}

export default App;
