<template>
  <!-- Page Heading -->
  <h1 class="h3 mb-2 text-gray-800">Charts</h1>
  <p class="mb-4">
    CommentStatistics 입니다.
  </p>

  <!-- Content Row -->
  <div class="row">
    <div class="col-xl-8 col-lg-7">
      <!-- Area Chart -->
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">Area Chart</h6>
        </div>
        <div class="card-body">
          <div class="chart-area">
            <area-chart></area-chart>
          </div>
          <hr />
          Styling for the area chart can be found in the
          <code>/js/demo/chart-area-demo.js</code> file.
        </div>
      </div>

      <!-- Bar Chart -->
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">Bar Chart</h6>
        </div>
        <div class="card-body">
          <div class="chart-bar">
            <bar-chart></bar-chart>
          </div>
          <hr />
          Styling for the bar chart can be found in the
          <code>/js/demo/chart-bar-demo.js</code> file.
        </div>
      </div>
    </div>

    <!-- Donut Chart -->
    <div class="col-xl-4 col-lg-5">
      <div class="card shadow mb-4">
        <!-- Card Header - Dropdown -->
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">Donut Chart</h6>
        </div>
        <!-- Card Body -->
        <div class="card-body">
          <div class="chart-pie pt-4">
            <pie-chart></pie-chart>
          </div>
          <hr />
          Styling for the donut chart can be found in the
          <code>/js/demo/chart-pie-demo.js</code> file.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AreaChart from '../../chart/AreaChart.vue';
import BarChart from '../../chart/BarChart.vue';
import PieChart from '../../chart/PieChart.vue';

export default {
  components: {
    AreaChart,
    BarChart,
    PieChart,
  }
};
</script>

<style>
</style>