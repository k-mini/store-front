<template>
  <section class="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
    <div class="container">
      <gallery-list v-if="category === 'trade'"></gallery-list>
      <data-table-list v-else></data-table-list>

      <!-- <common-list v-if="category === 'community' && subCategory !== 'free'"></common-list> -->
      <!-- <data-table-list v-if="category === 'community' && subCategory == 'free'"></data-table-list> -->

      <page-navi v-if="category == 'trade'"></page-navi>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import GalleryList from "./list/GalleryList.vue";
// import CommonList from './list/CommonList.vue';
import DataTableList from "./list/DataTableList.vue";
import PageNavi from "./page/PageNavi.vue";

export default {
  data() {
    return {
      searchType: this.$route.query.searchType,
      searchKeyword: this.$route.query.searchKeyword,
      pageNumber: this.$route.query.page,
    };
  },
  components: {
    GalleryList,
    // CommonList,
    DataTableList,
    PageNavi,
  },
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
  methods: {
    ...mapActions(["GET_BOARDLISTS"]),
    searchBoard() {
      console.log(
        "searchType: ",
        this.searchType,
        "searchKeyword: ",
        this.searchKeyword
      );
      this.$router.push({
        name: "boardList",
        params: {
          category: this.category,
          subCategory: this.subCategory,
        },
        query: {
          searchType: this.searchType,
          searchKeyword: this.searchKeyword,
        },
      });
    },
  },
  beforeRouteUpdate(to, from, next) {
    if (to.params.categoryName === "trade") {
      this.GET_BOARDLISTS({
        category: to.params.categoryName,
        subCategory: to.params.subCategoryName,
        searchType: to.query.searchType,
        searchKeyword: to.query.searchKeyword,
        page: to.query.page,
      });
    }
    next();
  },
  created() {
    if (this.category === "trade") {
      this.GET_BOARDLISTS({
        category: this.category,
        subCategory: this.subCategory,
        searchType: this.searchType,
        searchKeyword: this.searchKeyword,
        page: this.pageNumber,
      });
    }
  },
};
</script>

<style>
</style>