<template>
  <div
    v-if="getPageResult?.page?.content?.length > 0"
    class="-mx-4 flex flex-wrap"
    id="boardList"
  >
    <div
      v-for="result in getPageResult?.page?.content"
      :key="result.id"
      class="w-full px-4 md:w-1/2 lg:w-1/3"
    >
      <div class="wow fadeInUp group mb-10" data-wow-delay=".1s">
        <div class="mb-8 overflow-hidden rounded">
          <router-link
            :to="`/board/${category}/${subCategory}/${result.id}`"
            class="block"
          >
            <img
              :src="result.thumbnail != null ? '/images/' + result.thumbnail : require('@/assets/images/blog/blog-02.jpg')"
              alt="image"
              class="w-full transition group-hover:rotate-6 group-hover:scale-125"
              onerror="this.onerror=null; this.src='../../assets/images/blog/blog-02.jpg'"
            />
          </router-link>
        </div>
        <div>
          <span
            class="mb-5 inline-block rounded bg-primary py-1 px-4 text-center text-xs font-semibold leading-loose text-white"
          >
            {{ result.createdDate }}
          </span>
          <h3>
            <router-link
              :to="`/board/${category}/${subCategory}/${result.id}`"
              class="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
            >
              {{ result.title }}
            </router-link>
          </h3>
          <p class="text-base text-body-color">{{ result.content }}</p>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="-mx-4 flex flex-wrap">
    <div class="w-full px-4">
      <div
        class="wow fadeInUp relative mx-auto max-w-[850px] overflow-hidden rounded-lg bg-white py-20 px-8 text-center shadow-lg sm:px-12 md:px-[60px]"
        data-wow-delay=".2s"
      >
        <h2
          class="mb-8 text-3xl font-bold text-dark sm:text-4xl lg:text-[40px] xl:text-[42px]"
        >
          게시물이 없습니다.
        </h2>
        <h3 class="mb-8 text-xl font-normal text-dark-700 md:text-2xl">
          작성된 게시글이 없습니다.
        </h3>
        <ul class="flex flex-wrap justify-center">
          <li>
            <router-link
              to="/"
              class="mx-2 my-1 inline-block rounded-md bg-[#f5f8ff] py-3 px-6 text-base font-medium text-dark hover:bg-primary hover:text-white"
            >
              메인으로
            </router-link>
          </li>
          <li>
            <router-link
              :to="`/board/${category}/${subCategory}/form`"
              class="mx-2 my-1 inline-block rounded-md bg-[#f5f8ff] py-3 px-6 text-base font-medium text-dark hover:bg-primary hover:text-white"
            >
              글 쓰기
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data() {
      return {
        // img: require('../../../assets/images')
      }
    },
    computed: {
        ...mapGetters(['getPageResult']),
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
};
</script>

<style>
</style>