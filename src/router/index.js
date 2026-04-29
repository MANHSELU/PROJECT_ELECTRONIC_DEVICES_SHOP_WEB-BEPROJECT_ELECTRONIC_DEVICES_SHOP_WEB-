import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/customer/Home.vue'
import AllProductPage from '../pages/customer/AllProductPage.vue'
import RegisterPage from '../pages/customer/RegisterPage.vue'
import LoginPage from '../pages/common/LoginPage.vue'
import ProfilePage from '../pages/customer/ProfilePage.vue'
import ProductDetailPage from '../pages/customer/ProductDetailPage.vue'
import CartPage from '../pages/customer/CartPage.vue'
import CheckoutPage from '../pages/customer/CheckoutPage.vue'

const routes = [
  {
    path: '/customer',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home,
      },
      {
        path: 'products',
        name: 'AllProductPage',
        component: AllProductPage,
      },
      {
        path: 'register',
        name: 'RegisterPage',
        component: RegisterPage,
      },
      {
        path: 'profile',
        name: 'ProfilePage',
        component: ProfilePage,
      },
      {
        path: 'product/:id',
        name: 'ProductDetailPage',
        component: ProductDetailPage,
      },
      {
        path: 'cart',
        name: 'CartPage',
        component: CartPage,
      },
      {
        path: 'checkout',
        name: 'CheckoutPage',
        component: CheckoutPage,
      },
    ],
  },
 {
    path: '/common',
    children: [
      {
        path: 'login',
        name: 'LoginPage',
        component: LoginPage,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
