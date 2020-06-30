import React from 'react'
import styles from '../signup/signup.module.css'

class LoginComponent extends React.Component{
  constructor(props){
    super(props)
  }
    changeValue = (e)=>{
      if(e.target.name=='email'){
        this.props.loginActionEmail(e.target.value)
      }
      else {
        this.props.loginActionPassword(e.target.value)
      }

    }
    loginForm = (e)=>{
      e.preventDefault()
      this.props.loginActionForm(this.props.loginState)
    }
    render(){
      return(
        <div className={styles.main}>
        <div id={styles.head}>
         <h2>Log In</h2>
      </div>
       <div id={styles.form}>
           <form onSubmit={this.loginForm}>   
           <p className={styles.error}>{this.props.loginState.errors.email}</p>
             <input onChange={this.changeValue} name='email' value={this.props.loginState.email} type="text"className={ styles.form_inp} placeholder="Email"/>
           <p className={styles.error}>{this.props.loginState.errors.password}</p>
            
             <input onChange={this.changeValue}  name='password' value={this.props.loginState.password} type="password" className={styles.form_inp}  placeholder="Password"/>
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
  