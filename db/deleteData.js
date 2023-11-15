// deleteData.js
const axios = require("axios");

const deleteSelectedProducts = async (productIds) => {
  try {
    const response = await axios.delete(
      "http://localhost:3001/deleteProducts",
      {
        data: { productIds },
      }
    );
    console.log("Products deleted successfully:", response.data);
  } catch (error) {
    console.error(
      "Error deleting products:",
      error.response ? error.response.data : error.message
    );
  }
};

module.exports = deleteSelectedProducts;
