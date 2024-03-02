<template>
  <div class="chart-bar">
    <canvas id="myBarChart" ref="myBarChart"></canvas>
  </div>
</template>

<script>
import { number_format } from "../../assets/js/common.js";
export default {
  mounted() {
    var Chart = this.$_Chart;

    // var ctx = document.getElementById("myBarChart");
    var ctx = this.$refs.myBarChart;

    var myBarChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            label: "Revenue",
            backgroundColor: "#4e73df",
            hoverBackgroundColor: "#2e59d9",
            borderColor: "#4e73df",
            data: [4215, 5312, 6251, 7841, 9821, 14984],
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        layout: {
          padding: {
            left: 10,
            right: 25,
            top: 25,
            bottom: 0,
          },
        },
        scales: {
          x: {
            time: {
              unit: "month",
            },
            gridLines: {
              display: false,
            },
            ticks: {
              maxTicksLimit: 6,
            },
            border: {
              display: false,
            },
            maxBarThickness: 25,
          },
          y: {
            ticks: {
              min: 0,
              max: 15000,
              maxTicksLimit: 5,
              padding: 10,
              // Include a dollar sign in the ticks
              callback: function (
                value
                // index,
                // values
              ) {
                return "$" + number_format(value);
              },
            },
            grid: {
              color: "rgb(234, 236, 244)",
              borderDash: [2],
            },
            border: {
              display: false,
            },
          },
        },
        plugins: {
          legend: {
            display: true,
          },
          tooltip: {
            titleMarginBottom: 10,
            titleColor: "#6e707e",
            backgroundColor: "rgb(255,255,255)",
            bodyColor: "#858796",
            borderColor: "#dddfeb",
            borderWidth: 1,
            padding: {
              x: 15,
              y: 15,
            },
            displayColors: false,
            caretPadding: 10,
            callbacks: {
              label: function(tooltipItem) {
                let chart = tooltipItem.chart;
                var datasetLabel = chart.data.datasets[tooltipItem.datasetIndex].label || "";
                return datasetLabel + ": $" + number_format(tooltipItem.formattedValue);
              },
            },
          },
        },
      },
    });
    console.log(myBarChart);
  },
};
</script>

<style>
</style>