const axios = require("axios");

const productData = {
  title: "Testing",
  description:
    "Official shuttlecock for the world’s leading international tournaments",
  price: 103.99,
  rating: 5.0,
  stock: 5690,
  thumbnail: "http://192.168.0.21:8081/Shuttlecock/YX_AEROSENSA_50.png",
};

axios
  .post("http://localhost:3001/products", productData)
  .then((response) => {
    console.log("Product added successfully:", response.data);
  })
  .catch((error) => {
    console.error(
      "Error adding product:",
      error.response ? error.response.data : error.message
    );
  });
