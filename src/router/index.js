import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

import About from '../views/AboutView.vue'
import Races from '../views/WikiRaces.vue'
import Classes from '../views/WikiClasses.vue'
import Builder from '../views/Builder.vue'
import Contact from '../views/ContactView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }, {
    path: '/races',
    name: 'races',
    component: Races
  },
  {
    path: '/classes',
    name: 'classes',
    component: Classes
  },
  {
    path: '/builder',
    name: 'builder',
    component: Builder
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
]

const router = new VueRouter({
  mode: "history",
  base: '/webjeje/',
  routes
})

export default router
