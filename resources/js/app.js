import './bootstrap';
import '../css/app.css'
import { createApp } from 'vue';
import App from './App.vue'
import VueAxios from 'vue-axios';
import { createRouter, createWebHistory } from 'vue-router';
import axios from 'axios';
import { routes } from './routes';

const app = createApp(App);

const router = createRouter({
    history: createWebHistory(),
    routes
});

app.use(router)
app.use(VueAxios, axios);

app.mount('#app');
