<template>
    <div v-for="item in items" :key="item.id">
        <div class="card p-2 mb-2 bg-light">
            <h5 class="card-title">{{item.name}}</h5>
            <p class="card-text">Quantity: {{item.Quantity}}</p>
              <div v-if="item.Quantity">
                <p :class="item.available ? 'text-success' : 'text-danger'">{{item.available ? 'Available' : 'Out of stock' }}</p>
            <button class="btn btn-md bg-info px-2" @click="orderNow(item.id)">Order Now</button>
            </div>
            <div v-else>
                <button class="btn btn-danger" disabled>Out of Stock</button>
            </div>
        </div>
    </div>

    <!-- all available items -->
    <div v-for="item in availableItems" :key="item.id">
        <p class="lead fw-bold">availableItems</p>
        <div class="card p-2 w-50 mx-auto">
            <p>{{item.name}}</p>
            <p>Quantity-{{item.Quantity}}</p>
            <p>{{item.Quantity==0 ? 'Out of stock' : 'Available' }}</p>
        </div>
    </div>
</template>


<script setup>
import { computed, ref } from 'vue'

const items = ref([
{id: 1, name: 'T-shirt', Quantity: 30, available: true},
 {id: 2, name: 'Jeans', Quantity: 20, available: true},
 {id: 3, name: 'Shoes', Quantity: 10, available: false},
 {id: 4, name: 'Hat', Quantity: 5, available: true},
 {id: 5, name: 'Socks', Quantity: 50, available: true},
]);

const availableItems = computed(() =>{
    return items.value.filter((item )=> item.available);
})
// they act like variable and modify the value of the variable
// const availableItems = computed(() =>{
//     return items.filter(item => item.available)
// })

const orderNow = (itemId) =>{
    // console.log(itemId);
const clickedItem = items.value.find((item) => item.id == itemId)
    // clickedItem.Quantity = clickedItem.Quantity - 1;
    if(clickedItem.Quantity !==0){
        clickedItem.Quantity = clickedItem.Quantity - 1;
    }else{
        clickedItem.available = false;
    }

// if(clickedItem.Quantity > 0){
//     clickedItem.Quantity = clickedItem.Quantity - 1;
//     clickedItem.available = clickedItem.Quantity > 0;
// }else{
    
// }

console.log(clickedItem);
}
</script>


