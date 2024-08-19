import { axios } from 'axios';
import {defineStore} from 'pinia';
import { ref } from 'vue';

// export const useMyStore = defineStore('store', {    //option api
    
// })

export const useMyStore = defineStore('store', () => {    //composition api
    const user = ref('Adebayozz');

    const count = ref(5)
    const allProducts = ref([])
    const products = [
        {id:1, name:'product1', price:100},
        {id:2, name:'product2', price:200},
        {id:3, name:'product3', price:300},
        {id:4, name:'product4', price:400},
        {id:5, name:'product5', price:500},
    ]

    // const doubleCount = computed(()=>{
    //     return count.value *2;
    // })

    // const findProduct = computed(()=>{
    //     return products.find((product)=> product.id == 2)
    // })
    const updateUser = ()=>{
        user.value = 'sola';
    
    }

    const getProducts = () =>{
        axios.get('http:localhost:8000/api/getProcts').then(res=>{
            allProducts.value = res.data.products;
        })
    }

    return{user, products,count, updateUser,getProducts, allProducts}
});