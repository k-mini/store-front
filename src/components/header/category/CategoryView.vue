<template>
  <div>
    <button
      id="navbarToggler"
      class="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
    >
      <span class="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
      <span class="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
      <span class="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
    </button>
    <nav
      id="navbarCollapse"
      class="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:py-0 lg:px-4 lg:shadow-none xl:px-6"
    >
      <ul class="blcok lg:flex">
        <li v-for="category in fetchedCategories" :key= "category.categoryName" class="submenu-item group relative">
          <a
            v-bind:to="`/boards/${category.categoryName}/all`"
            class="relative mx-8 flex py-2 text-base text-dark after:absolute after:right-1 after:top-1/2 after:mt-[-2px] after:h-2 after:w-2 after:-translate-y-1/2 after:rotate-45 after:border-b-2 after:border-r-2 after:border-current group-hover:text-primary lg:mr-0 lg:ml-8 lg:inline-flex lg:py-6 lg:pl-0 lg:pr-4 lg:text-white lg:after:right-0 lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12"
          >
            {{category.categoryKoName + " 게시판" }}
          </a>
          <div
            class="submenu relative top-full left-0 hidden w-[250px] rounded-sm bg-white p-4 transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full"
          >
            <a
              v-for="subCategory in category.subCategories" :key="subCategory.categoryName"
              th:href="@{/boards/{category}/{subCategory}(category=${#strings.toLowerCase(category.categoryName)},
                                                      subCategory=${#strings.toLowerCase(subCategory.categoryName)})}"
              class="block rounded py-[10px] px-4 text-sm text-body-color hover:text-primary"
            >
              {{ subCategory.categoryKoName + " 게시판" }}
            </a>
          </div>
        </li>
        <li v-if="getAuthenticated" class="submenu-item group relative">
          <p
            class="relative mx-8 flex py-2 text-base text-dark after:absolute after:right-1 after:top-1/2 after:mt-[-2px] after:h-2 after:w-2 after:-translate-y-1/2 after:rotate-45 after:border-b-2 after:border-r-2 after:border-current group-hover:text-primary lg:mr-0 lg:ml-8 lg:inline-flex lg:py-6 lg:pl-0 lg:pr-4 lg:text-white lg:after:right-0 lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12"
          >
            마이페이지
          </p>
          <div
            class="submenu relative top-full left-0 hidden w-[250px] rounded-sm bg-white p-4 transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full"
          >
            <a
              href="/auth/my-page"
              class="block rounded py-[10px] px-4 text-sm text-body-color hover:text-primary"
            >
              회원정보 변경
            </a>
            <a
              v-bind:to="`/user/${principal.user.id}/trade-history`"
              class="block rounded py-[10px] px-4 text-sm text-body-color hover:text-primary"
            >
              거래 내역
            </a>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {

  computed : {
    ...mapGetters(['fetchedCategories','getAuthenticated']),
  },
  created() {
    this.$store.dispatch('FETCH_CATEGORIES');
  },
};
</script>

<style>
</style>