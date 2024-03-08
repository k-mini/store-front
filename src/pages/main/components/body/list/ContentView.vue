<template>
    <component :is="componentLoader" />
</template>

<script>
import TradeList from "./TradeList.vue";
import CommunityList from "./CommunityList.vue";
export default {
  computed: {
    componentLoader() {
      // console.log('componentLoader');
      const path = this.$route.params.categoryName;
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