import {createRouter, createWebHistory, RouterView} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserSettings from "@/views/settings/UserSettings.vue";
import UserEmailsSubscriptions from "@/views/settings/UserEmailsSubscriptions.vue";
import UserProfile from "@/views/settings/UserProfile.vue";
import UserProfilePreview from "@/views/settings/UserProfilePreview.vue";
import Account from "@/views/Account.vue";
import AccountLayout from "@/views/Account/AccountLayout.vue";
import Nestedpage from "@/views/Nestedpage.vue";
import iban from "@/views/Account/iban.vue";
import hesabim from "@/views/hesabim.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
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
      component: Nestedpage,
      children: [
        {
          path: '',
          name: 'uyelik',
          component: hesabim,
        },
        {
          path: 'uyelik-bilgilerim',
          name: 'uyelik-bilgilerim',
          component: () => import('../views/Account/uyelik-bilgilerim.vue')
        },
        {
          path: 'sifre-degisikligi',
          name: 'sifre-degisikligi',
          component: () => import('../views/Account/sifre-degisikligi.vue')
        },
        {
          path: 'iletisim-tercihlerim',
          name: 'iletisim-tercihlerim',
          component: () => import('../views/Account/iletisim-tercihlerim.vue')
        },
        {
          path: 'kayitli-kartlarim',
          name: 'kayitli-kartlarim',
          component: () => import('../views/Account/kayitli-kartlarim.vue')
        },
        {
          path: 'iban',
          name: 'iban',
          component: () => import('../views/Account/iban.vue')
        },
        {
          path: 'adreslerim',
          name: 'adreslerim',
          component: () => import('../views/Account/adreslerim.vue')
        },
        {
          path: 'siparislerim',
          name: 'siparislerim',
          component: () => import('../views/Account/siparislerim.vue')
        },
        {
          path: 'iade-ve-iptal-taleplerim',
          name: 'iade-ve-iptal-taleplerim',
          component: () => import('../views/Account/iade-ve-iptal.vue')
        }
      ]
    },
    {
      path: '/iletisim',
      name: 'iletisim',
      component: () => import('../views/Contact.vue'),
    }
  ]
})

export default router
