import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/main/MainView.vue'
import FindView from '@/views/find/FindView.vue'
import FoodStoreView from '@/views/foodstore/FoodStoreView.vue'
import TicketView from '@/views/ticket/TicketView.vue'
import PaymentCheckView from '@/views/payment/PaymentCheckView.vue'

const routes = [
  {
    path: '/',
    name: '/',
    component: MainView
  },
  {
    path: '/find/findform',
    name: '/find/findform',
    component: FindView
  },
  {
    path: '/foodstore/foodform',
    name: '/foodstore/foodform',
    component: FoodStoreView
  },
  {
    path: '/ticket/ticketform',
    name: '/ticket/ticketform',
    component: TicketView
  },
  
  {
    path: '/payment/paymentform',
    name: '/payment/paymentform',
    component: PaymentCheckView
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
