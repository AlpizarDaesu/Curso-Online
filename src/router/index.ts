import { createRouter, createWebHistory } from 'vue-router'

import Inscribirse from '../components/inscribirse.vue'
import MiniJuego from '../components/MiniJuego.vue'
import Us from '../components/us.vue'
import ChatView from '../views/chatview.vue'
import Inicio from '../components/lobby.vue'
import Tienda from '../components/tienda.vue'
import Carrito from '../components/carrito.vue'
import CalendarioView from '../views/calendarioview.vue'
import GraciasView from '../views/graciasview.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/lobby' },
    { path: '/lobby', component: Inicio },
    { path: '/inscribirse', component: Inscribirse },
    { path: '/MiniJuego', component: MiniJuego },
    { path: '/us', component: Us },
    { path: '/chatview', component: ChatView },
    { path: '/tienda', component: Tienda },
    { path: '/carrito', component: Carrito },
    { path: '/gracias', component: GraciasView },
    {
      path: '/calendario',
      component: CalendarioView,
      meta: { requiresUserRole: true }
    },
  ]
})

router.beforeEach((to) => {
  if (!to.meta.requiresUserRole) return true

  const storedUser = localStorage.getItem('usuarioActivo')
  if (!storedUser) return '/inscribirse'

  try {
    const user = JSON.parse(storedUser) as { rol?: string }
    return user.rol === 'Usuario' ? true : '/lobby'
  } catch {
    localStorage.removeItem('usuarioActivo')
    return '/inscribirse'
  }
})

export default router
