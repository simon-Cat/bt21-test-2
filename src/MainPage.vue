<script>
import Popup from './components/Popup.vue'
import Form from './components/Form.vue'

export default {
  data() {
    return {
      isStarted: false,
      userData: ''
    }
  },
  components: {
    Popup,
    Form
  },
  methods: {
    openPopup() {
      this.isStarted = true
    },
    closePopup() {
      this.isStarted = false
    },
    submitForm(event, userData) {
      event.target.reset()

      this.closePopup()

      this.userData = JSON.stringify(userData, null, '\t')
    }
  }
}
</script>

<template>
  <section class="main-page">
    <div @click="closePopup" class="bg-layer" :class="{ 'bg-layer_hidden': !isStarted }"></div>
    <p v-if="userData" class="main-page__user-data">Ваши данные в формате JSON - {{ userData }}</p>
    <button v-if="!isStarted && !userData" @click="openPopup" class="button button_type_start">
      Начать
    </button>
    <Popup title="Заполните необходмые данные" :isHidden="isStarted">
      <Form @submit-form="submitForm" />
    </Popup>
  </section>
</template>

<style>
  .main-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #e9cece;
  }

  .main-page__user-data {
    line-height: 28px;
    text-align: center;
    padding: 0 15px;
  }

  .bg-layer {
    position: absolute;
    z-index: 15;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.5;
  }

  .bg-layer_hidden {
    display: none;
  }
</style>
