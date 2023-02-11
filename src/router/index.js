import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/giris',
      name: 'giris',
      component: () => import('../views/GirisView.vue')
    },
    {
      path: '/kayit',
      name: 'kayit',
      component: () => import('../views/KayitView.vue')
    },
    {
      path: '/sifremi-unuttum',
      name: 'sifremi-unuttum',
      component: () => import('../views/Sifremi-unuttum.vue')
    },
    {
      path: '/hesabim',
      name: 'hesabim',
      component: () => import('../views/Account.vue')
    },
    {
      path: '/iletisim',
      name: 'iletisim',
      component: () => import('../views/Contact.vue')
    }
  ]
})

export default router
