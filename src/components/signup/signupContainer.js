import React from 'react'
import {connect} from 'react-redux'
import SignupComponent from './signupComponent'
import AllActions from '../../store/action'

class SignupContainer extends React.Component{
   
    render(){
      return(
        <React.Fragment>
            <SignupComponent signupState={this.props.signup} signupActionName ={this.props.signupActionName} signupActionSurname ={this.props.signupActionSurname} signupActionAge ={this.props.signupActionAge} signupActionEmail ={this.props.signupActionEmail} signupActionPassword={this.props.signupActionPassword} signupActionForm = {this.props.signupActionSignupForm} />
        </React.Fragment>
      )
    }
  }
  const mapStateToProps = (state) => {
    return{
      signup:state.signupState
    }

  }
  const mapDispatchToProps =(dispatch)=>{
    return {
      
      signupActionName:(value)=>{dispatch(AllActions.signupActions.changeSignupName(value))},
      signupActionSurname:(value)=>{dispatch(AllActions.signupActions.changeSignupSurname(value))},
      signupActionAge:(value)=>{dispatch(AllActions.signupActions.changeSignupAge(value))},
      signupActionEmail:(value)=>{dispatch(AllActions.signupActions.changeSignupEmail(value))},
      signupActionPassword:(value)=>{dispatch(AllActions.signupActions.changeSignupPassword(value))},
      signupActionSignupForm:(value)=>{dispatch(AllActions.signupActions.signupForm(value))}

    }
  }

  export default  connect(mapStateToProps,mapDispatchToProps)(SignupContainer);
  