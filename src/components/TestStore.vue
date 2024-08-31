<template>
  <h1>adebayo</h1>
  <div v-for="product in products" :key="product.id" class="row d-md-flex align-items-center justify-content-center">
    <div class="card col-3">
        <div class="card-body">
            <p class="">{{ product.id }}</p>
            <p class="lead fw-bold">{{ product.name }}</p>
            <span class="lead fw-bold">{{ product.price }}</span>
        </div>
    </div>
  </div>
        <div>username - {{store.user}}</div>
  <input type="text" v-model="username" class="form-control">
<button class="btn btn-primary" @click="store.updateUser">update</button>
</template>

<script setup>
import {useMyStore} from '../stores/Mystore';
import { onMounted, ref } from 'vue';
// import {computed} from 'vue';

//


const store = useMyStore();
// console.log(store.user);
const products = store.products;
console.log(store.products);
const username = ref('');

// const updateUser = () => {
//     store.user = username.value;
//     // store.user.email = 'adebayo@gmail.com';
// }

onMounted(()=>{
  store.getProducts();
  console.log(store.allProducts)
})

import {computed} from 'vue';

  const productss = [
        {id:1, name:'product1', price:100,available:true},
        {id:2, name:'product2', price:200, available:false},
        {id:3, name:'product3', price:300, available:true},
        {id:4, name:'product4', price:400, available:true},
        {id:5, name:'product5', price:500, available:false},
    ];

    const availableItems = computed(()=>{
      return productss.filter((product)=> !product.available)
    })
    console.log(availableItems.value)

</script>

<style>

</style>