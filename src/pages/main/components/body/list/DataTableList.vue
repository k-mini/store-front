<template>
  <div class="relative py-3 overflow-x-auto">
    <data-table
      :columns="columns"
      :options="options"
      :ajax="ajax"
      class="display"
    >
      <!-- <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="px-6 py-3">게시물 번호</th>
          <th scope="col" class="px-6 py-3">제목</th>
          <th scope="col" class="px-6 py-3">작성자</th>
          <th scope="col" class="px-6 py-3">조회 수</th>
          <th scope="col" class="px-6 py-3">댓글 수</th>
          <th scope="col" class="px-6 py-3">생성시간</th>
        </tr>
      </thead> -->
    </data-table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import DataTable from "datatables.net-vue3";
import DataTablesCore from 'datatables.net';

const columns = [
  { data: 'id', title: "게시물 번호", footer: "게시물 번호",
    render: function(data, type, row){
      if (type === 'display') {
        console.log(row);
        return '<a href="/admin">' + data + '</a>';
      }
      return data;
    }
  },
  { data: 'title',  title: "제목",  footer: "제목" },
  { data: 'username',    title: "작성자",    footer: "작성자" },
  { data: 'views',       title: "조회 수",       footer: "조회 수" },
  { data: 'commentsSize', title: "댓글 수", footer: "댓글 수" },
  { data: 'createdDate',    title: "생성시간",    footer: "생성시간" }
]

const options = {
  responsive: true,
  select: true,
  serverSide: true,
  processing: true,
};

const ajax = {
  url: "http://localhost:8080/api/boards/community/free",
  type: "GET",
  // contentType: "application/json",
  data: function(data) {
    // console.log(data);
    var newData = {};
    var page = data.start / data.length ;

    newData.page = page;
    newData.draw = data.draw;
    console.log('보낼 데이터', newData);
    return newData;
  },
  // dataSrc: function(res) {
  //   console.log('받은 데이터', res);
  //   return res.page.content;
  // }
  dataSrc: {
    data: "page.content",
    draw: "draw",
    recordsTotal: "page.totalElements",
    recordsFiltered: "page.totalElements",
  }
}

DataTable.use(DataTablesCore);

export default {
  components: {
    DataTable,
  },
  data() {
    return {
      columns: columns,
      options: options,
      ajax: ajax,
    }
  },
  computed: {
    ...mapGetters(["getPageResult"]),
    category() {
      return this.$route.params.categoryName;
    },
    subCategory() {
      return this.$route.params.subCategoryName;
    },
    pageAttr() {
      return this.$store.state.pageResult.pageAttr;
    },
  },
};
</script>

<style scoped>
/* @import "bootstrap"; */
/* @import "datatables.net-bs5"; */
</style>
