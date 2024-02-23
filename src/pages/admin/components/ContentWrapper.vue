<template>
  <div id="content-wrapper" class="d-flex flex-column">
    <!-- Main Content -->
    <div id="content">
      <!-- Topbar -->
      <top-bar></top-bar>
      <!-- End of Topbar -->

      <!-- Begin Page Content -->
      <div class="container-fluid">
        
        <router-view></router-view>

      </div>
      <!-- /.container-fluid -->
    </div>
    <!-- End of Main Content -->

    <!-- Footer -->
    <footer-view></footer-view>
    <!-- End of Footer -->
  </div>
</template>

<script>
import TopBar from './topbar/TopBar.vue';
import FooterView from "./footer/FooterView.vue";
export default {
  components: {
    TopBar,
    FooterView,
  },
};
</script>

<style>
</style>