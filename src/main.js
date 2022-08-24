import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './router'
import store from './store/store.js'

import { faBars, faSearch, faUserCircle, faGripLinesVertical, faHeart, faShoppingCart, faPhone, faAngleDown, faArrowLeft, faArrowRight, faTimes, faTrashCan, faCircleCheck, faSliders, faComments } from '@fortawesome/free-solid-svg-icons'

library.add(faBars, faSearch, faUserCircle, faGripLinesVertical, faHeart, faShoppingCart, faPhone, faAngleDown, faArrowLeft, faArrowRight, faTimes, faTrashCan, faCircleCheck, faSliders, faComments)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
