<template>
      <!-- отображаем тут компонент, для которого совпадает маршрут -->
        <transition name="component-fade" mode="out-in">
          <router-view></router-view>
        </transition> 
</template>

<script>

export default {
  name: 'app',
  props: {
    showMenu: {
      default: false
    }
  },
  data () {
    return {
    showShadow: false,
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
}
</script>

<style>

</style>
