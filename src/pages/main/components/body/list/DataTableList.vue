<template>
  <div class="relative py-3 overflow-x-auto">
    <data-table
      id="datatables"
      :columns="columns"
      :options="options"
      :ajax="ajax"
      class="display"
    >
    </data-table>
  </div>
</template>

<script>
import $ from 'jquery';
import { mapGetters } from "vuex";
import DataTable from "datatables.net-vue3";
import DataTablesCore from 'datatables.net-dt';
const columns = [
  { data: 'id', title: "게시물 번호", footer: "게시물 번호",
    render: function(data, type){
      if (type === 'display') {
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
  stateSave: true,
  preDrawCallback: function() {
    // console.log(settings);
    // settings.ajax.url = '/api' + window.document.location.pathname;
  }
};

const ajax = {
  url: `http://localhost:9090/api/boards/community/free`,
  type: "GET",
  // contentType: "application/json",
  data: function(data) {
    // console.log(data);
    var newData = {};
    var page = data.start / data.length ;

    data.page = page;
    newData.draw = data.draw;
    newData.page = data.page
    console.log('보낼 데이터', newData);
    return newData;
  },
  dataSrc: {
    data: "page.content",
    draw: "draw",
    recordsTotal: "page.totalElements",
    recordsFiltered: "page.totalElements",
  },
}
DataTable.use(DataTablesCore);

export default {
  components: {
    DataTable,
  },
  // props: [''],
  data() {
    return {
      columns: columns,
      options: options,
      ajax: ajax,
    }
  },
  watch: {
    catrgoey() {
      console.log('category 변경됨');
      $("#datatables").DataTable()
        .ajax.url(`/api/boards/${this.category}/${this.subCategory}`)
        .draw();
    },
    subCategory() {
      console.log('subCategory 변경 됨');
      $("#datatables").DataTable()
        .ajax.url(`/api/boards/${this.category}/${this.subCategory}`)
        .draw();
    },
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
