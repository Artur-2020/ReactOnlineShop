import React from 'react'
import styles from './cartComponent.module.css'
import Checkout from '../../Checkout'



class CartComponent extends React.Component{
  constructor(props){
    super(props)
    this.props.showCart()

    setTimeout(
      function() {
          this.showTotal();
      }
      .bind(this),
      300
  );
  } 
  

  delete = (a) =>{
    console.log('jnjelu id',a)
    this.props.deleteFromCart(a)
    setTimeout(
      function() {
          this.showTotal();
      }
      .bind(this),
      300
  );


  }
  showTotal = () =>{
    this.props.changeTotalPrice(this.props.cartState.cart)
  }    
  buy = () =>{
    console.log('gin',)
    this.props.history.push({pathname:'/payment',state:this.props.cartState.totalPrice})
  }

    render(){
      return(
        <div>
        <div className = {styles.main}>
          <h1>Cart</h1>


          <div className = {styles.totalBuy}>
           
        <Checkout
            name={'The Road to learn React'}
            description={'Only the Book'}
            amount={this.props.cartState.totalPrice}
          />
          </div>
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
                    <p>My Count {product.myCount}</p>
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
  