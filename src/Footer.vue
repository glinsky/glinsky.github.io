<template>
  <div>
    <div class="logo-footer container px-0">
      <img src="src\assets\img\footer\logo-footer.svg" alt="logo-footer">
    </div>
    <div class="footer-info d-flex container px-0">
      <div class="footer-info__left-block col-12 col-md-6 d-flex pl-sm-0">
        <div class="col-12 flex-column col-md-6 pl-sm-0">
          <ul>
            <li>Наши продукты</li>
            <li><a href="#"><router-link :to="{ name: 'CRM' }">CRM система</router-link></a></li>
            <li><a href="#">Почтовый клиент</a></li>
            <li><a href="#">Cервис проверки клиентов</a></li>
            <li><a href="#">Облачное хранилище клиентов</a></li>
          </ul>
        </div>
        <div class="col-12 col-md-6 d-flex justify-content-center">
          <ul>
            <li>Компания</li>
            <li><a href="#"><router-link :to="{ name: 'services' }">Услуги</router-link></a></li>
            <li><a href="#"><router-link :to="{ name: 'about-us' }">О нас</router-link></a></li>
            <li class="cursor-pointer" @click="showModal">Связаться с нами</li>
          </ul>
        </div>
      </div>
      
      <div class="footer-info__right-block col-12 col-md-6 text-right">
        <span>Подпишись на новости и будь в курсе всех обновлений</span>
        <b-input-group
          class="mb-3"
        >
          <b-form-input/>
          <b-input-group-append>
            <b-button size="sm" text="Button" variant="success">Подписаться</b-button>
          </b-input-group-append>
        </b-input-group>
        <span class="tel-number">+38 (067) 826 62 75</span>
      </div>
    </div>
        <div class="container-fluid px-0 text-center">
          <hr class="footer-line mb-0">
         <span class="bottom-info">©2019. MIRASOFT. Все права защищены</span>
      </div>
  </div>
</template>

<script>
export default {
  name: "footer-app",
  data() {
    return {
     
    };
  },
  computed: {
    // username () {
    //   return this.$route.params.username
    // }
  },
  methods: {
    showModal() {
      this.$store.state.showModal = true;
    }
  }
};
</script>

<style lang="scss" scope>
ul {
  .cursor-pointer{
    cursor: pointer;
    &:hover {text-shadow: 0px 0px 0px black;}
  }
}

</style>
