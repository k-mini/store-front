<template>
  <div id="wrapper">
    <!-- Sidebar -->
    <side-bar></side-bar>
    <!-- End of Sidebar -->

    <!-- Content Wrapper -->
    <content-wrapper></content-wrapper>
    <!-- End of Content Wrapper -->
  </div>
</template>

<script>
import SideBar from './sidebar/SideBar.vue'
import ContentWrapper from './ContentWrapper.vue'
export default {
  components: {
    SideBar,
    ContentWrapper,
  },
};
</script>
<style>
</style>