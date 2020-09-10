import React from 'react'
import styles from './search.module.css'

class SearchComponent extends React.Component{
  constructor(props){
    super(props)
   
  }
 
    
    render(){
      return(
        <div className = {styles.main}>
             <div className = {styles.products}>
          {
             this.props.searchState.product.map((product,i)=>{          
                return(

                  <div className = {styles.product} key = {i}>
                  {
                      (product.image != '')? <img className = {styles.productImage} src = {`http://localhost:8000/image/${product.image}`}/>:''
                  }
                    
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
      )
    }
  }
  
  export default SearchComponent;
  