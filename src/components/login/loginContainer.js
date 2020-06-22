import React from 'react'
import {connect} from 'react-redux'
//es connecti mijocov containeri hamar stori arjeqy dardznelu enq hasaneli
import LoginComponent from './loginComponent';
import AllActions from '../../store/action'


class LoginContainer extends React.Component{
   
    render(){
      return(
        <React.Fragment>
          <LoginComponent loginState ={this.props.login} loginActionEmail={this.props.loginActionEmail} loginActionPassword = {this.props.loginActionPassword} />
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
  const mapDispatchToProps={
   loginActionEmail:AllActions.loginActions.chnageLoginEmail,
   loginActionPassword:AllActions.loginActions.chnageLoginPassword
  }
  
  export default  connect(mapStateToProps,mapDispatchToProps)(LoginContainer);
  