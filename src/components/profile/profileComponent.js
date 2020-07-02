import React from 'react'
import styles from './profile.module.css'


class ProfileComponent extends React.Component{
  constructor(props){
    super(props)
  }
   
    render(){
      return(
        <div className={styles.main}>
            <h1>Profile</h1>
        </div>
     
      )
    }
  }
  
  export default ProfileComponent;
  