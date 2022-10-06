import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/vm-home.vue'
import Profile from '../views/vm-profile-page.vue'
import Comparison from '../views/vm-comparison-page.vue'
import Marked from '../views/vm-marked-page.vue'
import Cart from '../views/vm-cart-page.vue'
import productPage from '../views/vm-product-page.vue'
import categoriesPhones from '../views/vm-categories/vm-categories-phones.vue'
import categoriesPCs from '../views/vm-categories/vm-categories-pcs.vue'
import categoriesHomeTech from '../views/vm-categories/vm-categories-home-tech.vue'
import categoriesGames from '../views/vm-categories/vm-categories-games.vue'
import categoriesTVs from '../views/vm-categories/vm-categories-tvs.vue'
import categoriesPhotos from '../views/vm-categories/vm-categories-photos.vue'
import categoriesKitchenTech from '../views/vm-categories/vm-categories-kitchen-tech.vue'
import categoriesBeauty from '../views/vm-categories/vm-categories-beauty.vue'
import notFoundPage from '@/components/v-not-found-page.vue'

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
  },
  {
    path: '/categoria/Phones',
    component: categoriesPhones
  },
  {
    path: '/categoria/PCs',
    component: categoriesPCs
  },
  {
    path: '/categoria/HomeTech',
    component: categoriesHomeTech
  },
  {
    path: '/categoria/Games',
    component: categoriesGames
  },
  {
    path: '/categoria/TVs',
    component: categoriesTVs
  },
  {
    path: '/categoria/Photos',
    component: categoriesPhotos
  },
  {
    path: '/categoria/KitchenTech',
    component: categoriesKitchenTech
  },
  {
    path: '/categoria/Beauty',
    component: categoriesBeauty
  }, 
  {
    path: '/not-found-page',
    component: notFoundPage
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
