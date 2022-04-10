import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import WebDevelopmentPage from '../views/WebDevelopmentPage.vue'
import PhotographyPage from '../views/PhotographyPage.vue'
import ContactPage from '../views/ContactPage.vue'

const routes = [
  {
    path: '/',
    name: 'home-page',
    component: HomePage
  },
  {
    path: '/about',
    name: 'about-page',
    component: AboutPage
  },
  {
    path: '/web-development',
    name: 'web-development-page',
    component: WebDevelopmentPage
  },
  {
    path: '/photography',
    name: 'photography-page',
    component: PhotographyPage
  },
  {
    path: '/contact',
    name: 'contact-page',
    component: ContactPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
