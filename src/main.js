import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './module'
import './assets/css/style.css'


import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

//import BootstrapVue from 'bootstrap-vue'
//import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap-vue/dist/bootstrap-vue.css'

import axios from 'axios'
import VueAxios from 'vue-axios'

// Agregamos la URL base de nuestra API
axios.defaults.baseURL = 'https://texxt.tk/api/';

createApp(App).use(store).use(router).use(VueSweetalert2).use(VueAxios, axios).mount('#app')
