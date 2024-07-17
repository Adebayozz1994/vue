import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import computed  from "../components/computed.vue";
import dashBoard from "../components/dashBoard.vue";
import formCheck from "../components/formCheck.vue";

const routes = [
    {path: "/", component: formCheck},
    {path: "/home", component: HelloWorld},
    {path: "/computed", component: computed},
    {path: "/dashboard", component: dashBoard},
  



]



export const router = createRouter({
    history: createWebHistory(),
    routes
})


