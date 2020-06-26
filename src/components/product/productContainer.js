import React from 'react'
import {connect} from 'react-redux'
import ProductComponent from './productComponent.js'
import AllActions from '../../store/action'

class ProductContainer extends React.Component{
   
    render(){
      return(
        <React.Fragment>
          <ProductComponent productState ={this.props.product} productActions={this.props.productActions} />
        </React.Fragment>
      )
    }
  }
  const mapStateToProps = (state) => {
    return{
      product:state.productState
    }
    
  }
  const mapDispatchToProps = (dispatch) => {
    return{
      productActions:()=>{dispatch(AllActions.productActions.changeProduct())}

    }
  }
  
  

  export default  connect(mapStateToProps,mapDispatchToProps)(ProductContainer);
  