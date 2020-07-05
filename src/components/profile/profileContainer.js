import React from 'react'
import {connect} from 'react-redux'
import AllActions from '../../store/action'
import Footer from '../footer/footerComponent'
import Header from '../header/headerComponent'
import ProfileCompoonent from './profileComponent'

class ProfileContainer extends React.Component{

  constructor(props){
    super(props)
    console.log(AllActions.profileActions)

  }  
    render(){
      return(
        <React.Fragment>
            <Header/>
            <ProfileCompoonent loginState = {this.props.login} EditDataForm = {this.props.EditDataForm} changeValues = {this.props.changeValues  } changeId = {this.props.changeId} userInfo = {this.props.profileValues} logOut = {this.props.logOut} history = {this.props.history} location = {this.props.location} profileState = {this.props.profile} />
            <Footer/>
        </React.Fragment>
      )
    }
  }

  const mapStateToProps = (state) => {
    return{
      profile:state.profileState,
      login:state.loginState
    }

  }
  const mapDispatchToProps = (dispatch)=>{
    return {
      
      profileValues:(history,location,login)=>{dispatch(AllActions.profileActions.changeUserInfo(history,location,login))},
      logOut:(history)=>{dispatch(AllActions.profileActions.LogOut(history))},
      changeId:(value) =>{dispatch(AllActions.loginActions.userId(value))},
      changeValues:(value) => {dispatch(AllActions.profileActions.changeValues(value))},
      EditDataForm:(data) =>{dispatch(AllActions.profileActions.EditData(data))}
    }
  }
  

  export default connect(mapStateToProps,mapDispatchToProps)(ProfileContainer);
  