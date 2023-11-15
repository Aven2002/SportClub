const axios = require('axios');

const productIdToDelete = 7; // Replace with the actual product ID you want to delete
const productType = 'shuttlecock'; // Replace with 'racket' if deleting a racket

axios.delete(`http://localhost:3001/products/${productIdToDelete}?type=${productType}`)
  .then(response => {
    console.log('Product deleted successfully:', response.data);
  })
  .catch(error => {
    console.error('Error deleting product:', error.response ? error.response.data : error.message);
  });
