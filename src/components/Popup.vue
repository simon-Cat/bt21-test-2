<script>
export default {
  props: {
    title: String,
    isHidden: Boolean
  }
}
</script>

<template>
  <div class="popup" :class="[!isHidden ? 'popup_hidden' : '']">
    <p class="popup__title">{{ title }}</p>
    <slot></slot>
  </div>
</template>

<style>
  .popup {
    max-width: 500px;
    position: absolute;
    z-index: 20;
    background: #fff;
    border-radius: 4px;
  }

  .popup__title {
    font-weight: 400;
    font-size: 20px;
    text-align: center;
    padding: 20px 16px;
  }

  .popup_hidden {
    display: none;
  }
</style>
