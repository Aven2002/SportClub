<template>
  <div class="add-product">
    <h1>{{ pageTitle }}</h1>
    <form @submit.prevent="addProduct" class="product-form">
      <div class="form-group">
        <label for="productType">Product Type:</label>
        <select id="productType" v-model="newProduct.productType">
          <option value="racket">Racket</option>
          <option value="shuttlecock">Shuttlecock</option>
        </select>
      </div>

      <div class="form-group">
        <label for="title">Title:</label>
        <input type="text" id="title" v-model="newProduct.title" required />
      </div>

      <div class="form-group">
        <label for="description">Description:</label>
        <textarea
          id="description"
          v-model="newProduct.description"
          required
        ></textarea>
      </div>

      <div class="form-group">
        <label for="price">Price:</label>
        <input type="number" id="price" v-model="newProduct.price" required />
      </div>

      <!-- Add more fields as needed -->

      <button type="submit" class="add-product-button">Add Product</button>
    </form>

    <!-- Feedback to the user -->
    <p v-if="successMessage" class="feedback-message success-message">
      {{ successMessage }}
    </p>
    <p v-if="errorMessage" class="feedback-message error-message">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      pageTitle: "Add New Product",
      newProduct: {
        productType: "racket", // Default value
        title: "",
        description: "",
        price: 0,
        // Add more fields as needed
      },
      successMessage: "",
      errorMessage: "",
    };
  },
  methods: {
    addProduct() {
      // Basic validation
      if (
        !this.newProduct.productType ||
        !this.newProduct.title ||
        !this.newProduct.description ||
        this.newProduct.price <= 0
      ) {
        this.errorMessage = "Please enter valid information.";
        return;
      }

      axios
        .post("http://localhost:3001/products", this.newProduct) // Use the correct endpoint
        .then(() => {
          this.successMessage = "Product added successfully!";
          this.errorMessage = ""; // Clear any previous error message
          this.newProduct = {
            productType: "racket",
            title: "",
            description: "",
            price: 0,
          }; // Clear the form
        })
        .catch((error) => {
          this.errorMessage = `Error adding product: ${error.message}`;
          console.error("Error adding product:", error);
        });
    },
  },
};
</script>

<style scoped>
.add-product {
  font-family: "Arial", sans-serif;
  font-size: 30px;
  max-width: 800px;
  margin: auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.product-form {
  display: grid;
  gap: 15px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
}

input,
textarea,
select {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.add-product-button {
  padding: 10px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.feedback-message {
  margin-top: 15px;
}

.success-message {
  color: #4caf50;
}

.error-message {
  color: #f44336;
}
</style>
