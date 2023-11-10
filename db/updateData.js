// updateData.js
const axios = require('axios');

const productIdToUpdate = 1; // Replace with the actual product ID you want to update

const updatedProductData = {
  title: 'RSL 1',
  description: 'Special grade of Goose feather is chosen with cooperation with Goose farms in North Eastern part of China',
  price: 99.99,
  rating: 4.8,
  stock: 1500,
  thumbnail: 'http://192.168.0.21:8081/Shuttlecock/RSL_1.png',
};

axios.put(`http://localhost:3001/products/${productIdToUpdate}`, updatedProductData)
  .then(response => {
    console.log('Product updated successfully:', response.data);
  })
  .catch(error => {
    console.error('Error updating product:', error.response ? error.response.data : error.message);
  });
