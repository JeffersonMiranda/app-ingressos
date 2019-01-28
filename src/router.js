import Vue from 'vue'
import Router from 'vue-router'
import Eventos from '@/views/Eventos.vue'
import Ingressos from '@/views/Ingressos.vue'

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
      path: '/ingressos/',
      name: 'ingressos',
      component: Ingressos,
    },
    {
      path: '/ingressos/:id_evento',
      name: 'ingressos_com_evento',
      component: Ingressos,
      props: true     
    }
  ]
})
