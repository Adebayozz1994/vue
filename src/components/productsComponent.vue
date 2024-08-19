<template>
  <h4>products</h4>
  <div class="card" style="width: 18rem;">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRyphKRFsyb8Ym5RNx0zNCS5UUvkXdF3_KYA&s" alt="" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">Coke 75cl</h5>
      <p class="card-text">chill and refreshing</p>
      <p class="card-text">price: 1.5$</p>
      <!-- <router-link to="/products/3/coke" class="btn btn-primary">see more</router-link> -->
      <router-link :to="{name : 'Products', params: {id: 3, name: 'coke'}}">View product</router-link>
    </div>
  </div>
</template>

<script setup>
import {computed} from 'vue';

  const products = [
        {id:1, name:'product1', price:100,available:true},
        {id:2, name:'product2', price:200, available:false},
        {id:3, name:'product3', price:300, available:true},
        {id:4, name:'product4', price:400, available:true},
        {id:5, name:'product5', price:500, available:false},
    ];

    const availableItems = computed(()=>{
      return products.filter((product)=> !product.available)
    })
    console.log(availableItems.value)
</script>

<style>

</style>