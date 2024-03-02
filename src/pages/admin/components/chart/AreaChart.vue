<template>
  <div class="chart-area">
    <canvas id="myAreaChart" ref="myAreaChart"></canvas>
  </div>
</template>

<script>
import { number_format } from "../../assets/js/common.js";

let myLineChart;
export default {
  props: ["labels", "fetchedData"],
  watch: {
    fetchedData() {
      // 데이터 변경됨
      this.updateData(this.fetchedData);
    },
  },
  methods: {
    addDataSet(newDataSet) {
      myLineChart.data.datasets.push(newDataSet);
      myLineChart.update();
    },
    updateData(newData) {
      myLineChart.data.datasets[0].data = newData;
      myLineChart.update();
    },
  },
  mounted() {
    var Chart = this.$_Chart;

    // Set new default font family and font color to mimic Bootstrap's default styling
    (Chart.defaults.font.family = "Nunito"),
      '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
    Chart.defaults.color = "#858796";

    // Area Chart Example
    var ctx = this.$refs.myAreaChart;

    let sampleData = [
      0, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000, 25000,
      41000,
    ];

    myLineChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "Earnings",
            lineTension: 0.3,
            backgroundColor: "rgba(78, 115, 223, 0.05)",
            borderColor: "rgba(78, 115, 223, 1)",
            pointRadius: 3,
            pointBackgroundColor: "rgba(78, 115, 223, 1)",
            pointBorderWidth: 2,
            pointBorderColor: "rgba(78, 115, 223, 1)",

            pointHoverRadius: 3,
            pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
            pointHoverBorderColor: "rgba(78, 115, 223, 1)",
            pointHitRadius: 10,
            data: sampleData,
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
            // time: {
            //   unit: "date",
            // },
            grid: {
              display: false,
            },
            ticks: {
              maxTicksLimit: 7,
            },
            border: {
              display: false,
            },
          },
          y: {
            ticks: {
              maxTicksLimit: 5,
              padding: 10,
              // Include a dollar sign in the ticks
              callback: function (value) {
                // ,index,ticks) {
                return "$" + number_format(value);
              },
            },
            grid: {
              color: "rgb(234, 236, 244)",
              drawBorder: false,
              borderDash: [2],
            },
          },
        },
        plugins: {
          legend: {
            display: true,
          },
          tooltip: {
            backgroundColor: "rgb(255,255,255)",
            bodyColor: "#858796",
            titleMarginBottom: 10,
            titleColor: "#6e707e",
            borderColor: "#dddfeb",
            borderWidth: 1,
            padding: {
              x: 15,
              y: 15,
            },
            displayColors: false,
            intersect: false,
            mode: "index",
            caretPadding: 10,
            callbacks: {
              label: function (tooltipItem) {
                let chart = tooltipItem.chart;
                var datasetLabel = chart.data.datasets[tooltipItem.datasetIndex].label || "";
                return datasetLabel + ": $" + number_format(tooltipItem.formattedValue);
              },
            },
          },
        },
      },
    });

    // let newData =
    // [ 0, 11000, 4000, 17000, 8000, 3000, 15000, 27000, 19000, 25000, 24000, 43000,];
    // var newDataSet = {
    //         label: "SampleData",
    //         lineTension: 0.3,
    //         backgroundColor: "rgba(241, 95, 95, 0.05)",
    //         borderColor: "rgba(241, 95, 95, 1)",
    //         pointRadius: 3,
    //         pointBackgroundColor: "rgba(241, 95, 95, 1)",
    //         pointBorderColor: "rgba(241, 95, 95, 1)",
    //         pointHoverRadius: 3,
    //         pointHoverBackgroundColor: "rgba(241, 95, 95, 1)",
    //         pointHoverBorderColor: "rgba(241, 95, 95, 1)",
    //         pointHitRadius: 10,
    //         pointBorderWidth: 2,
    //         data: newData,};

    // setTimeout(() =>{
    //   this.addDataSet(myLineChart,newDataSet);
    // }, 3000);

    // let newData2 =
    // [ 5000, 14000, 7000, 23000, 3000, 4000, 35000, 47000, 29000, 15000, 12500, 1000,];

    // setTimeout(() => {
    //   this.updateData(myLineChart, newData2);
    // }, 5000);
  },
};
</script>

<style>
</style>