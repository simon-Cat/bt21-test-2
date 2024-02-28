<script>
import Navigation from './Navigation.vue'
export default {
  components: {
    Navigation
  }
}
</script>

<template>
  <header class="header">
    <nav>
      <Navigation />
    </nav>
  </header>
</template>

<style>
  .header {
    background-color: #f2ebeb;
    padding: 15px;
  }
</style>
