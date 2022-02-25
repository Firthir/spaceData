import Vue from 'vue'
import VueRouter from 'vue-router'
import SpaceView from '../views/SpaceView.vue'
import ArchiveView from '../views/ArchiveView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'space-view',
    component: SpaceView
  },
  {
    path: '/archive',
    name: 'archive-view',
    component: ArchiveView
  }
]

const router = new VueRouter({
  routes
})

export default router
