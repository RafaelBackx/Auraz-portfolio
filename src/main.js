import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VModal from 'vue-js-modal'

import Home from "./components/HomePage/Page.vue"
import PhotoPage from './components/PhotoPage/Photos.vue'

Vue.use(VueRouter)
Vue.use(VModal)
Vue.config.productionTip = false

const routes = [
  { name: "Home", path: "/", component: Home },
  { name: "photos",  path: "/photos", component: PhotoPage }
]

const router = new VueRouter({routes})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
