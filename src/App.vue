<template>
  <header-view></header-view>
  <body-view></body-view>
  <footer-view></footer-view>
</template>

<script>
import HeaderView from './components/HeaderView.vue';
import BodyView from './components/BodyView.vue';
import FooterView from './components/FooterView.vue';

export default {
  components : {
    HeaderView,
    BodyView,
    FooterView,
  }
}
</script>

<style>
@import './assets/css/tailwind.css';
@import './assets/css/animate.css';

</style>