import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

import Tabs from '../views/Tabs.vue';
import HomePage from '../views/HomePage.vue';
import LoginPage from '../views/LoginPage.vue';
import RegisterPage from '../views/RegisterPage.vue';
import WelcomePage from '../views/WelcomePage.vue';
import TestPage from '../views/TestPage.vue';
import SearchPage from '@/views/SearchPage.vue';
import SellPage from '@/views/SellPage.vue';
import OrdersPage from '@/views/OrdersPage.vue';
import SavedPage from '@/views/SavedPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/welcome'
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: WelcomePage
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterPage
  },
  {
    path: '/test',
    name: 'Test',
    component: TestPage
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/home'
      },
      {
        path: 'home',
        component: HomePage
      },
      {
        path: 'search',
        component: SearchPage
      },
      {
        path: 'sell',
        component: SellPage
      },
      {
        path: 'orders',
        component: OrdersPage
      },
      {
        path: 'saved',
        component: SavedPage
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
