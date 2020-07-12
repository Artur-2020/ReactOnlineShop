import React from 'react'
import styles from './payment.module.css'

class PaymentComponent extends React.Component{
  constructor(props){
    super(props)
    this.props.changePaymentTotal(this.props.location)
  }
  inpPres = (e)=>{
    if (isNaN(+e.key)){
        e.preventDefault();
    } 
  }
  paymentForm = (e)=>{
    e.preventDefault();


  }
    
    render(){
      return(
      <div>
        <div className = {styles.main}>
        <form onSubmit = {this.paymentForm}>
    <div className={styles.form_header}>
      <h3>Payment</h3>
      <div>
        <img src="https://img.favpng.com/4/20/5/credit-card-visa-electron-mastercard-png-favpng-aDKdw0ntnaPfLAeZf8aLWKQab.jpg" alt="visa"/>
      <img src="https://img.favpng.com/16/7/2/maestro-debit-card-credit-card-mastercard-payment-card-png-favpng-adJT4jBpBcnQpkLKSnqFmpPex.jpg" alt="maestro"/>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1200px-MasterCard_Logo.svg.png" alt="mastercard"/>
      </div>
    </div>
    <div className={styles.form_body}>
      <label className = {styles.label} >Name on Card</label>
    <input onKeyPress = {this.inpPres} className = {styles.inp} type="text" id="name"/>
      <label className = {styles.label}>Card number</label>
    <input onKeyPress = {this.inpPres} className = {styles.inp} type="text" id="number"/>
      <div className={styles.expiration}>
        <label className = {styles.label}>
          CVC
          <input onKeyPress = {this.inpPres} className = {styles.inp} type="text" id="cvc" placeholder="ex. 311"/>
        </label>
        <label   className = {styles.label}>Expiration Month
          <input onKeyPress = {this.inpPres}  className = {styles.inp} type="text" id="month" placeholder="MM"/>
        </label>
        <label className = {styles.label} >Expiration Year
          <input onKeyPress = {this.inpPres} className = {styles.inp} type="text" id="year" placeholder="YYYY"/>
        </label>
      </div>
      <button className = {styles.btn}>Pay Now {this.props.paymentState.totalPrice} $ </button>
    </div>
  </form>
       
        
       

        </div>
      </div>
      )
    }
  }
  
  export default PaymentComponent;
  