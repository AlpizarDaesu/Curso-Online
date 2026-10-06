import { createRouter, createWebHistory } from 'vue-router'

import Cursos from '../components/cursos.vue'
import Inscribirse from '../components/inscribirse.vue'
import OfertaBeca from '../components/ofertaBeca.vue'
import Us from '../components/us.vue'
import CursGrat from '../components/cursGrat.vue'
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
    { path: '/ofertaBeca', component: OfertaBeca },
    { path: '/us', component: Us },
    { path: '/cursGrat', component: CursGrat }
  ]
})

export default router
