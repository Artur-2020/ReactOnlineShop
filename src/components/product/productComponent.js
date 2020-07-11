import React from 'react'
import styles from './product.module.css'

class ProductComponent extends React.Component{
  constructor(props){
    super(props)
    this.props.showProducts()
  }
  addCart = (value) => {
    console.log('uxarkvox product',value)
    this.props.addCart(value)
  }
    
    render(){
      return(
      <div>
        <div className = {styles.main}>
          <h1>All Products</h1>
          <div className = {styles.products}>
          {
             this.props.productState.product.map((product,i)=>{          
                return(

                  <div className = {styles.product} key = {i}>
                    {
                      (product.image != '')? <img className = {styles.productImage} src = {`http://localhost:8000/image/${product.image}`}/>:''
                    }
                   
                    <p  className = {styles.productName}>Name {product.name}</p>
                    <p className = {styles.productCount}>Count {product.count}</p>
                    <p className = {styles.productPrice}>Price {product.price}</p>
                    <p className = {styles.productDescription}>Description <br/> {product.description}</p>
                    {
                      (product.user === localStorage.getItem('userId'))?"":<button onClick = {this.addCart.bind(null,product)} className = {styles.addCart} > <i  className="lni lni-cart"/></button>
                  
                   }
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
  
  export default ProductComponent;
  