<template>
  <div>
    <div class="hidden justify-end pr-16 sm:flex lg:pr-0">
      <router-link
        :to="`/auth/signin`"
        class="loginBtn py-3 px-7 text-base font-medium text-white hover:opacity-70"
      >
        로그인
      </router-link>
      <router-link
        :to="`/auth/signup`"
        class="signUpBtn rounded-lg bg-white bg-opacity-20 py-3 px-6 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
      >
        회원가입
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
};
</script>

<style>
</style>