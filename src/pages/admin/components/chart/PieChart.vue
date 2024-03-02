<template>
  <div class="chart-pie pt-4 pb-2">
    <canvas id="myPieChart" ref="myPieChart"></canvas>
  </div>
</template>

<script>
export default {
  mounted() {
    var Chart = this.$_Chart;

    // Set new default font family and font color to mimic Bootstrap's default styling
    (Chart.defaults.font.family = "Nunito"),
      '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
    Chart.defaults.color = "#858796";

    // Pie Chart Example
    // var ctx = document.getElementById("myPieChart");
    var ctx = this.$refs.myPieChart;

    var myPieChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Direct", "Referral", "Social"],
        datasets: [
          {
            data: [55, 30, 15],
            backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc"],
            hoverBackgroundColor: ["#2e59d9", "#17a673", "#2c9faf"],
            hoverBorderColor: "rgba(234, 236, 244, 1)",
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        plugins: {
          tooltip: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: "#dddfeb",
            borderWidth: 1,
            padding: {
              x: 15,
              y: 15,
            },
            displayColors: false,
            caretPadding: 10,
          },
          legend: {
            display: true,
          },
          cutout: 80,
        },
      },
    });
    console.log(myPieChart);
  },
};
</script>

<style>
</style>