const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? process.env.strpe_key
  :process.env.strpe_key
 
export default STRIPE_PUBLISHABLE;