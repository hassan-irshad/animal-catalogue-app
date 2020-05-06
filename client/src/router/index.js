import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CreateAnimal from '../views/CreateAnimal.vue'
import Login from '../views/Login.vue'
import Callback from '../views/Callback.vue'
import { authGuard } from '../auth/auth-guard'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: authGuard
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/create-animal',
    name: 'CreateAnimal',
    component: CreateAnimal
  },
  {
    path: '/callback',
    name: 'Callback',
    component: Callback
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
