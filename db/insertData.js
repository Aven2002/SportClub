const axios = require('axios');
const Database = require('./path/to/your/Database'); // Update the path accordingly

// Function to handle the post request and database insertion
const addProduct = (productData, productType) => {
  // Add productType to the data
  productData.productType = productType;

  // Perform the API request
  axios.post('http://localhost:3001/shuttlecocks', productData)
    .then(response => {
      console.log('Product added successfully:', response.data);

      // If the API request is successful, add the data to the database
      if (productType === 'shuttlecock') {
        Database.addShuttlecock(productData, (err, shuttlecock) => {
          handleDatabaseResponse(err, shuttlecock, 'Shuttlecock');
        });
      } else if (productType === 'racket') {
        Database.addRacket(productData, (err, racket) => {
          handleDatabaseResponse(err, racket, 'Racket');
        });
      }
    })
    .catch(error => {
      console.error('Error adding product:', error.response ? error.response.data : error.message);
    });
};

// Function to handle the database response
const handleDatabaseResponse = (err, product, productType) => {
  if (err) {
    console.error(`Error adding ${productType.toLowerCase()} to the database:`, err);
  } else {
    console.log(`${productType} added to the database:`, product);
  }
};

// Racket data
const racketData = {
  title: 'Li-Ning Aeronut 7000I',
  description: 'Professional badminton racket for advanced players',
  price: 189.99,
  rating: 4.75,
  stock: 3410,
  thumbnail: 'https://raw.githubusercontent.com/Aven2002/SportClub_API/master/img/Shuttlecock/RSL1.png',
};

// Performing post request and adding data to the database
addProduct(racketData, 'racket');
