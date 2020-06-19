import React from 'react'
import {connect} from 'react-redux'
//es connecti mijocov containeri hamar stori arjeqy dardznelu enq hasaneli
import LoginComponent from './loginComponent'

class LoginContainer extends React.Component{
   
    render(){
      return(
        <React.Fragment>
          <LoginComponent loginState ={this.props.login} />
        </React.Fragment>
      )
    }
  }
  const mapStateToProps = (state) => {
    return{
      login:state.loginState
      // props  qcelu functiony
    }

  }
  
  export default  connect(mapStateToProps)(LoginContainer);
  