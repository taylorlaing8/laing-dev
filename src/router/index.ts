import store from '../store'
import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import PageNotFound from '@/views/PageNotFound.vue'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import WebDevelopmentView from '@/views/WebDevelopmentView.vue'
import PhotographyView from '@/views/PhotographyView.vue'
import ContactView from '@/views/ContactView.vue'
import AdminNav from '@/views/admin/navigation/AdminNav.vue'

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
	{
		path: '/login',
		name: 'login',
		component: LoginView,
	},
	{
		path: '/about',
		name: 'about',
		component: AboutView,
	},
	{
		path: '/web-development',
		name: 'web-development',
		component: WebDevelopmentView,
	},
	{
		path: '/photography',
		name: 'photography',
		component: PhotographyView,
	},
	{
		path: '/contact',
		name: 'contact',
		component: ContactView,
	},
	{
		path: '/admin',
		component: AdminNav,
		name: 'admin-view',
		redirect: '/admin/dashboard/home',
	},
	{
		path: '/admin/:navItem/:navSubItem',
		name: 'admin',
		component: AdminNav,
		beforeEnter: [ verifyAuthorization ]
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'PageNotFound',
		component: PageNotFound,
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior(to, from, savedPosition) {
		return {
			top: 0,
			behavior: 'smooth',
		}
	},
})

function verifyAuthorization(to: any, from: any, next: any) {
	setTimeout(() => {
		store.dispatch('inspectToken')
	}, 1000)

	if (to.name !== 'login' && !store.state.jwt) {
		localStorage.setItem('route', to.fullPath)
		next({ name: 'login' })
	}
	else if (to.name !== 'login' && localStorage.getItem('route')) {
		localStorage.removeItem('route')
	}
	
	next()
}

// router.beforeEach((to, from, next) => {
	
// })

export default router
