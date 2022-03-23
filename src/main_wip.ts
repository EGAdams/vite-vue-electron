// import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import { createApp } from 'vue'
// Vue.config.productionTip = false

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')


createApp( { router, store, render: (_h: any) => ( App )}).use( router ) .mount( '#app' );