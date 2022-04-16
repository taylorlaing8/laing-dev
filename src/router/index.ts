import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import WebDevelopmentView from '../views/WebDevelopmentView.vue'
import PhotographyView from '../views/PhotographyView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/about',
    name: 'AboutView',
    component: AboutView
  },
  {
    path: '/web-development',
    name: 'WebDevelopmentView',
    component: WebDevelopmentView
  },
  {
    path: '/photography',
    name: 'PhotographyView',
    component: PhotographyView
  },
  {
    path: '/contact',
    name: 'ContactView',
    component: ContactView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
