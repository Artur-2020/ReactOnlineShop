import React from 'react'
import AllActions from '../../store/action'
import {connect} from 'react-redux'
import Header from '../header/headerContainer'
import Footer from '../footer/footerComponent'
import MyProductComponent from './myProductComponent'

class MyProductContainer extends React.Component{
   
    render(){
      return(
        <React.Fragment>
          <Header/>
          <MyProductComponent deleteFromMyProduct = {this.props.deleteFromMyProduct} showMyProducts = {this.props.showMyProducts} history = {this.props.history} myProductState = {this.props.myproduct} />
          <Footer/>
        </React.Fragment>
      )
    }
  }
  const mapStateToProps = (state) => {
    return{
        myproduct:state.myProductState
    }
    
  }
  const mapDispatchToProps = (dispatch)=>{
    return {
      
      showMyProducts:()=>{dispatch( AllActions.myProductActions.showMyProducts())},
      deleteFromMyProduct:(id)=>{dispatch( AllActions.myProductActions.deleteFromMyProduct(id))},

      
  }
}
  
  
  export default  connect(mapStateToProps,mapDispatchToProps)(MyProductContainer);
  