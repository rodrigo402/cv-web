import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },
    { path: '/about', component: () => import('@/views/AboutView.vue') },
    { path: '/experience', component: () => import('@/views/ExperienceView.vue') },
    { path: '/education', component: () => import('@/views/EducationView.vue') },
    { path: '/portfolio', component: () => import('@/views/PortfolioView.vue') },
    { path: '/contact', component: () => import('@/views/ContactView.vue') },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
