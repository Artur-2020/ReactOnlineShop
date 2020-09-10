import React from 'react'
import {connect} from 'react-redux'
import ProductComponent from './productComponent.js'
import AllActions from '../../store/action'
import Footer from '../footer/footerComponent'

class ProductContainer extends React.Component{
   
    render(){
      return(
        <React.Fragment>
          <ProductComponent addCart = {this.props.addCart} productState ={this.props.product} showProducts={this.props.showProducts} />
          <Footer/>
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
      showProducts:()=>{ dispatch(AllActions.productActions.changeProduct())},
      addCart:(value)=>{ dispatch(AllActions.productActions.addCart(value))},

    }
  }
  
  export default  connect(mapStateToProps,mapDispatchToProps)(ProductContainer);
  