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

</script>

<style>

</style>