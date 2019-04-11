// Libs
import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import store from './store/index'

// Style
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../src/css/style.css'

const Feeds = {template: '<div><router-view/></div>'};
const Feed = {template: '<div><h2>Feed</h2></div>'};
const Biz = {template: '<div><h2>Biz</h2></div>'};
const Foo = {template: '<div><h2>Foo</h2></div>'};
const Bar = {template: '<div><h2>Bar</h2></div>'};
const Baz = {template: '<div><h2>Baz</h2></div>'};
const Fooblyad = {template: '<div><h2>Fooblyad</h2></div>'};

import VueBreadcrumbs from 'vue-2-breadcrumbs';
 
Vue.use(VueRouter);
Vue.use(VueBreadcrumbs);



// 3. Создаём экземпляр маршрутизатора и передаём маршруты в опции `routes`

const router = new VueRouter({
  routes: [
    {path: '/', redirect: '/feeds'},
    {
      path: '/feeds',
      component: Feeds,
      meta: {
        breadcrumb: 'Feeds'
      },
      children: [
        {
          path: '',
          component: Biz
        },
        {
          path: 'foo',
          component: Fooblyad,
          meta: {
            breadcrumb: () => `foo ${1 + 1}`
          },
          children: [
            {
              path: 'fooblyad',
              component: Foo,
              meta: {
                breadcrumb: () => `foo ${1 + 1}`
              }
            },
          ]
        },
        {
          path: 'bar',
          component: Bar,
          meta: {
            breadcrumb: 'bar'
          }
        },
        {
          name: 'baz',
          path: 'baz',
          component: Baz,
          meta: {
            breadcrumb: function () {
              const {name} = this.$route;
              return `name "${name}" of context $route`;
            }
          }
        },
        {
          path: ':id',
          component: Feed,
          meta: {
            breadcrumb: routeParams => `Other Feed ${routeParams.id}`
          }
        }
      ]
    }
  ]
});


const main = new Vue({
  router,
  store,
  data: function () {
    return {};
  },
  template: `
  <div>
  <ul class="nav">
              <li class="nav-item  ">
                  <router-link to="/feeds" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Feeds</router-link>
                  <div class="">
                      <router-link to="/feeds/foo" class="dropdown-item">Foo</router-link>
                      <router-link to="/feeds/foo/fooblyad" class="dropdown-item">Fooblyad</router-link>
                      <router-link to="/feeds/bar" class="dropdown-item">Bar</router-link>
                      <router-link to="/feeds/baz" class="dropdown-item">Baz</router-link>
                      <router-link to="/feeds/1" class="dropdown-item">Other Feed 1</router-link>
                      <router-link to="/feeds/2" class="dropdown-item">Other Feed 2</router-link>
                      <router-link to="/feeds/3" class="dropdown-item">Other Feed 3</router-link>
                  </div>
              </li>
          </ul>
          <breadcrumbs/>
          <router-view/>
          </div>`
  // components: {
  //   MainApp
  // }
}).$mount('#main_app')


