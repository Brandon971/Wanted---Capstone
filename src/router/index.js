import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/contact',
    name:'contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path:'/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/register',
    name:'register',
    component: () => import('../views/RegisterView.vue')
  },
  {
    path:'/admin',
    name:'admin',
    component: () => import('../views/AdminView.vue')
  },
  {
    path: '/products',
    name:'product',
    component: () => import('../views/ProductsView.vue')
  },
  {
    path:'/singleProduct/:id',
    name:'singleProduct',
    component: () => import(/* webpackChunkName: "singleProduct" */ '../views/SingleProductView.vue')
  },
  {
    path:'/userProfile',
    name:'Profile',
    component: () => import('../views/UserProfileView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
