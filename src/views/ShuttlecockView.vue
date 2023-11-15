<template>
  <div class="shuttlecock">
    <h1>{{ pageTitle }}</h1>
    <router-link to="./AddProduct" class="action-button">ADD</router-link>
    <router-link to="./DeleteProduct" class="action-button">DELETE</router-link>
    <button @click="editMessage" class="action-button">EDIT</button>

    <!-- Display product list with some styling -->
    <div class="product-list">
      <div v-for="product in products" :key="product.id" class="product-item">
        <img
          v-if="product.thumbnail"
          :src="product.thumbnail"
          :alt="product.title"
          class="product-image"
        />
        <h2>{{ product.title }}</h2>
        <p>{{ product.description }}</p>
        <span class="product-price">${{ product.price.toFixed(2) }}</span>
        <!-- Add more details or customize as needed -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      pageTitle: "<<< Shuttlecock list >>>",
      products: [],
    };
  },
  methods: {
    editMessage() {
      alert("Edit btn clicked!");
    },
  },
  created() {
    axios
      .get("http://localhost:3001/products")
      .then((response) => {
        this.products = response.data;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  },
};
</script>

<style scoped>
.shuttlecock {
  font-family: "Arial", sans-serif;
  max-width: 800px;
  margin: auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 30px;
  margin-bottom: 20px;
}

.action-button {
  padding: 10px;
  margin-right: 10px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
}

.product-list {
  margin-top: 20px;
}

.product-item {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 10px;
}

.product-price {
  font-weight: bold;
  color: #4caf50;
}
</style>
