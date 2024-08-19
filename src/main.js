import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import {router} from './Routerfolder/index.js'
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const pinia = createPinia(); // createPinia() creates a new Pinia instance

createApp(App).use(router).use(pinia).mount('#app')
