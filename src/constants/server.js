const PAYMENT_SERVER_URL = process.env.NODE_ENV === 'production'
  ? 'http://localhost:8000/stripe'
  : 'http://localhost:8000/stripe';
 
export default PAYMENT_SERVER_URL;