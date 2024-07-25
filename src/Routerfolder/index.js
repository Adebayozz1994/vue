import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import computed  from "../components/computed.vue";
import dashBoard from "../components/dashBoard.vue";
import formCheck from "../components/formCheck.vue";
import productComponent from "../components/productComponent.vue";
import landingPage from "../components/Amazon/landingPage.vue";
import carousel from "../components/Amazon/imageCarousel.vue";

const routes = [
        // Routes names, navigation guards, lifecycle use cases
    {path: "/amazon", component: landingPage},
    {path: "/carousel", component: carousel},
    
    {path: "/", component: formCheck},
    // {path: "/home", component: HelloWorld},
    {path: "/computed", component: computed},
    {path: "/dashboard", component: dashBoard},
    {path: "/products/:id", component: productComponent}, //parameterized routes
    // {path: "/Home", redirect: "/home"},
    {path: "/:catchall(.*)", component: HelloWorld}, //wildcards or page not found
     //Nested routes
    {path: "/comp", children: [
            {path: "hello", component: HelloWorld},
            {path: "computed", component: computed}
    ]},
    
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})


