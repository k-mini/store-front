<template>
  <div class="ud-header absolute top-0 left-0 z-40 flex w-full items-center bg-transparent">
    <div class="container">
      <div class="relative -mx-4 flex items-center justify-between">
        <div class="w-60 max-w-full px-4">
          <router-link v-bind:to="`/`" class="navbar-logo block w-full py-5">
            <img
              src="../../assets/images/logo/logo-white.svg"
              alt="logo"
              class="header-logo w-full"
            />
          </router-link>
        </div>
        <div class="flex w-full items-center justify-between px-4">
          
          <!-- 카테고리 리스트 출력 -->
          <category-view></category-view>

          <!-- 로그인 성공 -->
          <login-view v-if="getAuthentication"></login-view>
          <!-- 로그인 실패 -->
          <anonymous-view v-else></anonymous-view>

        </div>
      </div>
    </div>
  </div>

  <!-- 배너 -->
  <banner-view v-if="getPath != '/'"></banner-view>
</template>

<script>
import CategoryView from './category/CategoryView.vue';
import LoginView from './authentication/LoginView.vue';
import AnonymousView from './authentication/AnonymousView.vue';
import BannerView from './banner/BannerView.vue';
import { mapActions } from 'vuex';

export default {
  components: {
    CategoryView,
    AnonymousView,
    LoginView, 
    BannerView,
  },
  computed : {
    getPath() {
      return this.$route.path;
    },
    getAuthentication() {
      return this.$store.state.authentication;
    },
  },
  methods: {
    ...mapActions(['FETCH_AUTHENTICATION']),
  },
};
</script>
<!-- 해당 컴포넌트만 적용하고 싶을떄 import로 사용하면 안됨 -->
<!-- <style scoped src="../assets/css/animate.css"></style> -->
<!-- <style scoped src="../assets/css/tailwind.css"></style> -->