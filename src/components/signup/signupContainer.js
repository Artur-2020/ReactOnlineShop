import React from 'react'
import {connect} from 'react-redux'
import SignupComponent from './signupComponent'

class SignupContainer extends React.Component{
   
    render(){
      return(
        <React.Fragment>
            <SignupComponent signupState={this.props.signup} />
         
        </React.Fragment>
      )
    }
  }
  const mapStateToProps = (state) => {
    return{
      signup:state.signupState
    }

  }
  
  export default  connect(mapStateToProps)(SignupContainer);
  