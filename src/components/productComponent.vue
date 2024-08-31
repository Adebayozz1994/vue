<template>
    <h1>Display Product</h1>
    <h2>Product ID: {{route.params.id}}</h2>
    <p>Name : {{route.params.name}}</p>
    <!-- {{$route.params.id}} - Option API -->

    <div>
        <h1>markets</h1>
        <a href="">shop here</a>
    </div>

    <input type="checkbox" v-model="terms">
    <label for="terms">Accept Terms and Conditions</label>
   
   <div v-if="showTerms">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni obcaecati culpa labore accusamus vel, eos autem asperiores esse iure ad!</div>


   <div class="card mx-auto my-auto col-6 shadow-sm" v-if="userLeave">
    <p>are you sure you want to leave this page?</p>
    <div class="d-flex me-auto">
        <button class="btn btn-primary mx-2">No</button>
        <button class="btn btn-danger mx-2">Yes</button>
    </div>
   </div>
</template>

<script setup>
        // import { onBeforeMount, onBeforeUnmount, onMounted, onUnmounted, onUpdated, ref } from 'vue'
        // import {onBeforeRouteLeave, useRoute} from 'vue-router'
        // const route = useRoute()
        // const terms = ref(false)
        // const showTerms = ref(false)
        // const userLeave = ref(false)
        // console.log(route.params.id)

        // onBeforeMount(() =>{  //lifecycle hook
        //     axios.get('https://localhost:8000/api/getProducts',{id: route.para}).then((result) =>{
        //         console.log(result);
        //         }) 
        // })

        // onBeforeMount(() =>{
        //     if(terms.value){
        //         showTerms.value = true
        //     } else{
        //         showTerms.value = false
        //     }
        //     console.log('Updated')
        // })

        // onBeforeUnmount(() =>{
        //     userLeave.value = true
        //     console.log('unMonted');
        // })
</script>
