import Vue from 'vue'
import Router from 'vue-router'
import Eventos from '@/views/Eventos.vue'
import Ingressos from '@/views/Ingressos.vue'
import TiposIngressos from '@/views/TiposIngressos.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Eventos
    },
    {
      path: '/eventos',
      name: 'eventos',
      component: Eventos
    },
    {
      path: '/ingressos',
      name: 'ingressos',
      component: Ingressos
    },
    {
      path: '/tipos-ingressos',
      name: 'tiposIngressos',
      component: TiposIngressos
    }
  ]
})
