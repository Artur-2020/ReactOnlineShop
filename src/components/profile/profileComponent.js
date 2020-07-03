import React from 'react'
import styles from './profile.module.css'
import axios from 'axios'



class ProfileComponent extends React.Component{
  constructor(props){
    super(props)
    this.props.userInfo()
  }
   
    render(){
      return(
        <div className={styles.main}>
          


        </div>
     
      )
    }
  }
  
  export default ProfileComponent;
  