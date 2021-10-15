import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Home from "./components/HomePage/Page.vue"
import VideoPage from './components/VideoPage/Videos.vue'
import PhotoPage from './components/PhotoPage/Photos.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { name: "Home", path: "/", component: Home },
  { name: "videos", path: "/videos", component: VideoPage },
  { name: "photos",  path: "/photos", component: PhotoPage }
]

const router = new VueRouter({routes})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
