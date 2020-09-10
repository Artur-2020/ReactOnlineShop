import React from 'react'
import {connect} from 'react-redux'
import SearchComponent from './searchComponent'
import AllActions from '../../store/action'
import Footer from '../footer/footerComponent'

class SearchContainer extends React.Component{
   constructor(props){
     super(props)
     console.log(this.props.match.params.id)
   }
    render(){
      return(
        <React.Fragment>
            <SearchComponent searchState = {this.props.searchState}/>
            <Footer/>
        </React.Fragment>
      )
    }
  }
  const mapStateToProps = (state) => {
    return{
        searchState:state.searchState
    }
    
  }
  const mapDispatchToProps = (dispatch) => {
    return{
     

    }
  }
  
  export default  connect(mapStateToProps,mapDispatchToProps)(SearchContainer);
  