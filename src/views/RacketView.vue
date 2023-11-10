<template>
  <div class="racket">
    <h1>{{ pageTitle }}</h1>
    <button @click="addMessage" class="add-product-button">ADD</button>
    <button @click="editMessage" class="add-product-button">EDIT</button>
    <button @click="deleteMessage" class="add-product-button">DELETE</button>

    <h1 style="color: black">Empty.... Coming Soon!</h1>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      pageTitle: "<<< Badminton Racket list >>>",
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
  margin-bottom: 20px;
}

.product-image {
  max-width: 200px;
  max-height: 200px;
  margin-right: 20px;
}

.product-details {
  display: flex;
  flex-direction: column;
}

.product-description {
  color: #333;
}

.product-price {
  color: #007bff; /* Blue color */
}

.product-rating {
  color: #28a745; /* Green color */
}

.product-stock {
  color: #dc3545; /* Red color */
}

.add-product-button {
  font-size: 16px;
  padding: 10px;
  background-color: #696969;
  color: #fff; /* White color */
  border: none;
  cursor: pointer;
  margin: 20px;
}
</style>
