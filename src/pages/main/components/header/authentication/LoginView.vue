<template>
  <div>
    <div class="flex w-full justify-end items-center">
      <div>
        <p
          class="mx-4 max-w-[600px] text-base text-[#e4e4e4] sm:text-lg sm:leading-relaxed md:text-xl md:leading-relaxed"
          v-text="getAuthentication.username + '님 환영합니다!'"
        ></p>
      </div>

      <div v-if="getAuthentication.userRole === 'ADMIN'">
        <a
          href="/admin"
          class="signUpBtn rounded-lg bg-white bg-opacity-20 mx-2 py-3 px-6 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
        >
          관리자 게시판
        </a>
      </div>

      <div>
        <router-link
          :to="`/auth/account`"
          class="signUpBtn rounded-lg bg-white bg-opacity-20 py-3 px-6 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
        >
          회원정보 변경
        </router-link>
      </div>
      <div>
        <a
          href="#"
          class="signUpBtn rounded-lg bg-white bg-opacity-20 mx-2 py-3 px-6 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
          @click="logout()"
        >
          로그아웃
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { removeJwtToken } from '../../../api/jwtApi';
export default {

  computed: {
    getAuthentication() {
      return this.$store.state.authentication;
    },
  },
  methods: {
    ...mapMutations(['SET_AUTHENTICATION']),
    logout() {
      removeJwtToken();
      this.SET_AUTHENTICATION(null);
    },
  }
  
};
</script>

<style>
</style>