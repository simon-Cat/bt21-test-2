import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import MainPage from './MainPage.vue'
import About from './About.vue'

const routes = [
  {
    path: '/',
    component: MainPage
  },
  {
    path: '/about',
    component: About
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App);

app.use(router)
app.mount('#app')
