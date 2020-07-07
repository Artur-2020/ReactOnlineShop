import React from 'react'
import styles from './addProduct.module.css'

class addProductComponent extends React.Component{
  constructor(props){
    super(props)
    console.log(this.props)
    
  }
  changeValue = (e) =>{
      console.log(e.target.name)
    if(e.target.name == 'name'){
        this.props.addProductName(e.target.value)
    }
    else if(e.target.name == 'count'){
        this.props.addProductCount(e.target.value)
    }
    else if(e.target.name == 'price'){
        this.props.addProductPrice(e.target.value)
    }
    else if(e.target.name == 'description'){
        this.props.addProductDescription(e.target.value)
    }

  }
  productForm = (e) => {
    e.preventDefault()
    this.props.addProductForm(this.props.addProductState)
  }
    
    render(){
      return(
      <div>
        <div className = {styles.main}>
            <h1>Add Product</h1>
            <form onSubmit = {this.productForm}>
                <p className= {styles.error}>{this.props.addProductState.errors.name}</p>
                    <input value = {this.props.addProductState.name} name = 'name' onChange = {this.changeValue} className = {styles.inp} placeholder='name'/>
                <p className= {styles.error}> {this.props.addProductState.errors.count} </p>
                    <input value = {this.props.addProductState.count} name = 'count' onChange = {this.changeValue} className = {styles.inp} placeholder='count'/>
                <p className= {styles.error}>{this.props.addProductState.errors.price}</p>
                    <input value = {this.props.addProductState.price}  name = 'price' onChange = {this.changeValue} className = {styles.inp} placeholder='price'/>
                <p className= {styles.error}> {this.props.addProductState.errors.description}</p>    
                    <textarea value = {this.props.addProductState.description} name = 'description' onChange = {this.changeValue} className = {styles.inp} placeholder='description'/>
                <button className = {styles.addBtn} >Add</button>
            </form>

        </div>
      
          
      </div>
      )
    }
  }
  
  export default addProductComponent;
  