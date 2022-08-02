import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OpinionesView from '../views/OpinionesView.vue'
import AdministracionView from '../views/AdministracionView.vue'
import EdicionView from '../views/EdicionView.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/opiniones',
    name: 'opiniones',
    component: OpinionesView
  },
  {
    path: '/administracion',
    name: 'administracion',
    component: AdministracionView
  },
  {
    path: '/edicion/:id',
    name: 'edicion',
    component: EdicionView
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
  // {
  //   path: '/opiniones',
  //   name: 'opiniones',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
