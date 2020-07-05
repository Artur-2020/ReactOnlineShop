import React from 'react'
import styles from './profile.module.css'
import axios from 'axios'



class ProfileComponent extends React.Component{
  constructor(props){
    super(props)
    this.props.userInfo(this.props.history,this.props.location,this.props.loginState)

    this.state = {
      user:{name:'',surname:'',age:'',email:''}

    }
  }
  logOut = () =>{
    this.props.changeId('')
    this.props.logOut(this.props.history)
  }
  changeVal = (e) => {
    this.state.user[e.target.name] = e.target.value
    this.setState({})
    this.props.changeValues(this.state.user)

  }
  changeForm = (e) => {
    e.preventDefault()
    this.state.user = {name:'',surname:'',age:'',email:''}
    this.props.EditDataForm(this.props.profileState.changeValues)    
    this.setState({})
  } 
    render(){
      return(
        <div className = {styles.infoEditMain}>
          <div className={styles.main}>
             <button className={styles.logOut} onClick = {this.logOut} >Log Out</button>
             <div className = {styles.user}>
              <div className={styles.imageParent}></div>

              <div className={styles.info}>
                  <i>{this.props.profileState.user.name} {this.props.profileState.user.surname} </i>
                  <span >{this.props.profileState.user.age} Years Old </span>
                  <span>{this.props.profileState.user.email }</span>
              </div>
              

            </div>
          </div>
          <div className = {styles.editMain}>
           
              <h4>Edit User Data</h4>
              <form className = {styles.changeForm} onSubmit = {this.changeForm}>
                 <p className = {styles.error}>{this.props.profileState.errors.name}</p>
                <input  name = 'name' onChange ={this.changeVal} value =  {this.props.profileState.changeValues.name } className = {styles.inp} placeholder = 'name' />
                  <p className = {styles.error}>{this.props.profileState.errors.surname}</p>
                <input  name = 'surname' onChange ={this.changeVal} value = {this.props.profileState.changeValues.surname } className = {styles.inp} placeholder = 'surname'/>
                  <p className = {styles.error}>{this.props.profileState.errors.age}</p>
                <input  name = 'age' onChange ={this.changeVal}  value = {this.props.profileState.changeValues.age } className = {styles.inp} placeholder = 'age'/>
                <p className = {styles.error}>{this.props.profileState.errors.email}</p>

                <input  name = 'email' onChange ={this.changeVal}  value = {this.props.profileState.changeValues.email } className = {styles.inp} placeholder = 'email'/>               
                <button className = {styles.saveBtn}>Save</button>
              </form>
            </div>      
        </div>
     
      )
    }
  }
  
  export default ProfileComponent;
  