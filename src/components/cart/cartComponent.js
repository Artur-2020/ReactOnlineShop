import React from 'react'
import styles from './cartComponent.module.css'


class CartComponent extends React.Component{
  constructor(props){
    super(props)
    this.props.showCart()
  } 
  delete = (a) =>{
    console.log('jnjelu id',a)
    this.props.deleteFromCart(a)

  }
    
    render(){
      return(
        <div>
        <div className = {styles.main}>
          <h1>Cart</h1>
          <div className = {styles.products}>
          {
             this.props.cartState.cart.map((product,i)=>{          
                return(

                  <div className = {styles.product} key = {i}>
                  {
                      (product.image != '')? <img className = {styles.productImage} src = {`http://localhost:8000/image/${product.image}`}/>:''
                  }
                    
                    <p  className = {styles.productName}>Name {product.name}</p>
                    <p className = {styles.productCount}>Count {product.count}</p>
                    <p className = {styles.productPrice}>Price {product.price}</p>
                    <p className = {styles.productDescription}>Description <br/> {product.description}</p>
                    <button className = {styles.delBtn} onClick = {this.delete.bind(this,product._id)}>Delete</button>

                  </div>
                )
                        
              })
          }

          </div>

        </div>
      </div>
      )
    }
  }
  
  export default CartComponent;
  