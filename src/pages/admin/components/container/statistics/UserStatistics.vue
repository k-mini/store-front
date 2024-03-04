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
            <!-- {{ this.userJoinYear }}년도  -->
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
          <h6 class="m-0 font-weight-bold text-primary">{{ this.userAgeYear }}년도 유저 연령대</h6>
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
          <h6 class="m-0 font-weight-bold text-primary">{{ this.userGenderRatioYear }}년도 유저 남/녀 비율</h6>
        </div>
        <!-- Card Body -->
        <div class="card-body">
          <div class="chart-pie pt-4">
            <Pie
              v-if="genderLoaded"
              :type="userGenderRatioType"
              :data="userGenderRatioData"
              :options="userGenderRatioOptions"
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
  initUserGenderRatioData,
  userGenderRatioType,
  userGenderRatioOptions,
} from "../../../assets/js/statistics/user/userGenderRatio";
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
      userJoinData: initUserJoinData(),
      userJoinOptions: userJoinOptions,
      userJoinYear: 2024,
      joinLoaded: false,
      // 유저 월 별 가입자수 차트 종료

      // 유저 남녀 비율 차트
      userGenderRatioType: userGenderRatioType,
      userGenderRatioData: initUserGenderRatioData(),
      userGenderRatioOptions: userGenderRatioOptions,
      userGenderRatioYear: 2024,
      genderLoaded: false,
      // 유저 남녀 비율 차트 종료

      // 유저 연령대 차트
      userAgeData: initUserAgeData(),
      userAgeOptions: userAgeOptions,
      userAgeYear: 2024,
      ageLoaded: false,
      // 유저 연령대 차트 종료

    };
  },
  methods: {
    ...mapActions([
      "FETCHED_USER_JOIN_STATISTICS",
      "FETCHED_USER_GENDER_RATIO_STATISTICS",
      "FETCHED_USER_AGE_STATISTICS",
    ]),
  },
  mounted() {
    this.FETCHED_USER_JOIN_STATISTICS({ year: this.userJoinYear })
      .then((res) => {
        let chartData = res.data.data;
        let newDataSet = chartData.datasets[0];
        this.userJoinData.datasets.push(newDataSet);
        this.joinLoaded = true;
      })
      .catch((err) => {
        console.log(err);
      });

    this.FETCHED_USER_GENDER_RATIO_STATISTICS({ year: this.userGenderRatioYear })
      .then((res) => {
        let chartData = res.data.data;
        let newDataSet = chartData.datasets[0];
        this.userGenderRatioData.datasets[0] = newDataSet;
        this.genderLoaded = true;
      })
      .catch((err) => {
        console.log(err);
      });

    this.FETCHED_USER_AGE_STATISTICS({ year: this.userAgeYear })
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