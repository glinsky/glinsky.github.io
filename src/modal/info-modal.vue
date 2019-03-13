<template>
  <div>
    <div class="modal-mask">
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
  name: "info-modal",
  props: {
    isShowInfoModal: {
      default: false
    }
  },
  data() {
    return {
      showShadow: false,
      form: {
        email: "",
        name: "",
        tel: null,
        checked: [],
        text: ''
      },
      smallModal: false
    };
  },
  computed: {},
  methods: {
    close: function() {
      this.$emit("close", !this.isShowInfoModal);
    },
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
  }
}
</style>
