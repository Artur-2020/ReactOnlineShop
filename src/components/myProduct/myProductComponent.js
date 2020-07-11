import React from 'react'
import styles from './myProduct.module.css'

class myProductComponent extends React.Component{
  constructor(props){
    super(props)
      let id = localStorage.getItem('userId')
    if(!id){
        this.props.history.push({pathname:'/login'})
    }
    else{
        this.props.showMyProducts()
    }
  }
  delete = (a) =>{
    console.log('productId',a)
    this.props.deleteFromMyProduct(a)
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
                    {
                      (product.image != '')? <img className = {styles.productImage} src = {`http://localhost:8000/image/${product.image}`}/>:''
                    }
                    <p  className = {styles.productName}>Name {product.name}</p>
                    <p className = {styles.productCount}>Count {product.count}</p>
                    <p className = {styles.productPrice}>Price {product.price}</p>
                    <p className = {styles.productDescription}>Description <br/> {product.description}</p>
                    <button className = {styles.delBtn} onClick = {this.delete.bind(this,product)}>Delete</button>


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
  