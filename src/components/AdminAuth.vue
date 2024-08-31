<template>
    <div class="col-8 mx-auto shadow-sm card my-4 p-2">
       <div class="container mt-5">
    <form @submit.prevent="route.path === '/admin/register' ? register() : login()" action="">
        <div class="form-group" v-if="route.path === '/admin/register'">
            <label for="fullName">Full Name</label>
            <input type="text" class="form-control" id="full_Name" placeholder="Full Name" v-model="name">
        </div>
        <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" class="form-control" id="email" placeholder="name@example.com" v-model="email">
        </div>
        <div v-for="error in errors['email']" :key="error" class="form-group">
            <span class="text-danger text-sm">{{error}}</span>
        </div>
        <!-- login error -->
        <div class="form-group">
            <span class="text-danger text-sm">{{error}}</span>
        </div>
         <div class="form-group" v-if="route.path === 'admin/register'">
            <label for="role">Role</label>
            <input type="text" class="form-control" id="role" placeholder="role" v-model="role">
        </div>
        <div v-for="error in errors['role']" :key="error" class="form-group">
            <span class="text-danger text-sm">{{error}}</span>
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" placeholder="Password" v-model="password">
        </div>
        <div v-for="error in errors['password']" :key="error" class="form-group">
            <span class="text-danger text-sm">{{error}}</span>
        </div>
        <div class="mb-3 ms-auto"> 
            <button v-if="route.path === '/admin/register'" class="btn btn-primary mt-3" type="submit">Register</button>
            <button class="btn btn-primary mt-3" type="submit" v-else>Login</button>
        </div>
    </form>
    </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import {url} from '../data'
import { useRouter, useRoute } from 'vue-router';

const name = ref('');
const email = ref('');
const password = ref('');
const role = ref('');

const status = ref(null);
const router = useRouter();
const route = useRoute();
const errors = ref([]);
const error = ref('');

const message = ref(null);

// if(route.path === '/admin/register'){
//     console.log('yes');
// }else{
//     console.log('no');
    
// }

const register = () => {
    const adminDetails = {
        fullname: name.value,
        email: email.value, 
        password: password.value,
        role: role.value,
        
    };
    console.log(adminDetails);
    axios.post(`${url}admin/register`, adminDetails)
        .then(res => {
            if(res.data.status){
                router.push('/admin/login')
                status.value = res.data.status;
                
            }else{
                errors.value = res.data.errors;
                status.value = res.data.status;
                message.value = res.data.message;
            }
            
        })
}

const login = () => {
    const loginDetails = {email: email.value, password: password.value}
        axios.post(`${url}admin/login`, loginDetails).then(res => {
            if(res.data.status){
                localStorage.setItem('token', res.data.token)
                router.push('/admin/dashboard')
                // console.log(res.data.admin);
                
                // status.value = res.data.status;

            }else{
                error.value = res.data.error;
            }

        })
    }

</script>

<style>

</style>