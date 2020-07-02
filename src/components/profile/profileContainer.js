import React from 'react'
import Footer from '../footer/footerComponent'
import Header from '../header/headerComponent'
import ProfileCompoonent from './profileComponent'

class ProfileContainer extends React.Component{

    
   
    render(){
      return(
        <React.Fragment>
            <Header/>
            <ProfileCompoonent/>
            <Footer/>

        </React.Fragment>
      )
    }
  }
  

  export default  ProfileContainer;
  