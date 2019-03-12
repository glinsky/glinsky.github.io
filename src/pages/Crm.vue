<template>
  <div class="container-fluid crm px-0">
    <div class="row no-gutters">
      <div class="col-12 px-0 mb-4">
        <!-- header -->
        <div class="card text-white header-card">
          <div class="card-body card-img-overlay container d-flex flex-column justify-content-center">
            <h1 class="card-title text-center pt-0">CRM система</h1>
            <p class="card-text text-center">Все, что нужно, в одной системе: продажи, закупки,
              <br>склад, финансы, клиенты и поставщики.
            </p>
          </div>
        </div>
      </div>
      <div class="col-12 px-0">
        <div class="icon-block container py-5">
          <div class="icon-block__item pt-4">
            <b-card title="Зачем это Вам" img-src="src\assets\img\crm\ic-our-products.svg" img-alt="Image" img-top
              tag="article" class="mb-2">
              <hr>
              <b-card-text class="px-3">
                Индивидуальная система метрик поможет вам настроить сбор данных с сайта,
                убедиться, что все правильно передается, начать измерять KPI,
                которые важны бизнесу.
              </b-card-text>
            </b-card>
          </div>
          <div class="icon-block__item pt-4">
            <b-card title="Что вы получите" img-src="src\assets\img\crm\ic-our-products-product-orientation.svg"
              img-alt="Image" img-top tag="article" class="mb-2">
              <hr>
              <b-card-text class="px-3">
                Индивидуальная система метрик поможет вам настроить сбор данных с сайта,
                убедиться, что все правильно передается, начать измерять KPI,
                которые важны бизнесу.
              </b-card-text>
            </b-card>
          </div>
        </div>
      </div>
      <div class="col-12 px-0">
        <!-- product-descr -->
        <div class="product-descr mt-5">
          <hr class="product-descr__short-line">
          <h2 class="product-descr__paragraph">Все преимущества нашей системы</h2>
          <span class="product-descr__description">Узнайте, что мы можем сделать и как мы можем достичь ваших целей -
            <br>вместе.
          </span>
        </div>
        <!-- 1C block -->
        <div class="container product-block__item cloud-block">
          <b-card no-body class="overflow-hidden card-img-right border-0">
            <b-row no-gutters>
              <b-col md="6" class="text-center">
                <b-card-img src="src\assets\img\home\cloud-img.png" class="rounded-0" />
              </b-col>
              <b-col md="6" class="d-flex align-items-center pl-md-5">
                <b-card-body title="Обмен данными с 1С">
                  <ul class="text-justify">
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
        <!-- cloud-block -->
        <div class="container product-block__item crm-block">
          <b-card no-body class="overflow-hidden border-0">
            <b-row no-gutters class="flex-row-reverse">
              <b-col md="6" class="text-center">
                <b-card-img src="src\assets\img\home\crm-img.png" class="rounded-0" />
              </b-col>
              <b-col md="6" class="d-flex align-items-center">
                <b-card-body title="Облачное хранилище">
                  <ul class="text-justify">
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
                  <b-button variant="primary" class="button__detail">Подробнее</b-button>
                  <!-- </router-link> -->
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
          <hr class="product-block__bottom-line">
        </div>
        <!-- client block -->
        <div class="container product-block__item client-block mb-5">
          <b-card no-body class="overflow-hidden card-img-left border-0">
            <b-row no-gutters>
              <b-col md="6" class="text-center">
                <b-card-img src="src\assets\img\home\client-img.png" class="rounded-0 client-img" />
              </b-col>
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
            </b-row>
          </b-card>
          <hr class="product-block__bottom-line">
        </div>
        <div class="col-12 contact-us-block px-0">
          <img src="src\assets\img\home\contact-us\logo.svg" alt="logo" class="contact-us-block__logo">
          <div class="card text-white">
            <div class="card-body card-img-overlay container-fluid text-center">
              <h1 class="card-title">Узнайте стоимость внедрения
                <br>CRM системы
              </h1>
              <p class="card-text">Оставьте заявку и мы совершим индивидуальный расчет проекта
                <br>по внедрению системы
              </p>
              <b-button variant="outline-secondary">Узнать стоимость</b-button>
            </div>
          </div>
        </div>
        <div class="col-12 px-0">
          <!-- product-descr -->
          <div class="product-descr mt-5">
            <hr class="product-descr__short-line">
            <h2 class="product-descr__paragraph">Наши клиенты</h2>
            <span class="product-descr__description">Мы помогли стать лучше отделам продаж более 100 компаний.
              <br>Но некоторыми клиентами гордимся особенно
            </span>
          </div>

          <div class="slider container px-0 mb-5">
            <div>
              <b-carousel id="carousel1" style="text-shadow: 1px 1px 2px #333;" controls indicators background="#fff"
                :interval="400000" img-width="90" img-height="90" v-model="slide" @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd">
                <!-- Text slides with image -->
                <b-carousel-slide >
                  <div class="icon-block container py-5">
                    <div class="icon-block__item pt-4">
                      <b-card img-src="src\assets\img\crm\slider\alpitec.jpg" img-alt="Image" img-top
                        tag="article" class="mb-2">
                        <hr>
                        <b-card-text class="px-3">
                          «У нас была цель систематизировать продажи, управлять процессом работы и базой клиентов, предоставлять качественный
                          сервис. Смотрели много видеоматериалов об автоматизации, нам понравился подход, решили внедрить и в наш отдел продаж
                          CRM. .»
                        </b-card-text>
                      </b-card>
                    </div>
                    <div class="icon-block__item pt-4">
                      <b-card
                        img-src="src\assets\img\crm\slider\alpitec.jpg" img-alt="Image" img-top
                        tag="article" class="mb-2">
                        <hr>
                        <b-card-text class="px-3">
                          «Мы столкнулись с проблемой, что очень много времени уходит на отправку заказов и внесения данных в CRM-систему. »
                        </b-card-text>
                      </b-card>
                    </div>
                    <div class="icon-block__item pt-4">
                      <b-card img-src="src\assets\img\crm\slider\alpitec.jpg" img-alt="Image" img-top
                        tag="article" class="mb-2">
                        <hr>
                        <b-card-text class="px-3">
                          «Я основал свой бизнес два года назад. Компания специализируется на поставках спецоборудования, цикл продажи может
                          достигать 7 месяцев, контролировать этот процесс в Excel невозможно. Поэтому CRM-систему мы внедрили в отдел продаж
                          практически сразу.»
                        </b-card-text>
                      </b-card>
                    </div>
                  </div>
                </b-carousel-slide>
                
                <b-carousel-slide>
                  <div class="icon-block container py-5">
                    <div class="icon-block__item pt-4">
                      <b-card img-src="src\assets\img\crm\slider\alpitec.jpg" img-alt="Image" img-top tag="article" class="mb-2">
                        <hr>
                        <b-card-text class="px-3">
                          «У нас была цель систематизировать продажи, управлять процессом работы и базой клиентов, предоставлять
                          качественный
                          сервис. Смотрели много видеоматериалов об автоматизации, нам понравился подход, решили внедрить и в наш отдел
                          продаж
                          CRM. .»
                        </b-card-text>
                      </b-card>
                    </div>
                    <div class="icon-block__item pt-4">
                      <b-card img-src="src\assets\img\crm\slider\alpitec.jpg" img-alt="Image" img-top tag="article" class="mb-2">
                        <hr>
                        <b-card-text class="px-3">
                          «Мы столкнулись с проблемой, что очень много времени уходит на отправку заказов и внесения данных в
                          CRM-систему. »
                        </b-card-text>
                      </b-card>
                    </div>
                    <div class="icon-block__item pt-4">
                      <b-card img-src="src\assets\img\crm\slider\alpitec.jpg" img-alt="Image" img-top tag="article" class="mb-2">
                        <hr>
                        <b-card-text class="px-3">
                          «Я основал свой бизнес два года назад. Компания специализируется на поставках спецоборудования, цикл продажи
                          может
                          достигать 7 месяцев, контролировать этот процесс в Excel невозможно. Поэтому CRM-систему мы внедрили в отдел
                          продаж
                          практически сразу.»
                        </b-card-text>
                      </b-card>
                    </div>
                  </div>
                </b-carousel-slide>

                <b-carousel-slide>
                  <div class="icon-block container py-5">
                    <div class="icon-block__item pt-4">
                      <b-card img-src="src\assets\img\crm\slider\alpitec.jpg" img-alt="Image" img-top tag="article" class="mb-2">
                        <hr>
                        <b-card-text class="px-3">
                          «У нас была цель систематизировать продажи, управлять процессом работы и базой клиентов, предоставлять
                          качественный
                          сервис. Смотрели много видеоматериалов об автоматизации, нам понравился подход, решили внедрить и в наш отдел
                          продаж
                          CRM. .»
                        </b-card-text>
                      </b-card>
                    </div>
                    <div class="icon-block__item pt-4">
                      <b-card img-src="src\assets\img\crm\slider\alpitec.jpg" img-alt="Image" img-top tag="article" class="mb-2">
                        <hr>
                        <b-card-text class="px-3">
                          «Мы столкнулись с проблемой, что очень много времени уходит на отправку заказов и внесения данных в
                          CRM-систему. »
                        </b-card-text>
                      </b-card>
                    </div>
                    <div class="icon-block__item pt-4">
                      <b-card img-src="src\assets\img\crm\slider\alpitec.jpg" img-alt="Image" img-top tag="article" class="mb-2">
                        <hr>
                        <b-card-text class="px-3">
                          «Я основал свой бизнес два года назад. Компания специализируется на поставках спецоборудования, цикл продажи
                          может
                          достигать 7 месяцев, контролировать этот процесс в Excel невозможно. Поэтому CRM-систему мы внедрили в отдел
                          продаж
                          практически сразу.»
                        </b-card-text>
                      </b-card>
                    </div>
                  </div>
                </b-carousel-slide>
              </b-carousel>
            </div>
          </div>
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
        slide: 0,
        sliding: null,
        saveScrollPosition: false
      };
    },
    computed: {},
    methods: {
      onSlideStart(slide) {
        this.sliding = false;
      },
      onSlideEnd(slide) {
        this.sliding = false;
      },
    }
  };
</script>

<style>
</style>