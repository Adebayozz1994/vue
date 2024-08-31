<template>
    <div class="col-md-6 mx-auto shadow-sm card my-4 p-4">
      <form @submit.prevent="uploadProduct">
        <div class="mx-auto" v-if="status !== null">
            <span v-if="status" class="alert alert-success">{{ message }}</span>
            <span v-else class="alert alert-danger">{{ message }}</span>
        </div>
        <!-- Product Name -->
        <div class="mb-3">
          <label for="product_name" class="form-label">Product Name</label>
          <input type="text" id="product_name" class="form-control" v-model="product_name" placeholder="Enter product name">
        </div>
  
        <!-- Product Price -->
        <div class="mb-3">
          <label for="product_price" class="form-label">Product Price</label>
          <input type="number" id="product_price" class="form-control" v-model="price" placeholder="Enter product price">
        </div>
  
        <!-- Product Description -->
        <div class="mb-3">
          <label for="product_description" class="form-label">Product Description</label>
          <textarea id="product_description" class="form-control" rows="3" v-model="description" placeholder="Enter product description"></textarea>
        </div>
  
        <!-- Product Category -->
        <div class="mb-3">
          <label for="product_category" class="form-label">Product Category</label>
          <select type="text" id="product_category" class="form-control" v-model="category" placeholder="Enter product category">
            <option value="Electronics">Electronics</option>
            <option value="Furniture">Furniture</option>
            <option value="Clothing">Clothing</option>
            <option value="Books">Books</option>
            <option value="Sports">Sports</option>
            <option value="Toys">Toys</option>
            <option value="Health & Beauty">Health & Beauty</option>
            <option value="Groceries">Groceries</option>
            <option value="Home & Kitchen">Home & Kitchen</option>
          </select>
        </div>
  
        <!-- Quantity -->
        <div class="mb-3">
          <label for="product_quantity" class="form-label">Quantity</label>
          <input type="number" id="product_quantity" class="form-control" v-model="quantity" placeholder="Enter quantity">
        </div>
  
        <!-- Product Image -->
        <div class="mb-3">
          <label for="product_image" class="form-label">Product Image</label>
          <input type="file" id="product_image" class="form-control" @change="uploadImage">
        </div>
  
        <!-- Submit Button -->
        <div class="d-grid">
          <button type="submit" class="btn btn-primary">Add Product</button>
        </div>
      </form>
    </div>
  </template>
  

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import {url} from '@/data';


const product_name = ref('');
const category = ref('');
const description = ref('');
const quantity = ref('');
const price = ref('');
const image = ref('');
const message = ref('');
const status = ref(null);
const errors = ref('')



const uploadImage = ($event) => {
    image.value = $event.target.files[0];
    console.log(image.value);
    
}
const uploadProduct = () => {
    const formData = new FormData();
    formData.append('product_name', product_name.value);
    formData.append('category', category.value);
    formData.append('description', description.value);
    formData.append('quantity', quantity.value);
    formData.append('price', price.value);
    formData.append('image', image.value);

    axios.post(`${url}products`, formData).then((res) => {
        // console.log(res.data);
        status.value = res.data.status;
        message.value = res.data.message;
        if(res.data.status){
           message.value = res.data.message;
        }else{
            errors.value = res.data.errors;
            message.value = res.data.message;
        }
       
});
}
</script>

    



<style>

</style>