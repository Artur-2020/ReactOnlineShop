import React from 'react'
import {connect} from 'react-redux'
//es connecti mijocov containeri hamar stori arjeqy dardznelu enq hasaneli
import LoginComponent from './loginComponent';
import AllActions from '../../store/action'
import Header from '../header/headerContainer'
import Footer from '../footer/footerComponent'


class LoginContainer extends React.Component{
    constructor(props){
      super(props)
        console.log(this.props)
      
    } 

    render(){
      return(
        <React.Fragment>
          {/* <Header/> */}
          <LoginComponent loginState ={this.props.login} loginActionEmail={this.props.loginActionEmail} loginActionPassword = {this.props.loginActionPassword} loginActionForm = {this.props.loginActionLoginForm} history = {this.props.history}  />
          <Footer/>
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
      loginActionLoginForm:(value,history)=>{dispatch(AllActions.loginActions.loginForm(value,history))}

    }
  }
 
  
  export default  connect(mapStateToProps,mapDispatchToProps)(LoginContainer);
  