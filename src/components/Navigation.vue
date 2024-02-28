<script>
export default {
  data() {
    return {
      links: [
        {
          linkTitle: 'Главная',
          path: '/'
        },
        {
          linkTitle: 'О компании',
          path: '/about'
        }
      ]
    }
  }
}
</script>
<template>
  <ul class="nav-list">
    <li class="nav-list__item" v-for="(link, index) in links" :key="index">
      <router-link class="nav-list__link" :to="link.path">{{ link.linkTitle }}</router-link>
    </li>
  </ul>
</template>
<style>
  .nav-list {
    display: flex;
    gap: 25px;
  }

  .nav-list__item {
    font-size: 18px;
  }

  .nav-list__link {
    text-transform: uppercase;
    transition: opacity 0.4s ease;
  }

  .nav-list__link:hover {
    opacity: 0.7;
  }
</style>
