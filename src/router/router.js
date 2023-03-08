import { createRouter, createWebHistory } from 'vue-router'
import CounterPage from '@/views/CounterPage.vue'
import NotFound from '@/views/NotFound.vue'
import HomePage from '@/views/HomePage.vue'

const routes = [
    {
    path: '/',
    name: 'HomePage',
    component: HomePage
    }
    ,
  {
    path: '/counter',
    name: 'CounterPage',
    component: CounterPage
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router