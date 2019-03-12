<template>
  <div>
    <b-navbar toggleable="lg" class="px-0">
      <b-navbar-brand href="#">
        <router-link :to="{ name: 'home' }">
          <div>
            <b-img src="src\assets\logo.svg" fluid alt="Responsive image"/>
          </div>
        </router-link>
      </b-navbar-brand>

      <b-navbar-toggle @click="showMenu = false" target="nav_collapse"/>

      <b-collapse is-nav id="nav_collapse">
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">
            <router-link :to="{ name: 'home' }">Главная</router-link>
          </b-nav-item>
          <b-nav-item href="#" @click="showMenu = !showMenu">
            <span class="menu-item-name">Наши продукты</span>
            <span class="menu-arrow">
              <img
                src="src\assets\img\header\arrow.png"
                class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                alt
                :class="{scale : showMenu}"
              >
            </span>

            <!-- <router-link :to="{ name: 'our-products' }">Наши продукты</router-link> -->
          </b-nav-item>
          <b-nav-item href="#">
            <router-link :to="{ name: 'services' }">Услуги</router-link>
          </b-nav-item>
          <b-nav-item href="#">
            <router-link :to="{ name: 'about-us' }">О нас</router-link>
          </b-nav-item>
          <b-nav-item href="#">
            <router-link :to="{ name: 'home' }">
              <b-button variant="primary" class="contact-us">Связаться с нами</b-button>
            </router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <!-- Sub-menu -->
    <transition name="component-fade" mode="out-in">
      <div v-if="showMenu" @mouseleave="mouseLeave" class="container-fluid sub-menu" id="sub-menu">
        <div class="row">
          <div class="container">
            <div class="row">
              <div class="col-12 col-sm-6 col-md-3 sub-menu__column">
                <a href="#crm" @click="showMenu=false;">
                  
                  <router-link :to="{ name: 'CRM' }">
                    <span class="sub-menu__name">CRM система</span>
                  </router-link>
                </a>
                <span class="sub-menu__description">
                  Узнайте, что мы можем
                  сделать и как мы можем
                  достичь ваших целей
                  вместе.
                </span>
              </div>
              <div class="col-12 col-sm-6 col-md-3 sub-menu__column">
                <a href="#cloud" @click="showMenu=false;">
                  <span class="sub-menu__name">Облачное хранилище</span>
                </a>
                <span class="sub-menu__description">
                  Узнайте, что мы можем
                  сделать и как мы можем
                  достичь ваших целей
                  вместе.
                </span>
              </div>
              <div class="col-12 col-sm-6 col-md-3 sub-menu__column">
                <a href="#client" @click="showMenu=false;">
                  <span class="sub-menu__name">Сервис проверки клиентов</span>
                </a>
                <span class="sub-menu__description">
                  Узнайте, что мы можем
                  сделать и как мы можем
                  достичь ваших целей
                  вместе.
                </span>
              </div>
              <div class="col-12 col-sm-6 col-md-3 sub-menu__column">
                <a href="#mail_client" @click="showMenu=false;">
                  <span class="sub-menu__name">Почтовый клиент</span>
                </a>
                <span class="sub-menu__description">
                  Узнайте, что мы можем
                  сделать и как мы можем
                  достичь ваших целей
                  вместе.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <div v-if="showMenu" @click="showMenu = false" class="modal-backdrop fade show" id="back_drop"></div>
  </div>
</template>

<script>
export default {
  name: "header-app",
  data() {
    return {
      showMenu: false
    };
  },
  computed: {
    // username () {
    //   return this.$route.params.username
    // }
  },
  methods: {
    mouseLeave: function() {
      this.showMenu = false;
    }
  },
  mounted() {
    // Скрываем shadow при прокрутке
    window.addEventListener("scroll", () => {
      if (window.scrollY > 600) this.showMenu = false;
    });
  }
};
</script>

<style scope>
ul li .menu-arrow img {
  -webkit-transition: -webkit-linear 0.3s;
  -webkit-transition: linear 0.3s;
  transition: linear 0.3s;
  display: inline-block;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
  width: 11px;
  vertical-align: initial;
  letter-spacing: 0.3px;
  font-size: 16px;
}
</style>
