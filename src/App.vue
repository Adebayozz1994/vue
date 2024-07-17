<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import indexComponentVue from './components/optionApi.vue'
// import TheWelcome from './components/TheWelcome.vue'
// import indexComponent from './components/optionApi.vue'
// import componentApi from './components/componentApi.vue'
// import formCheck from './components/formCheck.vue'
// import computed from './components/computed.vue'
</script>
<template>
<router-view></router-view>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">
      <!-- <HelloWorld msg="You did it!" /> -->
    </div>
    <div>
       <indexComponentVue />
    </div>
  </header>

  <main>
    <!-- <TheWelcome /> --> 
     <componentApi />
     <formCheck />
     <computed />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
