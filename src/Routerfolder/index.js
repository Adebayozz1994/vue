import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import computed  from "../components/computed.vue";
import dashBoard from "../components/dashBoard.vue";
import formCheck from "../components/formCheck.vue";
import productComponent from "../components/productComponent.vue";
import landingPage from "../components/Amazon/landingPage.vue";
import carousel from "../components/Amazon/imageCarousel.vue";
import commerse from "../components/E-commerse/landingPage.vue";
import ProductDetails from "../components/E-commerse/productDetails.vue";
import animation from "../components/E-commerse/aniMation.vue";
import image from "../components/E-commerse/imAge.vue";
import carousell from "../components/E-commerse/carouSel.vue";
import threed from "../components/E-commerse/threeD.vue";
import accessories from "../components/Amazon/acceSsories.vue";
import productsComponent from "../components/productsComponent.vue";
import pageNotfound from "../components/pageNotfound.vue";
import register from "../components/reGister.vue";
import store from "../components/TestStore.vue";

const routes = [
    //E-commerse site route
    {path: "/commerse", component: commerse},
    {path: "/animation", component: animation},
    {path: "/image", component: image},
    {path: "/carousel", component: carousell},
    {path: "/threed", component: threed},



    // { path: '/product/:id', name: 'ProductDetails', component: ProductDetails, props: true },
    // {path: "/computed", component: computed},
    // {path: "/dashboard", component: dashBoard},
    // {path: "/product", component: productComponent},
        // Routes names, navigation guards, lifecycle use cases
    {path: "/amazon", component: landingPage},
    {path: "/carousel", component: carousel},
    {path: "/accessories", component: accessories},

    
    {path: "/", component: formCheck},
    // {path: "/home", component: HelloWorld},
    {path: "/computed", component: computed},
    {path: "/dashboard", component: dashBoard},
    {path: "/register", component: register},
    {path: "/store", component: store},


    {path: "/products", component: productsComponent, name: "products"},
    {path: "/products/:id/:name", component: productComponent, name: 'Products'}, //parameterized routes
    // {path: "/Home", redirect: "/home"},
    // {path: "/:catchall(.*)", component: HelloWorld}, //wildcards or page not found
    {path: "/:pathMatch(.*)*", component: pageNotfound}, //wildcards or page not found

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


