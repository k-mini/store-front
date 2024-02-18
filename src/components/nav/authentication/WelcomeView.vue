<template>
  <div>
    <div class="flex w-full justify-end items-center">
      <div>
        <p
          class="mx-4 mt-6 max-w-[600px] text-base text-[#e4e4e4] sm:text-lg sm:leading-relaxed md:text-xl md:leading-relaxed"
          th:text="|${#authentication.principal.user.username}님 환영합니다!|"
        ></p>
      </div>

      <div th:if="${#authentication.principal.user.role.name == 'ADMIN' }">
        <a
          href="/admin/dashboard"
          class="signUpBtn rounded-lg bg-white bg-opacity-20 mx-2 py-3 px-6 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
        >
          관리자 게시판
        </a>
      </div>

      <div>
        <a
          href="/auth/my-page"
          class="signUpBtn rounded-lg bg-white bg-opacity-20 py-3 px-6 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
        >
          회원정보 변경
        </a>
      </div>
      <div>
        <a
          href="/logout"
          class="signUpBtn rounded-lg bg-white bg-opacity-20 mx-2 py-3 px-6 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
        >
          로그아웃
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>