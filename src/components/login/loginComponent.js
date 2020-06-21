import React from 'react'
import styles from '../signup/signup.module.css'

class LoginComponent extends React.Component{
  constructor(props){
    super(props)
    console.log(this.props)
  }
    
    render(){
      return(
        <div className={styles.main}>
        <div id={styles.head}>
         <h2>Log In</h2>
      </div>
       <div id={styles.form}>
           <form>
             
             <input type="text"className={ styles.form_inp} placeholder="Email"/>
             <input type="password" className={styles.form_inp}  placeholder="Password"/>
             
             <button id={styles.submit}>Log In</button>
           </form>
       </div>
     <div className={styles.link}>
         <p>If you don`t have a account click here! <span><a className={styles.logLink} href="#">Registration</a></span></p>
     </div>
   </div>
     
      )
    }
  }
  
  export default LoginComponent;
  