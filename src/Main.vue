<template>
  <div>
    <header id="header" class="container">
      <header-app :showModal="showModal" @show="showModal = true"></header-app>
    </header>
    <div id="main_wrap" class="col-12 px-0">
      <app></app>
    </div>
    <!-- modal -->
    <transition name="modal" mode="out-in">
      <modal :showModal="showModal" v-show="showModal" @close="showModal = false"></modal>
    </transition>
    <!-- end modal -->
    <footer id="footer" class="container-fluid px-0">
      <footer-app></footer-app>
    </footer>
  </div>
</template>

<script>

import HeaderApp from './Header.vue'
import App from './App.vue'
import FooterApp from './Footer.vue'
import Modal from "./modal/contact-us.vue"

export default {
  name: "main-app",
  components: {
    HeaderApp, App, FooterApp, Modal
  },
  data() {
    return {
      showMenu: false,
      showModal: false
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
    },
    // show: function() {
    //   this.$emit("show", !this.showModal);
    // }
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

.modal-enter-active, .modal-leave-active {
  transition: opacity .4s;
}
.modal-enter, .modal-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

</style>
