import React from 'react'
import styles from './../signup/signup.module.css'

class SignupComponent extends React.Component{
  constructor(props){
    super(props)
    console.log(this.props)
  }
    
    render(){
      return(
      <div className={styles.main}>
         <div id={styles.head}>
          <h2>Create Account</h2>
       </div>
        <div id={styles.form}>
            <form>
              <input type="text"  className={styles.form_inp} placeholder="Name"/>
              <input type="text" className={styles.form_inp}  placeholder="Surname"/>
              <input type="text" className={styles.form_inp} placeholder="Age"/>
              <input type="text"className={ styles.form_inp} placeholder="Email"/>
              <input type="password" className={styles.form_inp}  placeholder="Password"/>
              <input type="password" className={ styles.form_inp}  placeholder="Comfirm Password "/>
              <button id={styles.submit}>Sign Up</button>
            </form>
        </div>
      <div className={styles.link}>
          <p>If you have a account click here! <span><a className={styles.logLink} href="#">Login</a></span></p>
      </div>
    </div>
      
          
      
      )
    }
  }
  
  export default SignupComponent;
  