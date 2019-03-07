<template>
  <div class="container-fluid crm px-0">
    <div class="row no-gutters">
      <div class="col-12 px-0">
        <!-- header -->
        <div class="card text-white header-card">
          <div class="card-body card-img-overlay container">
            <h1 class="card-title">CRM система,
              <br>почтовый клиент,
              <br>облачное хранилище.
            </h1>
            <p class="card-text">Все, что нужно, в одной системе: продажи, закупки,
              <br>склад, финансы, клиенты и поставщики.
            </p>
            <a href="#crm">
              <b-button variant="outline-secondary">Подробнее</b-button>
            </a>
          </div>
        </div>
        <!-- product-descr -->
        <div class="product-descr">
          <hr class="product-descr__short-line">
          <h2 class="product-descr__paragraph">Продукты, которые мы предлагаем</h2>
          <span
            class="product-descr__description"
          >Узнайте, что мы можем сделать и как мы можем достичь ваших целей -
            <br>вместе.
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CRM",
  data() {
    return {
      saveScrollPosition: false
    };
  },
  computed: {
    scrollBehavior: function (to, from, savedPosition) {
      return savedPosition || { x: 0, y: 0 }
    }
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
