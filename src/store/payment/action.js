export const changePaymentTotalPrice = (location)=>{
    console.log('paymenti actioni locatia',)
    return dispatch=>{
        dispatch({type:'changePaymentTotal',value:location.state})
    }
        
    
    // return 
}