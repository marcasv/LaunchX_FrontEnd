import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/adornos',
    name: 'adornos',
    component: () => import(/* webpackChunkName: "about" */ '../views/AdornosView.vue')
  },
  {
    path: '/pedido',
    name: 'pedido',
    component: () => import(/* webpackChunkName: "about" */ '../views/PedidoView.vue')
  },
  {
    path: '/contactanos',
    name: 'contactanos',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/inventario',
    name: 'inventario',
    component: () => import(/* webpackChunkName: "about" */ '../views/InventarioView.vue')
  },
  {
    path: '/pedidos',
    name: 'pedidos',
    component: () => import(/* webpackChunkName: "about" */ '../views/PedidosView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router