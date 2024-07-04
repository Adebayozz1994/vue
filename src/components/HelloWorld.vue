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
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
    <h1>Hello, welcome to vue 3.</h1>
  <div>
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
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
