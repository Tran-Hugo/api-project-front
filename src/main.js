import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
axios.defaults.withCredentials = true;

createApp(App).use(store).use(router).use(bootstrap).mount('#app')
