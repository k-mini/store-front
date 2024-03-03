<template>
  <!-- Page Heading -->
  <h1 class="h3 mb-2 text-gray-800">게시물 통계 게시판</h1>
  <!-- <p class="mb-4">BoardStatistics 입니다.</p> -->

  <!-- Content Row -->
  <div class="row">
    <div class="col-xl-12 col-lg-12">
      <!-- Line Chart -->
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">
            게시물 월별 작성 추이
          </h6>
        </div>
        <div class="card-body">
          <Line
            :data="totalData"
            :options="totalOptions"
            ref="areachart"
          ></Line>
          <hr />
          월별 게시물 작성 수
        </div>
      </div>

      <!-- 카테고리별 작성 수 Bar 차트 -->
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">카테고리별 작성 수</h6>
        </div>
        <div class="card-body">
          <div class="chart-bar">
            <!-- <bar-chart></bar-chart> -->
            <!-- <Bar :data="categoryData" :options="categoryOptions"></Bar> -->
            <Bar :data="categoryData2" :options="categoryOptions"></Bar>
          </div>
          <hr />
          월별 카테고리별 작성 수
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Line, Bar } from "vue-chartjs";
import {
  totalData,
  totalOptions,
} from "../../../assets/js/statistics/board/boardTotal";
import {
  categoryData2,
  categoryOptions,
} from "../../../assets/js/statistics/board/boardCategory";

// let defaultDataSet =
// {
//   label: "2024년",
//   lineTension: 0.3, // 선 휘는 정도
//   pointRadius: 3, // 값에 해당하는 원의 반지름
//   pointHoverRadius: 15, // 값에 포인터 접근시 원의 반지름
//   pointHitRadius: 15, // 포인터 이벤트 발동 범위
//   pointBorderWidth: 2, // 값 해당하는 원의 경계면 두께
//   data: [
//     0, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000,
//     25000, 41000,
//   ],
// };

export default {
  components: {
    Line,
    Bar,
  },
  data() {
    return {
      // 게시물 월별 이용자수 차트
      totalData: totalData,
      totalOptions: totalOptions,
      // 게시물 월별 이용자수 차트 종료

      // 게시물 카테고리별 작성 수 차트
      categoryData2: categoryData2,
      categoryOptions: categoryOptions,
      // categoryData2: {
      //   labels: ["10대", "20대", "30대", "40대", "50대", "60대"],
      //   datasets: [
      //     {
      //       label: "월별 카테고리별 작성 수",
      //       data: [5600, 17000, 24536, 12000, 9821, 4984],
      //       // backgroundColor: "#38ABF2",
      //     },
      //   ],
      // },
      // categoryOptions: {
      //   maintainAspectRatio: false,
      //   layout: {
      //     padding: {
      //       left: 10,
      //       right: 25,
      //       top: 25,
      //       bottom: 0,
      //     },
      //   },
      //   scales: {
      //     x: {
      //       // time: {
      //       //     unit: "month",
      //       // },
      //       ticks: {
      //         maxTicksLimit: 6,
      //       },
      //       grid: {
      //         display: false,
      //       },
      //       border: {
      //         display: false,
      //       },
      //       maxBarThickness: 25,
      //     },
      //     y: {
      //       ticks: {
      //         min: 0,
      //         max: 15000,
      //         maxTicksLimit: 5,
      //         padding: 10,
      //         callback: function (value) {
      //           // ,index,ticks) {
      //           return `${value}명`;
      //         },
      //       },
      //       grid: {
      //         color: "rgb(234, 236, 244)",
      //         borderDash: [2],
      //       },
      //       border: {
      //         display: false,
      //       },
      //     },
      //   },
      //   plugins: {
      //     legend: {
      //       display: true,
      //     },
      //     tooltip: {
      //       titleMarginBottom: 10,
      //       titleColor: "#6e707e",
      //       backgroundColor: "rgb(255,255,255)",
      //       bodyColor: "#858796",
      //       borderColor: "#dddfeb",
      //       borderWidth: 1,
      //       padding: {
      //         x: 15,
      //         y: 15,
      //       },
      //       displayColors: false,
      //       caretPadding: 10,
      //       callbacks: {
      //         label: function (tooltipItem) {
      //           let chart = tooltipItem.chart;
      //           var datasetLabel =
      //             chart.data.datasets[tooltipItem.datasetIndex].label || "";
      //           return `${datasetLabel} : ${tooltipItem.raw}명`;
      //         },
      //       },
      //     },
      //   },
      // },
      // 게시물 카테고리별 작성 수 차트 종료

        cnt: 1,
    };
  },
  watch: {
    data: {
      handler() {
        this.$refs.areachart.chart.update();
      },
      deep: true,
    },
  },
  created() {
    console.log('boardStatistics 생성됨');
  },
  destoryed() {
    console.log('파괴딤');
  },
  mounted() {
    this.cnt += 1;
    console.log(this.cnt);
    // setTimeout(() => {
    // this.data.datasets[0].data =
    // [20000, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000, 25000, 41000];
    // 이 방법은 되나 data 불일치 발생
    // this.$refs.areachart2.chart.data.datasets[0].data = [20000, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000, 25000, 41000];
    // this.$refs.areachart2.chart.update();
    // }, 3000);
  },
};
</script>

<style>
</style>