<template>
  <section class="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
    <div class="container">
      
      <gallery-list v-if="category === 'trade'"></gallery-list>
      <common-list v-if="category === 'community'"></common-list>

      <div v-if="getPageResult?.page?.content?.length > 0" class="flex flex-wrap">
        <div class="w-full px-4 md:w-1/2">
          <ul class="list-style-none flex md:justify-start items-center">
            <li v-if="pageAttr?.prev">
              <router-link
                v-if="getPageResult?.searchKeyword == undefined && getPageResult?.searchType == undefined"
                class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                :to="`/boards/${category}/${subCategory}?page=${startPage -2}`"
                aria-label="Previous"
              >
                <span aria-hidden="true">&laquo;</span>
              </router-link>
              <router-link
                v-else
                class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                :to="`/boards/${category}/${subCategory}?page=${startPage - 2}&s=${getPageResult?.searchKeyword}&sType=${getPageResult?.searchType}`"
                aria-label="Previous"
              >
                <span aria-hidden="true">&laquo;</span>
              </router-link>
            </li>
            <div v-for="num in pageAttr.endPage - pageAttr.startPage + 1" :key="num">
              <li aria-current="page" v-if="getPageResult?.page?.number + 1 === num">
                <p
                  class="relative block font-bold rounded bg-transparent px-3 py-1.5 text-lg text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                >
                  {{ num }}
                </p>
              </li>
              <li aria-current="page" v-else>
                <router-link
                  v-if="getPageResult?.searchKeyword == undefined && getPageResult?.searchType == undefined"
                  class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                  :to="`/boards/${category}/${subCategory}?page=${num-1}`">
                {{ num }}
                </router-link>
                <router-link
                  v-else
                  class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                  :to="`/boards/${category}/${subCategory}?page=${num-1}&s=${pageAttr?.searchKeyword}&sType=${pageAttr?.searchType}`">
                {{ num }}
                </router-link>
              </li>
            </div>
            <li v-if="pageAttr?.next">
              <router-link
                v-if="getPageResult?.searchKeyword == undefined && getPageResult?.searchType == undefined"
                class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                :to="`/boards/${category}/${subCategory}?page=${pageAttr.endPage}`"
                aria-label="Next"
              >
                <span aria-hidden="true">&raquo;</span>
              </router-link>
              <router-link
                v-else
                class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                :to="`/boards/${category}/${subCategory}?page=${pageAttr.endPage}&s=${getPageResult?.searchKeyword}&${getPageResult?.searchType}`"
                aria-label="Next"
              >
                <span aria-hidden="true">&raquo;</span>
              </router-link>
            </li>
          </ul>
        </div>

        <div class="w-full px-4 md:w-1/2">
          <div class="flex items-center md:justify-end">
            <router-link
                :to="`/board/${category}/${subCategory}/form`"
            >
              <span
                class="mb-5 inline-block rounded bg-primary py-1 px-4 text-center text-xs font-semibold leading-loose text-white"
              >
                글 쓰기
              </span>
            </router-link>
          </div>
        </div>

        <div class="w-full md:w-1/2">
          <form method="get" class="relative mb-4 flex w-full flex-wrap items-stretch">
            <div class="flex px-2 items-center">
              <select name="sType" data-te-select-init>
                <option value="title">제목</option>
                <option value="content">내용</option>
              </select>
            </div>
            <input
              name="s"
              type="search"
              class="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              placeholder="검색"
              aria-label="Search"
              aria-describedby="button-addon1"
            />

            <button
              class="relative z-[2] flex items-center rounded-r bg-primary px-4 py-1 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
              type="submit"
              id="button-addon"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-8 w-8"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>


    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import GalleryList from './list/GalleryList.vue';
import CommonList from './list/CommonList.vue';
export default {
    // props: ['title'],
    components: {
      GalleryList,
      CommonList,
    },
    computed: {
        ...mapGetters(['getPageResult','getPage']),
        category() {
            return this.$route.params.categoryName;
        },
        subCategory() {
            return this.$route.params.subCategoryName;
        },
        pageAttr() {
            return this.$store.state.pageResult.pageAttr;
        }
    },
    methods: {
        ...mapActions(['GET_BOARDLISTS']),
        // ...mapMutations(['SET_TITLE'])
    },
    beforeRouteUpdate(to,from, next) {
      this.GET_BOARDLISTS({ category: to.params.categoryName, subCategory: to.params.subCategoryName });
      next();
    },
    created() {
      // this.$store.commit('SET_TITLE', this.title);
      this.GET_BOARDLISTS({ category: this.category, subCategory: this.subCategory });
    },
};
</script>

<style>
</style>