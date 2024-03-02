<template>
  <!-- Page Heading -->
  <h1 class="h3 mb-2 text-gray-800">유저 통계 게시판</h1>

  <!-- Content Row -->
  <div class="row">
    <div class="col-xl-8 col-lg-7">
      <!-- Area Chart -->
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">유저 월별 가입자수 추이</h6>
        </div>
        <div class="card-body">
          <div class="chart-area">
            <Line :data="userJoinData" :options="userJoinOptions"></Line>
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
            <Bar :data="userAgeData" :options="userAgeOptions"></Bar>
          </div>
          <hr />
          전체 이용자 연령대
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
            <Pie :type="userRatioType" :data="userRatioData" :options="userRatioOptions"></Pie>
          </div>
          <hr />
          전체 이용자 남/녀 비율
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Line, Pie, Bar } from "vue-chartjs";
import { userJoinData, userJoinOptions } from '../../../assets/js/statistics/user/userJoin';
import { userRatioType, userRatioData, userRatioOptions } from '../../../assets/js/statistics/user/userRatio';
import { userAgeData, userAgeOptions } from '../../../assets/js/statistics/user/userAge';

export default {
  components: {
    Line,
    Pie,
    Bar,
  },
  data() {
    return {

      // 유저 월 별 가입자수 차트
      userJoinData: userJoinData,
      userJoinOptions: userJoinOptions,
      // 유저 월 별 가입자수 차트 종료

      // 유저 남녀 비율 차트
      userRatioType: userRatioType,
      userRatioData: userRatioData,
      userRatioOptions: userRatioOptions,
      // 유저 남녀 비율 차트 종료

      // 유저 연령대 차트
      userAgeData: userAgeData,
      userAgeOptions: userAgeOptions,
      // 유저 연령대 차트 종료
    }
  }
};
</script>

<style>
</style>