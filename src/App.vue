<template>
  <header-view></header-view>
  <router-view></router-view>
  <footer-view></footer-view>
</template>

<script>
import HeaderView from './components/header/HeaderView.vue';
import FooterView from './components/footer/FooterView.vue';

export default {
  components : {
    HeaderView,
    FooterView,
  },
  created() {
    // console.log(this.$router.getRoutes());
  },
}
</script>

<style>
@import './assets/css/tailwind.css';
@import './assets/css/animate.css';

</style>