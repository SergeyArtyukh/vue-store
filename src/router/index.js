import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/vm-home.vue'
import Profile from '../views/vm-profile-page.vue'
import Comparison from '../views/vm-comparison-page.vue'
import Marked from '../views/vm-marked-page.vue'
import Cart from '../views/vm-cart-page.vue'
import productPage from '../views/vm-product-page.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile-page',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/comparison-page',
    name: 'Comparison',
    component: Comparison
  },
  {
    path: '/marked-page',
    name: 'Marked',
    component: Marked
  },
  {
    path: '/shopping-cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/product-page',
    name: 'productPage',
    component: productPage
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
