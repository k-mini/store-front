<template>
  <!-- Page Heading -->
  <h1 class="h3 mb-2 text-gray-800">Charts</h1>
  <p class="mb-4">
    Chart.js is a third party plugin that is used to generate the charts in this
    theme. The charts below have been customized - for further customization
    options, please visit the
    <a target="_blank" href="https://www.chartjs.org/docs/latest/"
      >official Chart.js documentation</a
    >.
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
            <area-chart></area-chart>
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
            <bar-chart></bar-chart>
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
            <pie-chart></pie-chart>
          <hr />
          Styling for the donut chart can be found in the
          <code>/js/demo/chart-pie-demo.js</code> file.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AreaChart from '../chart/AreaChart.vue';
import BarChart from '../chart/BarChart.vue';
import PieChart from '../chart/PieChart.vue';
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