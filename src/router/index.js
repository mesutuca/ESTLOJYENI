import {createRouter, createWebHistory, RouterView} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserSettings from "@/views/settings/UserSettings.vue";
import UserEmailsSubscriptions from "@/views/settings/UserEmailsSubscriptions.vue";
import UserProfile from "@/views/settings/UserProfile.vue";
import UserProfilePreview from "@/views/settings/UserProfilePreview.vue";
import Account from "@/views/Account.vue";
import AccountLayout from "@/views/Account/AccountLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      alias: "/home"
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
      path: '/settings',
      // You could also have named views at tho top
      component: UserSettings,
      children: [
        {
          path: 'emails',
          component: UserEmailsSubscriptions,
        },
        {
          path: 'profile',
          components: {
            default: UserProfile,
            helper: UserProfilePreview,
          },
        },
      ],
    },
    {
      path: '/hesabim',
      name: 'hesabim',
      component: () => import('../views/Account.vue'),
      children: [
        {
          name: 'uyelik',
          path: 'uyelik',
          redirect: '/uyelik-bilgilerim',
          children: [
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
          ]
        },
        {
          name: 'sepet',
          path: 'sepetim',
          redirect: '/siparislerim',
          children: [
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
