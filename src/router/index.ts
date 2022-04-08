// import Vue from 'vue'
// import VueRouter, { RouteConfig } from 'vue-router'
import { createWebHistory, createRouter } from 'vue-router';
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import LogViewerTest from '../component_tests/LogViewerTest.vue'
import CommandManagerMonitor from '../components/CommandManagerMonitor.vue';

// Vue.use(VueRouter)

const routes =  [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  { path: '/about', name: 'About', component: About },
  { path: '/logviewer_test', name: 'LogViewerTest', component: LogViewerTest },
  { path: '/command_manager_monitor', name: 'CommandManagerMonitor', component: CommandManagerMonitor }
//   {
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
]

// const router = new VueRouter({
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
