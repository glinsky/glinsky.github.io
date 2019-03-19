<template>
  <div class="container-fluid services px-0">
    <div class="row no-gutters">
      <div class="col-12 px-0 mb-4">
        <!-- header -->
        <div class="card text-white header-card">
          <div
            class="card-body card-img-overlay container d-flex flex-column justify-content-center"
          >
            <h1 class="card-title text-center pt-0">Услуги</h1>
            <p class="card-text text-center">Мы специализируемся на внедрении сервисов в проекты
              <br>и разработке уникальных онлайн-сервисов.
            </p>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="col-12 px-0 services-description">
          <div class="row">
            <div class="col col-md-6">
              <b-card
                title="Настройка системы"
                img-src="src\assets\img\services\tools.png"
                img-alt="Image"
                img-top
                tag="article"
                class="mb-5"
              >
                <b-card-text>
                  Начните с выбора дизайна, который вам нравится. Перед тем,
                  как заказывать, вы должны измерить стену, которую хотите обожать, ширину и высоту.
                  Мы рекомендуем вам добавить дополнительный дюйм на обе меры, так как стены могут
                  немного наклоняться.
                  <br>
                  <br>Начните с выбора дизайна, который вам нравится. Перед тем, как заказывать,вы измеряйте стену, которую хотите обожать, ширину и высоту.
                </b-card-text>
              </b-card>
            </div>
            <div class="col col-md-6">
              <b-card
                title="Интеграция с сервисами"
                img-src="src\assets\img\services\integr.png"
                img-alt="Image"
                img-top
                tag="article"
                class="mb-5"
              >
                <b-card-text>
                  Начните с выбора дизайна, который вам нравится. Перед тем,
                  как заказывать, вы должны измерить стену, которую хотите обожать, ширину и высоту.
                  Мы рекомендуем вам добавить дополнительный дюйм на обе меры, так как стены могут
                  немного наклоняться.
                  <br>
                  <br>Начните с выбора дизайна, который вам нравится. Перед тем, как заказывать,вы измеряйте стену, которую хотите обожать, ширину и высоту.
                </b-card-text>
              </b-card>
            </div>
            <div class="col col-md-6">
              <b-card
                title="Уникальные доработки"
                img-src="src\assets\img\services\uniq.png"
                img-alt="Image"
                img-top
                tag="article"
                class="mb-5"
              >
                <b-card-text>
                  Начните с выбора дизайна, который вам нравится. Перед тем,
                  как заказывать, вы должны измерить стену, которую хотите обожать, ширину и высоту.
                  Мы рекомендуем вам добавить дополнительный дюйм на обе меры, так как стены могут
                  немного наклоняться.
                  <br>
                  <br>Начните с выбора дизайна, который вам нравится. Перед тем, как заказывать,вы измеряйте стену, которую хотите обожать, ширину и высоту.
                </b-card-text>
              </b-card>
            </div>
            <div class="col col-md-6">
              <b-card
                title="Техническая поддержка"
                img-src="src\assets\img\services\tech.png"
                img-alt="Image"
                img-top
                tag="article"
                class="mb-5"
              >
                <b-card-text>
                  Начните с выбора дизайна, который вам нравится. Перед тем,
                  как заказывать, вы должны измерить стену, которую хотите обожать, ширину и высоту.
                  Мы рекомендуем вам добавить дополнительный дюйм на обе меры, так как стены могут
                  немного наклоняться.
                  <br>
                  <br>Начните с выбора дизайна, который вам нравится. Перед тем, как заказывать,вы измеряйте стену, которую хотите обожать, ширину и высоту.
                </b-card-text>
              </b-card>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 px-0">
        <div class="col-12 contact-us-block px-0">
          <img
            src="src\assets\img\home\contact-us\logo.svg"
            alt="logo"
            class="contact-us-block__logo"
          >
          <div class="card text-white">
            <div class="card-body card-img-overlay container-fluid text-center">
              <h1 class="card-title">
                Начните свой следующий проект
                с нами!
              </h1>
              <p class="card-text">Оставьте заявку и мы совершим индивидуальный расчет проекта
                <br>по внедрению системы
              </p>
              <b-button variant="outline-secondary" @click="showModal">Связаться</b-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "services",
  data() {
    return {};
  },
  computed: {},
  methods: {
    showModal() {
      this.$store.state.showModal = true;
    }
  }
};
</script>

<style>
</style>