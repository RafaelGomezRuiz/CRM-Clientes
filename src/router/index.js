import { createRouter, createWebHistory } from 'vue-router'
import ClientesView from '../views/ClientesView.vue';

const routes = [
  { path: '/',
    name: 'listado-clientes',
    component: ClientesView,
    props: {titulo:'Listado de clientes'}
  },
  { path: '/agregar-cliente',
    name:'agregar-cliente',
    component: import('../views/NuevoClienteView.vue'),
    props: {titulo:' Agregar clientes'}
  },
  { path: '/editar-cliente/:id',
    name:'editar-cliente',
    component: import('../views/EditarClienteView.vue'),
    props: {titulo:' editar clientes'}
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
