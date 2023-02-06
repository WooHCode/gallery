import Vue from 'vue'
import { createApp } from 'vue'
import store from "@/scripts/store"
import App from './App.vue'
import router from '@/scripts/router'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

new Vue({
  render: h => h(App),
}).$mount('#app')

createApp(App).use(store).use(router).use(BootstrapVue).use(BootstrapVueIcons).mount('#app')
