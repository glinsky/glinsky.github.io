<template>
  <div>
    <div class="modal-mask" v-show="showModal">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <button type="button" class="close" @click="close">
              <span>&times;</span>
            </button>
          </div>

          <div class="modal-body">
            <h4>Свяжитесь с нами</h4>

            <b-form @submit="onSubmit">
              <b-form-group id="exampleInputGroup2" label="Имя:" label-for="exampleInput2">
                <b-form-input
                  id="exampleInput2"
                  type="text"
                  v-model="form.name"
                  required
                  placeholder="Введите имя"
                />
              </b-form-group>

              <b-form-group id="exampleInputGroup1" label="Email:" label-for="exampleInput1">
                <b-form-input
                  id="exampleInput1"
                  type="email"
                  v-model="form.email"
                  required
                  placeholder="Введите email"
                />
              </b-form-group>

              <b-form-group id="InputGroup1" label="Номер телефона:" label-for="exampleInput1">
                <b-form-input
                  id="tel"
                  type="text"
                  v-model="form.tel"
                  required
                  placeholder="+38 (___) ___ __ __"
                />
              </b-form-group>

              <b-form-textarea
                id="textarea"
                v-model="form.text"
                placeholder="Введите сообщение..."
                required
                rows="4"
                max-rows="4"
              />

              <b-form-group id="exampleGroup4">
                <b-form-checkbox-group v-model="form.checked" id="exampleChecks">
                  <b-form-checkbox value="me">Запомнить</b-form-checkbox>
                </b-form-checkbox-group>
              </b-form-group>

              <b-button type="submit" variant="primary">Submit</b-button>
            </b-form>
          </div>
        </div>
      </div>
    </div>

    <!-- small-modal -->
    <div class="modal-mask" v-show="showInfo">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <button type="button" class="close" @click="close">
              <span>&times;</span>
            </button>
          </div>

          <div class="modal-body">
           <h4>Спасибо!</h4>
            <span>Наш менеджер свяжется с Вами в ближайщее время. </span>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal",
  props: {
    isShowModal: {
      default: false
    }
  },
  data() {
    return {
      showShadow: false,
      showModal:true,
      showInfo: false,
      form: {
        email: "",
        name: "",
        tel: null,
        checked: [],
        text: ""
      },
    };
  },
  computed: {},
  methods: {
    close: function() {
      this.$emit("close", !this.isShowModal);
      this.showInfo = false;
    },
    onSubmit(evt) {
      evt.preventDefault();
      // alert(JSON.stringify(this.form))
      this.showInfo = true;
      // this.$emit("close", !this.isShowModal);
    }
  }
};
</script>

<style scope>
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
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-header {
  padding: 0;
  border-bottom: none;
}

.modal-default-button {
  float: right;
}

.modal-header button.close {
  width: 35px;
  height: 35px;
  padding: 0;
  margin: 0;
  margin-left: auto;
  background-color: #ededed;
  border-radius: 50%;
}

button.close span {
  color: #3b4eae;
  font-weight: normal;
  margin-left: 2px;
}

.modal-container {
  width: 500px;
  max-height: 720px;
  overflow: auto;
}

h4 {
  font-size: 32px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.5px;
  text-align: center;
  color: #1a1c26;
}

label {
  font-size: 14px;
}

@media (max-width: 767px) {
  .modal-container {
    width: 100%;
    max-height: calc(100vh - 28px);
    overflow: auto;
  }
}
</style>
