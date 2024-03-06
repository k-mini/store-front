<template>
  <gallery-list></gallery-list>
  <page-navi @changePage="callBackPage"></page-navi>
</template>

<script>
import { mapActions } from "vuex";
import GalleryList from "./GalleryList.vue";
import PageNavi from "../page/PageNavi.vue";
export default {
  components: {
    GalleryList,
    PageNavi,
  },
  data() {
    return {
      searchType: this.$route.query.searchType,
      searchKeyword: this.$route.query.searchKeyword,
      page: this.$route.query.page,
    };
  },
  computed: {
    category() {
      return this.$route.params.categoryName;
    },
    subCategory() {
      return this.$route.params.subCategoryName;
    },
  },
  methods: {
    ...mapActions(["GET_BOARDLISTS"]),
    fetchTrades() {
      this.GET_BOARDLISTS({
        category: this.category,
        subCategory: this.subCategory,
        searchType: this.searchType,
        searchKeyword: this.searchKeyword,
        page: this.page,
      }).catch((err) => {
        console.log(err);
        if (err.response.status == 401) {
          this.$router.push("/auth/signin");
        }
      });
    },
    callBackPage(payload) {
      console.log('callBackPage', payload);
      this.page = payload.page;
      this.searchType = payload.searchType;
      this.searchKeyword = payload.searchKeyword;
      this.fetchTrades();
    },
  },
  created() {
    this.fetchTrades();
  },
};
</script>

<style>
</style>