// option API
<template>
    <div>
        <h1>hello, world.</h1>
        <p>{{username}}</p>
        <p>{{age}}</p>
        <p>{{msg}}</p>
        <p>{{username + ' ' + age}}</p>
    </div>
    <div v-for="(student, index) in students"  v-bind:key="student.id">
    <p>{{index + 1}} {{student.name}},  {{student.age}}</p>
  </div>
  <div>
    <button @click="score++">increase score</button>
    <p>{{score}}</p>
    <button @click="myFunction">Toggle name</button>
    <p>{{username}}</p>
  </div>
</template>



<script> 
export default {
    setup(){
     const name = 'adebayo';
     return{name}
    },
    data() {
        return {
            msg: 'hello, world.',
            username: 'adebayo',
            age: 30,
            students:[
         {id: 1, name: 'bayo', age: 20},
         {id: 2, name: 'ade', age: 10},
         {id: 3, name: 'adebayo', age: 29},
         {id: 3, name: 'ola', age: 18},
          ],
          score: 50
        }
    },
    methods: {
        myFunction(){
            this.username = 'oyin'
        }
    }
}
</script>