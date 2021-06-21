import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import KeranjangBelanja from '../views/KeranjangBelanja.vue'
import Success from '../views/Success.vue'
import Tentangkami from '../views/Tentangkami.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/product/:id',
    props: true,
    name: 'product',
    component: Product
  },
  {
    path: '/keranjang',
    name: 'keranjang',
    component: KeranjangBelanja
  },
  {
    path: '/success',
    name: 'success',
    component: Success
  },
  {
    path: '/tentangkami',
    name: 'tentangkami',
    component: Tentangkami
  },
  
]

const router = new VueRouter({
  routes
})

export default router
