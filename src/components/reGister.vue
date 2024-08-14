<template>
    <div class="col-8 mx-auto shadow-sm card my-4 p-2">
       <div class="container mt-5">
    <form @submit.prevent="register()" action="">
        <div class="form-group">
            <label for="fullName">Full Name</label>
            <input type="text" class="form-control" id="full_Name" placeholder="Full Name" v-model="fullname">
        </div>
        <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" class="form-control" id="email" placeholder="name@example.com" v-model="email">
        </div>
         <div class="form-group">
            <label for="email">Phone Number</label>
            <input type="number" class="form-control" id="phone_number" placeholder="+234-0000-0000" v-model="phone_number">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" placeholder="Password" v-model="password">
        </div>
        <button class="btn btn-primary mt-3" type="submit">Register</button>
    </form>
</div>

    </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const fullname = ref('');
const email = ref('');
const password = ref('');
const phone_number = ref('');


const register = () => {
    const user = {
        fullname: fullname.value,
        email: email.value,
        password: password.value,
        phone_number: phone_number.value,
    };
    axios.post('http://localhost:8000/api/register', user)
        .then(res => {
            console.log(res)
        })
        .catch(error => {
            console.log(error)
        })
}
</script>

<style>

</style>