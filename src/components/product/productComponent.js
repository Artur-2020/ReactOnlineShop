import React from 'react'

class ProductComponent extends React.Component{
  constructor(props){
    super(props)
    console.log(this.props)
  }
    
    render(){
      return(
      <div>
        <h1>{this.props.productState.product[0]['name']}</h1>
      
          
      </div>
      )
    }
  }
  
  export default ProductComponent;
  