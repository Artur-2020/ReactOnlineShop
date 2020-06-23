import React from 'react';
import styles from './header.module.css'

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
        return(
            <header>
            <div className={styles.container}>
              <div className={styles.logo}>
                <h1 id ={styles.logo}>Art`s Shop</h1>
              </div>
              <nav className={btnClass}>
                <ul>
                  <li><a href="#"> <i  className="lni lni-home"/>Shop</a></li>
                  <li><a href="#"><i  className="fa fa-cart-plus"/>Add Product</a></li>
                  <li><a href="#"> <i className="lni lni-dropbox"></i>My Products</a></li>
                  <li><a href="#"> <i  className="lni lni-star"/>Wishlist</a></li>
                  <li><a href="#"> <i  className="lni lni-cart"/> Cart</a></li>
                  <li><a href="#"> <i  className="fa fa-user"/>Log In</a></li>
                  <li><a href="#"> <i  className='fa fa-user icons'></i>Sign Up</a></li>
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
export default Header