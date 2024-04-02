import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/main/MainView.vue'
import FindView from '@/views/find/FindView.vue'
import FoodStoreView from '@/views/foodstore/FoodStoreView.vue'
import TicketView from '@/views/ticket/TicketView.vue'
import PaymentCheckView from '@/views/payment/PaymentCheckView.vue'
import MoviePosterView from '@/views/ticket/MoviePosterView.vue'
import SlideView from '@/views/slide/SlideView.vue'
import PointUse from '@/views/Point/PointUse.vue'

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
    name: 'PaymentCheckView',
    component: PaymentCheckView
  },
  {
    path: '/ticket/poster',
    name: '/ticket/poster',
    component: MoviePosterView
  },
  {
    path: '/SlideView',
    name: '/slideView',
    component: SlideView
  },
  {
    path: '/pointuse',
    name: '/PointUse',
    component: PointUse
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
