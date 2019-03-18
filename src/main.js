// Libs
import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import store from './store/index'

// Style
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../src/css/style.css'

// Pages
import Home from './pages/Home.vue'
import MainApp from './Main.vue'
import About from './pages/About.vue'
import Crm from './pages/Crm.vue'
import Services from './pages/Services.vue'


Vue.use(BootstrapVue)
Vue.use(VueRouter)


// 3. Создаём экземпляр маршрутизатора и передаём маршруты в опции `routes`

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/crm', name: 'CRM', component: Crm },
    { path: '/about-us', name: 'about-us', component: About },
    { path: '/services', name: 'services', component: Services },

  ],// сокращённая запись для `routes: routes`
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})


const main = new Vue({
  router,
  store,
  data: function () {
    return {};
  },
  components: {
    MainApp
  }
}).$mount('#main_app')


