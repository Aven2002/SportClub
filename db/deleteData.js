// deleteData.js
const axios = require('axios');

const productIdToDelete = 6; // Replace with the actual product ID you want to delete

axios.delete(`http://localhost:3001/products/${productIdToDelete}`)
  .then(response => {
    console.log('Product deleted successfully:', response.data);
  })
  .catch(error => {
    console.error('Error deleting product:', error.response ? error.response.data : error.message);
  });
