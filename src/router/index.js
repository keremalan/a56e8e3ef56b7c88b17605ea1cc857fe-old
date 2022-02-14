import { createRouter, createWebHistory } from 'vue-router'
import ReservationView from '../views/ReservationView.vue'
import ReservationStep2 from '../views/ReservationStep1.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/res',
      name: 'reservation',
      component: ReservationView
    },
    {
      path: '/reservationstep2',
      name: 'reservationstep2',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ReservationStep2
    }
  ]
})

export default router
