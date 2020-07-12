import React from 'react'
import {connect} from 'react-redux'
import PaymentComponent from './paymentComponent'
import AllActions from '../../store/action'
import Header from '../header/headerComponent'
import Footer from '../footer/footerComponent'

class PaymentContainer extends React.Component{
   
    render(){
      return(
        <React.Fragment>
          <Header/>
          <PaymentComponent changePaymentTotal = {this.props.changePaymentTotal} paymentState = {this.props.paymentState} location = {this.props.location} />
          <Footer/>
        </React.Fragment>
      )
    }
  }
  const mapStateToProps = (state) => {
    return{
      paymentState:state.paymentState
    }
    
  }
  const mapDispatchToProps = (dispatch) => {
    return{
      changePaymentTotal:(location)=>{dispatch(AllActions.paymentActions.changePaymentTotalPrice(location))}


    }
  }
  
  export default  connect(mapStateToProps,mapDispatchToProps)(PaymentContainer);
  