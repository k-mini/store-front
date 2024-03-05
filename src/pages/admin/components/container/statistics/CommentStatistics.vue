<template>
  <!-- Page Heading -->
  <h1 class="h3 mb-2 text-gray-800">댓글 통계 게시판</h1>

  <!-- Content Row -->
  <div class="row">
    <div class="col-xl-8 col-lg-7">
      <!-- Area Chart -->
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">2024년도 댓글 작성 추이</h6>
        </div>
        <div class="card-body">
          <div class="chart-area">
            <Line 
                  v-if="writeLoaded"
                  :data="commentWriteData" 
                  :options="commentWriteOptions"/>
          </div>
          <hr />
          2024년에 작성된 댓글 수
        </div>
      </div>

      <!-- Bar Chart -->
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">2024년도 카테고리별 댓글 작성 비율</h6>
        </div>
        <div class="card-body">
          <div class="chart-pie">
            <Pie 
                v-if="categoryLoaded"
                :type="commentCategoryRatioType" 
                 :data="commentCommentCategoryRatioData" 
                 :options="commentCategoryRatioOptions"/>
          </div>
          <hr />
          2024년도에 작성된 댓글의 카테고리 별 비율
        </div>
      </div>
    </div>

    <!-- Donut Chart -->
    <div class="col-xl-4 col-lg-5">
      <div class="card shadow mb-4">
        <!-- Card Header - Dropdown -->
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">2024년도 댓글 작성 남/녀 비율</h6>
        </div>
        <!-- Card Body -->
        <div class="card-body">
          <div class="chart-pie pt-4">
            <Pie
                v-if="genderLoaded" 
                :type="commentGenderRatioType"
                :data="commentGenderRatioData"
                :options="commentGenderRatioOptions"/>
          </div>
          <hr />
          2024년도에 작성된 게시물에 작성한 댓글의 남/녀 성비 비율
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Line, Pie } from "vue-chartjs";
import {
  initCommentWriteData,
  commentWriteOptions
} from "../../../assets/js/statistics/comment/commentMonthCnt";
import {
  commentCategoryRatioType,
  initCommentCategoryRatioData,
  commentCategoryRatioOptions
} from "../../../assets/js/statistics/comment/commentCategoryRatio";
import {
  commentGenderRatioType,
  initCommentGenderRatioData,
  commentGenderRatioOptions,
} from "../../../assets/js/statistics/comment/commentGenderRatio";
import { mapActions } from 'vuex';

export default {
  components: {
    Line,Pie
  },
  data() {
    return {
      // 월별 댓글 작성 차트
      commentWriteData: initCommentWriteData(),
      commentWriteOptions: commentWriteOptions,
      writeYear: 2024,
      writeLoaded: false,
      // 월별 댓글 작성 차트

      // 댓글 카테고리 차트
      commentCategoryRatioType: commentCategoryRatioType,
      commentCommentCategoryRatioData: initCommentCategoryRatioData(),
      commentCategoryRatioOptions: commentCategoryRatioOptions,
      categoryYear: 2024,
      categoryLoaded: false,
      // 댓글 카테고리 차트

      // 댓글 성비 차트 
      commentGenderRatioType: commentGenderRatioType,
      commentGenderRatioData: initCommentGenderRatioData(),
      commentGenderRatioOptions: commentGenderRatioOptions,
      genderYear: 2024,
      genderLoaded: false,
      // 댓글 성비 차트
    }
  },
  methods: {
    ...mapActions(['FETCHED_COMMENT_WRITE_STATISTICS',
        'FETCHED_COMMENT_CATEGORY_STATISTICS',
        'FETCHED_COMMENT_GENDER_STATISTICS']),
  },
  mounted() {
    this.FETCHED_COMMENT_WRITE_STATISTICS({ year: this.writeYear })
      .then((res) => {
        let chartData = res.data.data;
        let newDataSet = chartData.datasets[0];
        this.commentWriteData.datasets.push(newDataSet);
        this.writeLoaded = true;
      })
      .catch((err) => {
        console.log(err);
      });

    this.FETCHED_COMMENT_CATEGORY_STATISTICS({ year: this.categoryYear })
      .then((res) => {
        let chartData = res.data.data;
        let newDataSet = chartData.datasets[0];
        console.log(newDataSet);
        this.commentCommentCategoryRatioData.datasets[0] = newDataSet;
        this.categoryLoaded = true;
      })
      .catch((err) => {
        console.log(err);
      });

    this.FETCHED_COMMENT_GENDER_STATISTICS({ year: this.genderYear })
      .then((res) => {
        let chartData = res.data.data;
        let newDataSet = chartData.datasets[0];
        this.commentGenderRatioData.datasets[0] = newDataSet;
        this.genderLoaded = true;
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
</script>

<style>
</style>