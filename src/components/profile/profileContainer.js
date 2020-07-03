import React from 'react'
import {connect} from 'react-redux'
import AllActions from '../../store/action'
import Footer from '../footer/footerComponent'
import Header from '../header/headerComponent'
import ProfileCompoonent from './profileComponent'

class ProfileContainer extends React.Component{

  constructor(props){
    super(props)

  }  
    render(){
      return(
        <React.Fragment>
            <Header/>
            <ProfileCompoonent userInfo = {this.props.profileValues} />
            <Footer/>
        </React.Fragment>
      )
    }
  }

  const mapStateToProps = (state) => {
    return{
      profile:state.profileState
    }

  }
  const mapDispatchToProps = (dispatch)=>{
    return {
      profileValues:(value)=>{dispatch(AllActions.profileActions.changeUserInfo(value))}
    }
  }
  

  export default connect(mapStateToProps,mapDispatchToProps)(ProfileContainer);
  