import Vue from 'vue'
import VueRouter from 'vue-router'
import MovieView from '../views/MovieView.vue'
import VideoView from '../views/VideoView.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/movie',
    name: 'MovieView',
    component: MovieView
  },
  {
    path: '/Video',
    name: 'VideoView',
    component: VideoView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
