// Libs
import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'

// Style
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../src/css/style.css'

// Pages
import HeaderApp from './Header.vue'
import App from './App.vue'
import FooterApp from './Footer.vue'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Crm from './pages/Crm.vue'

Vue.use(BootstrapVue)
Vue.use(VueRouter)


// 3. Создаём экземпляр маршрутизатора и передаём маршруты в опции `routes`

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/crm', name: 'CRM', component: Crm },
    { path: '/about-us', name: 'about-us', component: About },


  ],// сокращённая запись для `routes: routes`
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

const app = new Vue({
  router,
  components: {
    App
  }
}).$mount('#main_wrap')

const header = new Vue({
  router,
  components: {
    HeaderApp
  }
}).$mount('#header')

const footer = new Vue({
  router,
  components: {
    FooterApp
  }
}).$mount('#footer')