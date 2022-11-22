import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Article1 from '@/components/Article1.vue'
import Article2 from '@/components/Article2.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import(/* webpackChunkName: "about" */ '../views/SignUpView.vue')
  },
  {
    path: '/article2',
    name: 'article2',
    component: Article2
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
