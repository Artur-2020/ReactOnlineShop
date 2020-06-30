import React from 'react'
import {connect} from 'react-redux'
//es connecti mijocov containeri hamar stori arjeqy dardznelu enq hasaneli
import LoginComponent from './loginComponent';
import AllActions from '../../store/action'


class LoginContainer extends React.Component{
   
    render(){
      return(
        <React.Fragment>
          <LoginComponent loginState ={this.props.login} loginActionEmail={this.props.loginActionEmail} loginActionPassword = {this.props.loginActionPassword} loginActionForm = {this.props.loginActionLoginForm}  />
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
  const mapDispatchToProps =(dispatch)=>{
    return {
      
      loginActionEmail:(value)=>{dispatch(AllActions.loginActions.chnageLoginEmail(value))},
      loginActionPassword:(value)=>{dispatch(AllActions.loginActions.changeLoginPassword(value))},
      loginActionLoginForm:(value)=>{dispatch(AllActions.loginActions.loginForm(value))}

    }
  }
 
  
  export default  connect(mapStateToProps,mapDispatchToProps)(LoginContainer);
  