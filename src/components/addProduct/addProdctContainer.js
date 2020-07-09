import React from 'react'
import {connect} from 'react-redux'
//es connecti mijocov containeri hamar stori arjeqy dardznelu enq hasaneli
import AddProductCompponent from './addProductComponent'
import AllActions from '../../store/action'
import Header from '../header/headerComponent'
import Footer from '../footer/footerComponent'


class LoginContainer extends React.Component{
   
    render(){
      return(
        <React.Fragment>
          <Header/>
          <AddProductCompponent addProductImage ={this.props.addProductImage} history = {this.props.history} addProductForm = {this.props.addProductForm} addProductState = {this.props.addProductState} addProductName = {this.props.addProductName} addProductCount = {this.props.addProductCount} addProductPrice = {this.props.addProductPrice} addProductDescription = {this.props.addProductDescription}   />
          <Footer/>
        </React.Fragment>
      )
    }
  }
  const mapStateToProps = (state) => {
    return{
      addProductState:state.addProductState
    }

  }
  const mapDispatchToProps =(dispatch)=>{
    return {
      addProductName:(value)=>{dispatch(AllActions.addProductActions.addProductName(value))},
      addProductCount:(value)=>{dispatch(AllActions.addProductActions.addProductCount(value))},
      addProductPrice:(value)=>{dispatch(AllActions.addProductActions.addProductPrice(value))},
      addProductDescription:(value)=>{dispatch(AllActions.addProductActions.addProductDescription(value))},
      addProductImage:(value)=>{dispatch(AllActions.addProductActions.addProductImage(value))},
      addProductForm:(data)=>{dispatch(AllActions.addProductActions.addProductForm(data))},


    }
  }
 
  
  export default  connect(mapStateToProps,mapDispatchToProps)(LoginContainer);
  