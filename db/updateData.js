// updateData.js
const axios = require('axios');

const productIdToUpdate = 5; // Replace with the actual product ID you want to update

const updatedProductData = {
  title: 'YONEX AEROSENSA 50',
  description: 'Official shuttlecock for the world’s leading international tournaments',
  price: 103.99,
  rating: 5.00,
  stock: 5690,
  thumbnail: 'https://raw.githubusercontent.com/Aven2002/SportClub_API/master/img/Shuttlecock/YX_AEROSENSA_50.png',
};

axios.put(`http://localhost:3001/products/${productIdToUpdate}`, updatedProductData)
  .then(response => {
    console.log('Product updated successfully:', response.data);
  })
  .catch(error => {
    console.error('Error updating product:', error.response ? error.response.data : error.message);
  });
