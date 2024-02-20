<template>
  <div
    v-if="getPageResult.page.content.length > 0"
    class="relative py-3 overflow-x-auto"
  >
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="px-6 py-3">게시물 번호</th>
          <th scope="col" class="px-6 py-3">제목</th>
          <th scope="col" class="px-6 py-3">작성자</th>
          <th scope="col" class="px-6 py-3">조회 수</th>
          <th scope="col" class="px-6 py-3">댓글 수</th>
          <th scope="col" class="px-6 py-3">생성시간</th>
        </tr>
      </thead>

      <tbody>
        <tr
          th:each="result : ${results}"
          v-for="result in getPageResult.page.content"
          :key="result.id"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {{ result.id }}
          </th>
          <td class="px-6 py-4 hover:text-primary">
            <router-link
              :to="`/board/${category}/${subCategory}/${result.id}`"
              class="mb-4 inline-block"
            >
              {{ result.title }}
            </router-link>
          </td>
          <td class="px-6 py-4">{{ result.username }}</td>
          <td class="px-6 py-4">{{ result.views }}</td>
          <td class="px-6 py-4">{{ result.commentsSize }}</td>
          <td class="px-6 py-4">{{ result.createdDate }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getPageResult"]),
    category() {
      return this.$route.params.categoryName;
    },
    subCategory() {
      return this.$route.params.subCategoryName;
    },
    pageAttr() {
      return this.$store.state.pageResult.pageAttr;
    },
  },
};
</script>

<style>
</style>