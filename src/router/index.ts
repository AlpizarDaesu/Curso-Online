import { createRouter, createWebHistory } from 'vue-router'

import Cursos from '../components/cursos.vue'
import Inscribirse from '../components/inscribirse.vue'
import MiniJuego from '../components/MiniJuego.vue'
import Us from '../components/us.vue'
import ChatView from '../views/chatview.vue'
import Inicio from '../components/lobby.vue'
import TopCursos from '../components/topcursos.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/lobby' },
    { path: '/lobby', component: Inicio },
    { path: '/cursos', component: Cursos },
    { path: '/topcursos', component: TopCursos },
    { path: '/inscribirse', component: Inscribirse },
    { path: '/MiniJuego', component: MiniJuego },
    { path: '/us', component: Us },
    { path: '/chatview', component: ChatView },
  ]
})

export default router
