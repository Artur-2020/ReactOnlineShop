import React from 'react'
import styles from './myProduct.module.css'

class myProductComponent extends React.Component{
  constructor(props){
    super(props)
    console.log(this.props)
    let id = localStorage.getItem('userId')
    if(!id){
        this.props.history.push({pathname:'/login'})
    }
    else{
        this.props.showMyProducts()
    }
  }
    
    render(){
      return(
        <div>
        <div className = {styles.main}>
          <h1>My Products</h1>
          <div className = {styles.products}>
          {
             this.props.myProductState.product.map((product,i)=>{          
                return(

                  <div className = {styles.product} key = {i}>
                    <p  className = {styles.productName}>Name {product.name}</p>
                    <p className = {styles.productCount}>Count {product.count}</p>
                    <p className = {styles.productPrice}>Price {product.price}</p>
                    <p className = {styles.productDescription}>Description <br/> {product.description}</p>

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
  
  export default myProductComponent;
  