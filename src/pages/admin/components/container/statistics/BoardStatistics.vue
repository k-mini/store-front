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
              v-if="writeLoaded"
              :data="writeData"
              :options="writeOptions"
          ></Line>
          <hr />
          월별 게시물 작성 수
        </div>
      </div>

      <!-- 카테고리별 작성 수 Bar 차트 -->
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">카테고리별 게시물 작성 추이</h6>
        </div>
        <div class="card-body">
          <div class="chart-bar">
            <!-- <bar-chart></bar-chart> -->
            <Bar 
                v-if="categoryLoaded"
                :data="categoryData" 
                :options="categoryOptions"></Bar>
          </div>
          <hr />
          카테고리별 게시물 작성 수
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Line, Bar } from "vue-chartjs";
import {
  initWriteData,
  writeOptions,
} from "../../../assets/js/statistics/board/boardWrite";
import {
  initCategoryData,
  categoryOptions,
} from "../../../assets/js/statistics/board/boardCategory";
import { mapActions } from 'vuex';

export default {
  components: {
    Line,
    Bar,
  },
  data() {
    return {
      // 게시물 월별 이용자수 차트
      writeData: initWriteData(),
      writeOptions: writeOptions,
      writeLoaded: false,
      writeYear: 2024,
      // 게시물 월별 이용자수 차트 종료

      // 게시물 카테고리별 작성 수 차트
      categoryData: initCategoryData(),
      categoryOptions: categoryOptions,
      categoryLoaded: false,
      categoryYear: 2024,
      // 게시물 카테고리별 작성 수 차트 종료
    };
  },
  methods : {
    ...mapActions(['FETCHED_BOARD_WRITE_STATISTICS',
            'FETCHED_BOARD_CATEGORY_STATISTICS'])
  },
  mounted() {
    this.FETCHED_BOARD_WRITE_STATISTICS({ year: this.writeYear })
      .then((res) => {
        let chartData = res.data.data;
        let newDataSet = chartData.datasets[0];
        this.writeData.datasets.push(newDataSet);
        this.writeLoaded = true;
      })
      .catch((err) => {
        console.log(err);
      });

    this.FETCHED_BOARD_CATEGORY_STATISTICS({ year: this.categoryYear })
      .then((res) => {
        let chartData = res.data.data;
        let newDataSet = chartData.datasets[0];
        this.categoryData.datasets[0] = newDataSet;
        this.categoryLoaded = true;
      })
      .catch((err) => {
        console.log(err);
      });

  },
};
</script>

<style>
</style>