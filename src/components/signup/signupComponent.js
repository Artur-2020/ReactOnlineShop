import React from 'react'
import styles from './../signup/signup.module.css'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'


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
    console.log(this.props)
    e.preventDefault()
    this.props.signupActionForm(this.props.signupState,this.props.history)
  }
    
    render(){
      return(
      <div className={styles.main}>
         <div id={styles.head}>
          <h2>Create Account</h2>
       </div>
        <div id={styles.form}>
            <form onSubmit={this.signupForm}>
              <p className={styles.error}>{this.props.signupState.errors.name}</p>
              <input type="text" onChange={this.changeValue} name='name' value ={this.props.signupState.name}  className={styles.form_inp} placeholder="Name"/>
              <p className={styles.error}>{this.props.signupState.errors.surname}</p>
              <input type="text" onChange={this.changeValue} name='surname' value ={this.props.signupState.surname} className={styles.form_inp}  placeholder="Surname"/>
              <p className={styles.error}>{this.props.signupState.errors.age}</p>              
              <input type="text" onChange={this.changeValue} name='age' value ={this.props.signupState.age} className={styles.form_inp} placeholder="Age"/>
              <p className={styles.error}>{this.props.signupState.errors.email}</p>
              <input type="text" onChange={this.changeValue} name='email' value ={this.props.signupState.email} className={ styles.form_inp} placeholder="Email"/>
              <p className={styles.error}>{this.props.signupState.errors.password}</p> 
              <input type="password" onChange={this.changeValue} name='password' value ={this.props.signupState.password}className={styles.form_inp}  placeholder="Password"/>
              <p className={styles.error}>{this.props.signupState.errors.confirmPassword}</p>
             
              <input type="password" onChange={this.changeValue} name='confirmPassword' value ={this.props.signupState.confirmPassword} className={ styles.form_inp}  placeholder="Comfirm Password "/>
              <button id={styles.submit}>Sign Up</button>
            </form>
        </div>
      <div className={styles.link}>
          <p>If you have a account click here! <span><Link className={styles.logLink} to='/login'>Login</Link></span></p>
      </div>
    </div>
      )
    }
  }
  
  export default SignupComponent;
  