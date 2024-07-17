<template>
     
  <div>
    <h1>Hello, welcome to vue 3.</h1>
  </div>
  <div>
    <p>{{name}}</p>
  </div>
  
 <!-- data-binding - one way binding -->
  <div v-for="(student, index) in students"  v-bind:key="student.id">
    <p>{{index + 1}} {{student.name}},  {{student.age}}</p>
  </div>
  <!-- conditional-statement -->
  <div>
  <p v-if="day == 'thursday'">Today is thursday</p> 
  <p v-else-if="day ==='friday'">Today is friday</p>
  <p v-else>Today is not thursday</p>
  </div>
  <!-- v-show -->
  <p v-show="day === 'thursday'">Today is thursday</p>

  <!-- functions and event -->
  <button v-on:click="age++">increase age</button>
  <p>Age- {{age}}</p>
  <button @click="myFunction">Toggle name</button>
  <!-- 2 way binding -->
  <input type="text" class="form-control" v-model="userInput"/>
  <p>{{userInput}}</p>
  <!-- radio -->
  <input type="radio" class="form-control" v-model="skill" value="vue 3">
  <label for="">Vue 3</label>
  <input type="radio" class="form-control" v-model="skill" value="Angular">
  <label for="">Angular</label>
  <input type="radio" class="form-control" v-model="skill" value="Laravel 10">
  <label for="">Laravel 10</label>
  <p v-if="skill">Selected skill - {{skill}}</p>

  <!-- checkbox -->
   <input type="checkbox" class="form-control" v-model="terms" value="vue 3">
  <label for="">I agree to the terms and condition</label>
  <button class="btn btn-primary" :disabled="!terms">Sign up</button>

  <!-- Select tags -->
  <select name="" id="" v-model="education" class="form-control">
    <option value="">Select a skill</option>
    <option value="vue 3">Vue 3</option>
    <option value="angular">Angular</option>
    <option value="laravel 10">Laravel 10</option>
  </select>

  <p v-if="education">{{education}}</p>
 
  
</template>

<script setup>
import {ref} from 'vue'
const name = ref('adebayo');
let num = 29;
var school = 'university';

// loop-redering
const students =[
  {id: 1, name: 'bayo', age: 20},
  {id: 2, name: 'ade', age: 10},
  {id: 3, name: 'adebayo', age: 29},
  {id: 3, name: 'ola', age: 18},

]
const day = 'thursday';
const age = ref(1)
const myFunction = () =>{
    name.value = "opeyemi"
}

defineProps({
  msg: {
    type: String,
    required: true
  }
})

const userInput = ref('')
const skill = ref('')
const terms = ref(false)
const education = ref('')

</script>
