<template>
  <div class="shuttlecock">
    <h1>{{ pageTitle }}</h1>
    <button @click="addMessage" class="add-product-button">ADD</button>
    <button @click="editMessage" class="add-product-button">EDIT</button>
    <button @click="deleteMessage" class="add-product-button">DELETE</button>
    <div v-for="product in products" :key="product.id" class="product-card">
      <img
        v-if="product.thumbnail"
        :src="product.thumbnail"
        :alt="product.title"
        class="product-image"
      />

      <div class="product-details">
        <h2>{{ product.title }}</h2>
        <p class="product-description">{{ product.description }}</p>
        <p class="product-price">Price: ${{ product.price }}</p>
        <p class="product-rating">Rating: {{ product.rating }}</p>
        <p class="product-stock">Stock: {{ product.stock }}</p>
      </div>

      <hr />
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
    addMessage() {
      alert("Add btn clicked !");
    },
    editMessage() {
      alert("Edit btn clicked!");
    },
    deleteMessage() {
      alert("Delete btn clicked!");
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
  font-size: 30px;
  max-width: 800px;
  margin: auto;
}

.product-card {
  margin-bottom: 10px;
}

.product-image {
  max-width: 200px;
  max-height: 200px;
  margin-right: 20px;
}

.product-details {
  display: flex;
  flex-direction: column;
  margin: 15px; /* Adjusted margin */
}

.product-description {
  color: #333;
  margin: 0px; /* Adjusted margin */
}

.product-price {
  color: #007bff;
  margin: 0; /* Adjusted margin */
}

.product-rating {
  color: #28a745;
  margin: 0; /* Adjusted margin */
}

.product-stock {
  color: #dc3545;
  margin: 0; /* Adjusted margin */
}

.add-product-button {
  font-size: 16px;
  padding: 10px;
  background-color: #696969;
  color: #fff;
  border: none;
  cursor: pointer;
  margin: 20px;
}
</style>
