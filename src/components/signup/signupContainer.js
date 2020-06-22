import React from 'react'
import {connect} from 'react-redux'
import SignupComponent from './signupComponent'
import AllActions from '../../store/action'

class SignupContainer extends React.Component{
   
    render(){
      return(
        <React.Fragment>
            <SignupComponent signupState={this.props.signup} signupActionName ={this.props.signupActionName} signupActionSurname ={this.props.signupActionSurname} signupActionAge ={this.props.signupActionAge} signupActionEmail ={this.props.signupActionEmail} signupActionPassword={this.props.signupActionPassword} />
         
        </React.Fragment>
      )
    }
  }
  const mapStateToProps = (state) => {
    return{
      signup:state.signupState
    }

  }
  const mapDispatchToProps = {
    signupActionName:AllActions.signupActions.changeSignupName,
    signupActionSurname:AllActions.signupActions.changeSignupSurname,
    signupActionAge:AllActions.signupActions.changeSignupAge,
    signupActionEmail:AllActions.signupActions.changeSignupEmail,
    signupActionPassword:AllActions.signupActions.changeSignupPassword,



  }
  
  export default  connect(mapStateToProps,mapDispatchToProps)(SignupContainer);
  