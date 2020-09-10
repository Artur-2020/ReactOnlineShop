import React from 'react'
import {connect} from 'react-redux'
import AllActions from '../../store/action'
import HeaderComponent from './headerComponent'

class HeaderContainer extends React.Component{
  constructor(props){
    super(props)
    console.log('header container prosp',this.props)
  }
   
    render(){
      return(
        <React.Fragment>
            <HeaderComponent headerState = {this.props.header} changeValue = {this.props.changeValue} history = {this.props.history} openSearch = {this.props.openSearch}/> 
        </React.Fragment>
      )
    }
  }
  const mapStateToProps = (state) => {
    return{
      header:state.headerState
    }
    
  }
  const mapDispatchToProps = (dispatch) => {
    return{
      changeValue:(value) =>{dispatch(AllActions.headerActions.changeSearchValue(value))},
      openSearch:(history,value) =>{dispatch(AllActions.headerActions.openSearch(history,value))},


     
    }
  }
  
  export default  connect(mapStateToProps,mapDispatchToProps)(HeaderContainer);
  