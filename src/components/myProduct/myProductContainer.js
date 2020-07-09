import React from 'react'
import AllActions from '../../store/action'
import {connect} from 'react-redux'
import Header from '../header/headerComponent'
import Footer from '../footer/footerComponent'
import MyProductComponent from './myProductComponent'

class MyProductContainer extends React.Component{
   
    render(){
      return(
        <React.Fragment>
          <Header/>
          <MyProductComponent showMyProducts = {this.props.showMyProducts} history = {this.props.history} myProductState = {this.props.myproduct} />
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
      
  }
}
  
  
  export default  connect(mapStateToProps,mapDispatchToProps)(MyProductContainer);
  