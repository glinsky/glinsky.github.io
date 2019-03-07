<template>
  <div class="container-fluid home px-0">
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
      <!-- crm-block -->
      <div class="container product-block__item crm-block" id="crm">
        <b-card no-body class="overflow-hidden card-img-left border-0">
          <b-row no-gutters>
            <b-col md="6" class="text-center">
              <b-card-img src="src\assets\img\home\crm-img.png" class="rounded-0"/>
            </b-col>
            <b-col md="6" class="d-flex align-items-center">
              <b-card-body title="CRM система">
                <ul>
                  <li>
                    Начните с выбора дизайна, который вам нравится.
                    вы должны измерить стену, которую хотите обожать.
                  </li>
                  <li>
                    Мы рекомендуем вам добавить доп меры, так как
                    стены могут немного наклоняться.
                  </li>
                  <li>Начните с выбора дизайна, который вам нравится.</li>
                </ul>
                <!-- <router-link :to="{ name: 'CRM' }"> -->
                <b-button variant="primary" class="button__detail" @click="goCrm">Подробнее</b-button>
                <!-- </router-link> -->
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
        <hr class="product-block__bottom-line">
      </div>
      <!-- cloud-block -->
      <div class="container product-block__item cloud-block" id="cloud">
        <b-card no-body class="overflow-hidden card-img-right border-0">
          <b-row no-gutters class="row-reverse">
            <b-col md="6" class="d-flex align-items-center">
              <b-card-body title="Облачное хранилище">
                <ul>
                  <li>
                    Начните с выбора дизайна, который вам нравится.
                    вы должны измерить стену, которую хотите обожать.
                  </li>
                  <li>
                    Мы рекомендуем вам добавить доп меры, так как
                    стены могут немного наклоняться.
                  </li>
                  <li>Начните с выбора дизайна, который вам нравится.</li>
                </ul>
                <b-button variant="primary" class="button__detail">Подробнее</b-button>
              </b-card-body>
            </b-col>
            <b-col md="6" class="text-center">
              <b-card-img src="src\assets\img\home\cloud-img.png" class="rounded-0"/>
            </b-col>
          </b-row>
        </b-card>
        <hr class="product-block__bottom-line">
      </div>
      <!-- client block -->
      <div class="container product-block__item client-block" id="client">
        <b-card no-body class="overflow-hidden card-img-left border-0">
          <b-row no-gutters>
            <b-col md="6" class="text-center">
              <b-card-img src="src\assets\img\home\client-img.png" class="rounded-0 client-img"/>
            </b-col>
            <b-col md="6" class="d-flex align-items-center">
              <b-card-body title="Сервис проверки клиентов">
                <ul>
                  <li>
                    Начните с выбора дизайна, который вам нравится.
                    вы должны измерить стену, которую хотите обожать.
                  </li>
                  <li>
                    Мы рекомендуем вам добавить доп меры, так как
                    стены могут немного наклоняться.
                  </li>
                  <li>Начните с выбора дизайна, который вам нравится.</li>
                </ul>
                <b-button variant="primary" class="button__detail">Подробнее</b-button>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
        <hr class="product-block__bottom-line">
      </div>
      <!-- mail-block -->
      <div class="container product-block__item cloud-block mb-md-5" id="mail_client">
        <b-card no-body class="overflow-hidden card-img-right border-0">
          <b-row no-gutters class="row-reverse">
            <b-col md="6" class="d-flex align-items-center">
              <b-card-body title="Почтовый клиент">
                <ul>
                  <li>
                    Начните с выбора дизайна, который вам нравится.
                    вы должны измерить стену, которую хотите обожать.
                  </li>
                  <li>
                    Мы рекомендуем вам добавить доп меры, так как
                    стены могут немного наклоняться.
                  </li>
                  <li>Начните с выбора дизайна, который вам нравится.</li>
                </ul>
                <b-button variant="primary" class="button__detail">Подробнее</b-button>
              </b-card-body>
            </b-col>
            <b-col md="6" class="text-center">
              <b-card-img src="src\assets\img\home\mail-img.png" class="rounded-0"/>
            </b-col>
          </b-row>
        </b-card>
        <hr class="product-block__bottom-line">
      </div>
      <div class="col-12 px-0 dark-bg mt-5">
        <!-- product-descr -->
        <div class="product-descr">
          <hr class="product-descr__short-line">
          <h2 class="product-descr__paragraph">Доверьтесь нам</h2>
          <span
            class="product-descr__description"
          >Узнайте, что мы можем сделать и как мы можем достичь ваших целей -
            <br>вместе.
          </span>
        </div>
        <div class="icon-block container py-5">
          <div class="icon-block__item">
            <b-card
              title="Постоянная поддержка"
              img-src="src\assets\img\home\ico-block\support-icon.svg"
              img-alt="Image"
              img-top
              tag="article"
              class="mb-2"
            >
              <b-card-text>
                мы всегда на связи
                и ждем ваших вопросов
              </b-card-text>
            </b-card>
          </div>
          <div class="icon-block__item">
            <b-card
              title="Безопасное хранение данных"
              img-src="src\assets\img\home\ico-block\security-icon.svg"
              img-alt="Image"
              img-top
              tag="article"
              class="mb-2"
            >
              <b-card-text>внимание системе управления качеством</b-card-text>
            </b-card>
          </div>
          <div class="icon-block__item">
            <b-card
              title="Все в одной системе"
              img-src="src\assets\img\home\ico-block\one-system-icon.svg"
              img-alt="Image"
              img-top
              tag="article"
              class="mb-2"
            >
              <b-card-text>внимание системе управления качеством</b-card-text>
            </b-card>
          </div>
        </div>
      </div>
      <div class="col-12 px-0 review">
        <!-- review -->
        <div class="product-descr">
          <hr class="product-descr__short-line">
          <h2 class="product-descr__paragraph">Отзывы предпринимателей</h2>
        </div>

        <div class="slider container">
          <div>
            <b-carousel
              id="carousel1"
              style="text-shadow: 1px 1px 2px #333;"
              controls
              indicators
              background="#fff"
              :interval="400000"
              img-width="90"
              img-height="90"
              v-model="slide"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
            >
              <!-- Text slides with image -->
              <b-carousel-slide
                caption="Екатерина"
                text="26 ноября 2018"
                img-src="src\assets\img\home\slider\review-img.png"
              >
                <span class="slider-description">
                  <img src="src\assets\img\home\slider\slider-description-img.png">
                  <span>
                    Профессиональная команда — профессиональная работа. Команда Mirasoft работала действительно плотно вместе с нашим IT отделом. У нас была абсолютная уверенность
                    в том, что мы все делаем правильно. Внедрение дало нам возможность проанализировать новые данные и показало направление
                    для дальнейшего развития и аналитики
                  </span>
                </span>
              </b-carousel-slide>

              <!-- Slides with custom text -->
              <b-carousel-slide
                caption="Екатерина"
                text="26 ноября 2018"
                img-src="src\assets\img\home\slider\review-img.png"
              >
                <span class="slider-description">
                  <img src="src\assets\img\home\slider\slider-description-img.png">
                  <span>
                    Профессиональная команда — профессиональная работа. Команда Mirasoft работала действительно плотно вместе с нашим IT отделом. У нас была абсолютная
                    уверенность
                    в том, что мы все делаем правильно. Внедрение дало нам возможность проанализировать новые данные и показало
                    направление
                    для дальнейшего развития и аналитики
                  </span>
                </span>
              </b-carousel-slide>

              <!-- Slides with img slot -->
              <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
              <b-carousel-slide
                caption="Екатерина"
                text="26 ноября 2018"
                img-src="src\assets\img\home\slider\review-img.png"
              >
                <span class="slider-description">
                  <img src="src\assets\img\home\slider\slider-description-img.png">
                  <span>
                    Профессиональная команда — профессиональная работа. Команда Mirasoft работала действительно плотно вместе с нашим IT отделом. У нас была абсолютная
                    уверенность
                    в том, что мы все делаем правильно. Внедрение дало нам возможность проанализировать новые данные и показало
                    направление
                    для дальнейшего развития и аналитики
                  </span>
                </span>
              </b-carousel-slide>
            </b-carousel>
          </div>
        </div>
      </div>
      <div class="col-12 contact-us-block px-0">
        <img
          src="src\assets\img\home\contact-us\logo.svg"
          alt="logo"
          class="contact-us-block__logo"
        >
        <div class="card text-white">
          <div class="card-body card-img-overlay container-fluid text-center">
            <h1 class="card-title">Достигните своих бизнес-целей
              <br>вместе с нами
            </h1>
            <p class="card-text">Узнайте, что мы можем сделать и как мы можем достичь ваших целей
              <br>- вместе.
            </p>
            <b-button variant="outline-secondary">Подробнее</b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      slide: 0,
      sliding: null,
      saveScrollPosition: false
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = false;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
    goCrm() {
      window.history.length > 1;
      this.$router.push("/crm");
    }
  },
  computed: {
    scrollBehavior: function(to, from, savedPosition) {
      return savedPosition || { x: 0, y: 0 };
    }
  }
};
</script>

<style scope>
img.card-img {
  border-radius: 0;
}
</style>
