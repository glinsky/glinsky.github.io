<template>
  <div>
    <!-- отображаем тут компонент, для которого совпадает маршрут -->
    <transition name="component-fade" mode="out-in">
      <router-view></router-view>
    </transition>

    <modal v-show="showModal" @close="showModal = false"></modal>
  </div>
</template>

<script>

import Modal from './modal/contact-us.vue'

export default {

  name: "app",
  components: {
    Modal
  },
  data() {
    return {
      showShadow: false,
      showModal: false
    }
  },
  computed: {
    // username () {
    //   return this.$route.params.username
    // }
  },
  methods: {
    // goBack () {
    //   window.history.length > 1
    //     ? this.$router.go(-1)
    //     : this.$router.push('/')
    // }
  }
};
</script>

<style>
</style>
