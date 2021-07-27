import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/auth',
        name: 'Home',
        component: () => import('../views/auth/auth-screen.vue')
      },
      {
        path: '/login',
        name: 'Login',
        component: () => import('../views/auth/Login.vue')
      },
      {
        path: '/register',
        name: 'Register',
        component: () => import('../views/auth/Register.vue')
      },
    ]
  },
  {
    path: '/states',
    name: 'States',
    component: () => import('../views/states.vue'),
  },
  {
    path: '/states/:lga',
    name: 'Lga',
    component: () => import('../views/lga.vue')
  },
  {
    path: '/search-filter',
    name: 'SearchFiler',
    component: () => import('../views/search-filter')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
