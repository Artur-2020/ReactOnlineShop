import React from 'react'
import styles from './../signup/signup.module.css'

class SignupComponent extends React.Component{
  constructor(props){
    super(props)
  }
  changeValue = (e)=>{

    let value = e.target.value
      if(e.target.name=='name'){
         this.props.signupActionName(value)
      }
      else if(e.target.name=='surname'){
        this.props.signupActionSurname(value)
      }
      else if(e.target.name=='age'){
        this.props.signupActionAge(value)
      }
      else if(e.target.name=='email'){
        this.props.signupActionEmail(value)
      }
      else if(e.target.name=='password'){
        this.props.signupActionPassword(value)
      }
      else if(e.target.name=='confirmPassword'){
        this.props.signupActionConfirmPassword(value)
      }
  }
  signupForm=(e)=>{
    console.log(this.props.signupState)
    e.preventDefault()
    this.props.signupActionForm(this.props.signupState)
  }
    
    render(){
      return(
      <div className={styles.main}>
         <div id={styles.head}>
          <h2>Create Account</h2>
       </div>
        <div id={styles.form}>
            <form onSubmit={this.signupForm}>
              <input type="text" onChange={this.changeValue} name='name' value ={this.props.signupState.name}  className={styles.form_inp} placeholder="Name"/>
              <input type="text" onChange={this.changeValue} name='surname' value ={this.props.signupState.surname} className={styles.form_inp}  placeholder="Surname"/>
              <input type="text" onChange={this.changeValue} name='age' value ={this.props.signupState.age} className={styles.form_inp} placeholder="Age"/>
              <input type="text" onChange={this.changeValue} name='email' value ={this.props.signupState.email} className={ styles.form_inp} placeholder="Email"/>
              <input type="password" onChange={this.changeValue} name='password' value ={this.props.signupState.password}className={styles.form_inp}  placeholder="Password"/>
              <input type="password" onChange={this.changeValue} name='confirmPassword' value ={this.props.signupState.confirmPassword} className={ styles.form_inp}  placeholder="Comfirm Password "/>
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
  