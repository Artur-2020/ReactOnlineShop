import React from 'react'
import {connect} from 'react-redux'
import AllActions from '../../store/action'
import Header from '../header/headerContainer'
import Footer from '../footer/footerComponent'
import CartComponent from './cartComponent'

class CartContainer extends React.Component{
   
    render(){
      return(
        <React.Fragment>
          {/* <Header/> */}
          <CartComponent history = {this.props.history} changeTotalPrice ={this.props.changeTotalPrice} deleteFromCart = {this.props.deleteFromCart} cartState = {this.props.cart} showCart = {this.props.showCart}  />
          <Footer/>
        </React.Fragment>
      )
    }
  }
  const mapStateToProps = (state) => {
    return{
      cart:state.cartState
    }
    
  }
  const mapDispatchToProps = (dispatch) => {
    return{
      showCart:(value)=>{ dispatch(AllActions.cartActions.showCart(value))},
      deleteFromCart:(id)=>{ dispatch(AllActions.cartActions.deleteFromCart(id))},
      changeTotalPrice:(cart)=>{ dispatch(AllActions.cartActions.changeTotalPrice(cart))},



    }
  }
  
  export default  connect(mapStateToProps,mapDispatchToProps)(CartContainer);
  