import React from 'react';
import styles from './header.module.css'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'


var classNames = require('classnames');

class Header extends React.Component{
    constructor(){
        super()

       this.state ={
         isOpen:false,
       } 
    }
   
    response=()=>{
      if(this.state.isOpen==true){
        this.state.isOpen=false
      }
      else{
        this.state.isOpen= true
      }
      // console.log(true)
      this.setState({})
    }
    
      render(){
        var btnClass = classNames({
         
          [styles.active]: this.state.isOpen,
        });
        if(localStorage.getItem('userId')){
            return(
              <header>
              <div className={styles.container}>
                <div className={styles.logo}>
                  <h1 id ={styles.logo}>Art`s Shop</h1>
                </div>
                <nav className={btnClass}>
                  <ul>
                  <li> <Link  to='/'><i  className="lni lni-home"/>Shop</Link></li>
                    <li> <Link  to='/addProduct'><i  className="fa fa-cart-plus"/>Add Product</Link></li>
                    <li> <Link  to='/myProduct'><i className="lni lni-dropbox"></i>My Products</Link></li>
                    <li><a href="#"> <i  className="lni lni-star"/>Wishlist</a></li>
                    <li> <Link  to='/cart'><i  className="lni lni-cart"/> Cart</Link></li>  
                  <li> <Link  to='/profile'><i  className="fa fa-user"/>My Profile</Link></li>


                  </ul>
                </nav>
                <button className={btnClass} onClick={this.response} className={styles.navbar_toggler}> 
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </header>
          )
        }
        else{
          return(
            <header>
            <div className={styles.container}>
              <div className={styles.logo}>
                <h1 id ={styles.logo}>Art`s Shop</h1>
              </div>
              <nav className={btnClass}>
                <ul>
                <li> <Link  to='/'><i  className="lni lni-home"/>Shop</Link></li>
                  <li><Link to = '/signup'> <i  className='fa fa-user icons'></i>Sign Up</Link></li>
                 <li> <Link  to='/login'><i  className="fa fa-user"/>Log In</Link></li>

                </ul>
              </nav>
              <button className={btnClass} onClick={this.response} className={styles.navbar_toggler}> 
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </header>
        )
        }
       
    }
     
}
export default Header