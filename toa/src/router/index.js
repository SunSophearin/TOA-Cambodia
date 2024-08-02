import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Products from '../components/Products.vue'
import ProductsDetail from '../components/ProductsDetail.vue'
import Disributor from '../components/Disributor.vue'
import Videos from '../components/Video.vue'
import About from '../components/About.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/en/products',
      name: 'products',
      component: Products
    },
    {
      path: '/en/products/:mid',
      name: 'products2',
      component: Products
    },
    {
      path: '/en/products/detail/:nid',
      name: 'detail',
      component: ProductsDetail
    },
    {
      path: '/en/disributor',
      name: 'disributor',
      component: Disributor
    },
    {
      path: '/en/videos',
      name: 'videos',
      component: Videos
    },
    {
      path: '/en/Aboutus',
      name: 'about',
      component: About
    },
    
  ]
})

export default router
