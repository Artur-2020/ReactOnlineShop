import React from 'react'
import {connect} from 'react-redux'
import ProductComponent from './productComponent.js'

class ProductContainer extends React.Component{
   
    render(){
      return(
        <React.Fragment>
          <ProductComponent productState ={this.props.product} />
        </React.Fragment>
      )
    }
  }
  const mapStateToProps = (state) => {
    return{
      product:state.productState
    }

  }
  
  export default  connect(mapStateToProps)(ProductContainer);
  