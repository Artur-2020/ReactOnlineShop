const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_test_51H4LovFDR7tSfidLer6R5BqkEmX8gzXLzy5LlLEKR8W6Ke3nXO7SVwWlmHWAnsxlfLaFT4AlpleZgHtkObnHttp900xxtVnkYX'
  : 'pk_test_51H4LovFDR7tSfidLer6R5BqkEmX8gzXLzy5LlLEKR8W6Ke3nXO7SVwWlmHWAnsxlfLaFT4AlpleZgHtkObnHttp900xxtVnkYX';
 
export default STRIPE_PUBLISHABLE;