import { VueElement } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Posts from '../views/Posts.vue'
import Publisher from '../views/Publisher'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/series/:id',
    name: 'posts',
    component: Posts
  },
  {
    path: '/:id',
    name: 'publisher',
    component: Publisher
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
