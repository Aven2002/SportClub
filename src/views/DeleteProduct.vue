<template>
  <div class="shuttlecock">
    <h1>Delete Selected Products</h1>

    <!-- Display product list with checkboxes for deletion -->
    <div class="product-list">
      <div v-for="product in products" :key="product.id" class="product-item">
        <div class="checkbox-container">
          <input
            type="checkbox"
            v-model="selectedProducts"
            :value="product.id"
            @change="handleCheckboxChange"
          />
        </div>
        <img
          v-if="product.thumbnail"
          :src="product.thumbnail"
          :alt="product.title"
          class="product-image"
        />
        <div class="product-details">
          <h2>{{ product.title }}</h2>
          <p>{{ product.description }}</p>
          <span class="product-price">${{ product.price.toFixed(2) }}</span>
        </div>
      </div>
    </div>

    <!-- Button to confirm delete -->
    <button @click="showConfirmationModal" class="delete-button">
      Confirm Delete
    </button>

    <!-- Confirmation modal -->
    <div v-if="showModal" class="confirmation-modal">
      <p>Are you sure you want to delete the selected products?</p>
      <button @click="deleteSelectedProducts" class="confirm-delete">
        Yes, Delete
      </button>
      <button @click="hideConfirmationModal" class="cancel-delete">
        Cancel
      </button>
    </div>

    <!-- Display error and success messages as needed -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      products: [],
      selectedProducts: [],
      showModal: false,
    };
  },
  methods: {
    handleCheckboxChange() {
      // Logic to update selectedProducts array
    },
    showConfirmationModal() {
      this.showModal = true;
    },
    hideConfirmationModal() {
      this.showModal = false;
    },
    deleteSelectedProducts() {
      // Check if any product is selected
      if (this.selectedProducts.length === 0) {
        console.error("Please select at least one product to delete.");
        return;
      }

      // Make an HTTP request to delete the selected products using DELETE method
      axios
        .post("http://localhost:3001/deleteProducts", {
          productIds: this.selectedProducts,
        })
        .then((response) => {
          console.log("Products deleted successfully:", response.data);
          // Fetch the updated product list after deletion
          this.fetchData();
        })
        .catch((error) => {
          console.error(
            "Error deleting products:",
            error.response ? error.response.data : error.message
          );
          // Optionally, update the UI or show an error message
        })
        .finally(() => {
          this.showModal = false; // Close the modal after deletion
        });
    },
    // Move the data fetching logic here if needed
    fetchData() {
      axios
        .get("http://localhost:3001/products")
        .then((response) => {
          this.products = response.data;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
  },
  created() {
    // Fetch initial data when the component is created
    this.fetchData();
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

.product-list {
  margin-top: 20px;
}

.product-item {
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 10px;
}

.checkbox-container {
  margin-right: 10px;
}

.product-image {
  width: 100px; /* Adjust the size as needed */
  height: auto;
  margin-right: 15px;
}

.product-details {
  flex-grow: 1;
}

.product-price {
  font-weight: bold;
  color: #4caf50;
}

.delete-button {
  padding: 10px;
  background-color: #d9534f;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.confirmation-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  text-align: center;
}

.confirmation-modal p {
  margin-bottom: 20px;
}

.confirm-delete {
  padding: 10px;
  background-color: #d9534f;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
}

.cancel-delete {
  padding: 10px;
  background-color: #5bc0de;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
