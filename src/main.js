import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import Vue3Toastify from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
const app=createApp(App)
app.use(Vue3Toastify, {
  autoClose: 3000,
});
app.use(createPinia())
app.mount('#app')
