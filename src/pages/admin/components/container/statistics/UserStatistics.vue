<template>
  <!-- Page Heading -->
  <h1 class="h3 mb-2 text-gray-800">유저 통계 게시판</h1>

  <!-- Content Row -->
  <div class="row">
    <div class="col-xl-8 col-lg-7">
      <!-- Area Chart -->
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">
            유저 월별 가입자수 추이
          </h6>
        </div>
        <div class="card-body">
          <div class="chart-area">
            <Line
              v-if="joinLoaded"
              :data="userJoinData"
              :options="userJoinOptions"
            ></Line>
          </div>
          <hr />
          유저 월별 가입자수 차트
        </div>
      </div>

      <!-- Bar Chart -->
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">유저 연령대</h6>
        </div>
        <div class="card-body">
          <div class="chart-bar">
            <Bar
              v-if="ageLoaded"
              :data="userAgeData"
              :options="userAgeOptions"
            ></Bar>
          </div>
          <hr />
          사용자 연령대
        </div>
      </div>
    </div>

    <!-- 성비 차트 -->
    <div class="col-xl-4 col-lg-5">
      <div class="card shadow mb-4">
        <!-- Card Header - Dropdown -->
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">유저 남/녀 비율</h6>
        </div>
        <!-- Card Body -->
        <div class="card-body">
          <div class="chart-pie pt-4">
            <Pie
              v-if="ratioLoaded"
              :type="userRatioType"
              :data="userRatioData"
              :options="userRatioOptions"
            ></Pie>
          </div>
          <hr />
          사용자 남/녀 비율
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Line, Pie, Bar } from "vue-chartjs";
import {
  initUserJoinData,
  userJoinOptions,
} from "../../../assets/js/statistics/user/userJoin";
import {
  initUserRatioData,
  userRatioType,
  userRatioOptions,
} from "../../../assets/js/statistics/user/userRatio";
import {
  initUserAgeData,
  userAgeOptions,
} from "../../../assets/js/statistics/user/userAge";
import { mapActions } from "vuex";

export default {
  components: {
    Line,
    Pie,
    Bar,
  },
  data() {
    return {
      // 유저 월 별 가입자수 차트
      //   userJoinData: {
      //     labels: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
      //     datasets: [
      //     {
      //         label: "2024년",
      //         lineTension: 0.3, // 선 휘는 정도
      //         pointRadius: 3, // 값에 해당하는 원의 반지름
      //         pointHoverRadius: 15, // 값에 포인터 접근시 원의 반지름
      //         pointHitRadius: 15, // 포인터 이벤트 발동 범위
      //         pointBorderWidth: 2, // 값 해당하는 원의 경계면 두께
      //         data: [
      //             0, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000,
      //             25000, 41000,
      //         ],
      //     },
      //     {
      //         label: "2023년",
      //         lineTension: 0.3,
      //         pointRadius: 3,
      //         pointHoverRadius: 15,
      //         pointHitRadius: 15,
      //         pointBorderWidth: 2,
      //         data: [
      //             0, 11000, 4000, 17000, 8000, 3000, 15000, 27000, 19000, 25000,
      //             24000, 43000,
      //         ],
      //     },
      // ],
      //   },
      userJoinData: initUserJoinData(),
      userJoinOptions: userJoinOptions,
      // 유저 월 별 가입자수 차트 종료

      // 유저 남녀 비율 차트
      userRatioType: userRatioType,
      userRatioData: initUserRatioData(),
      userRatioOptions: userRatioOptions,
      // 유저 남녀 비율 차트 종료

      // 유저 연령대 차트
      userAgeData: initUserAgeData(),
      userAgeOptions: userAgeOptions,
      // 유저 연령대 차트 종료

      joinLoaded: false,
      ratioLoaded: false,
      ageLoaded: false,
    };
  },
  methods: {
    ...mapActions([
      "FETCHED_USER_JOIN_STATISTICS",
      "FETCHED_USER_RATIO_STATISTICS",
      "FETCHED_USER_AGE_STATISTICS",
    ]),
  },
  mounted() {
    this.FETCHED_USER_JOIN_STATISTICS()
      .then((res) => {
        let chartData = res.data.data;
        let newDataSet = chartData.datasets[0];
        this.userJoinData.datasets.push(newDataSet);
        this.joinLoaded = true;
      })
      .catch((err) => {
        console.log(err);
      });

    this.FETCHED_USER_RATIO_STATISTICS()
      .then((res) => {
        let chartData = res.data.data;
        let newDataSet = chartData.datasets[0];
        this.userRatioData.datasets[0] = newDataSet;
        this.ratioLoaded = true;
      })
      .catch((err) => {
        console.log(err);
      });

    this.FETCHED_USER_AGE_STATISTICS()
      .then((res) => {
        let chartData = res.data.data;
        let newDataSet = chartData.datasets[0];
        this.userAgeData.datasets[0] = newDataSet;
        this.ageLoaded = true;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style>
</style>