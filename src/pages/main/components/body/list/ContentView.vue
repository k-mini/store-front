<template>
    <component :is="componentLoader" />
</template>

<script>
import TradeList from "./TradeList.vue";
import CommunityList from "./CommunityList.vue";
import { mapGetters, mapMutations } from 'vuex';

export default {
  methods: {
    ...mapGetters(['getCategoryMap']),
    ...mapMutations(['SET_TITLE'],)
  },
  computed: {
    componentLoader() {
      console.log('componentLoader');
      const path = this.$route.params.categoryName;
      const subCategoryName = this.$route.params.subCategoryName;
      const categoryMap = this.getCategoryMap()
      this.SET_TITLE(categoryMap.get(subCategoryName.toUpperCase()) + ' 게시판');
      if (path == "trade") {
        return TradeList;
      } else if (path == "community") {
        return CommunityList;
      }
      return null;
    },
  },
};
</script>