import React from 'react'
import styles from './cartComponent.module.css'


class CartComponent extends React.Component{
  constructor(props){
    super(props)
    this.props.showCart()
  }
    
    render(){
      return(
      <div className = {styles.main}>
          <h1>Cart</h1>
        
      </div>
      )
    }
  }
  
  export default CartComponent;
  