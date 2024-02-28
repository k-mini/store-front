<template>
  <!-- Page Heading -->
  <h1 class="h3 mb-2 text-gray-800">게시물 관리 페이지</h1>
  <p class="mb-4">
    <!-- DataTables is a third party plugin that is used to generate the demo table
      below. For more information about DataTables, please visit the
      <a target="_blank" href="https://datatables.net"
        >official DataTables documentation</a
      >. -->
  </p>

  <!-- DataTales Example -->
  <div class="card shadow mb-4">
    <div class="card-header py-3">
      <h6 class="m-0 font-weight-bold text-primary">게시물 테이블</h6>
    </div>
    <div class="card-body">
      <div class="table-responsive">
        <data-table
          :columns="columns"
          :options="options"
          :ajax="ajax"
          class="table table-hover table-striped"
        >
        </data-table>
      </div>
    </div>
  </div>
</template>
  
<script>
import $ from 'jquery';
import DataTable from "datatables.net-vue3";
import DataTablesCore from "datatables.net-bs5";
import { deleteBoard } from '../../api/boardApi';


const columns = [
  {
    data: '',
    title: "체크 박스",
    footer: '<input type="checkbox" name="checkall" id="checkall">',
    render: function (data, type, row) {
      if (type === "display") {
        // console.log(row);
        if (data) {
          return `<input type="checkbox" id="board${row.boardId}" checked="${data}">`;
        } else {
          return `<input type="checkbox" id="board${row.boardId}">`;
        }
      }
      return data;
    },
    defaultContent: "",
    className: "select-checkbox",
  },
  {
    data: "boardId",
    title: "게시물 번호",
    footer: "게시물 번호",
    render: function (data, type) {
      if (type === "display") {
        return '<a href="/admin">' + data + "</a>";
      }

      return data;
    },
  },
  { data: "userId", title: "유저 번호", footer: "유저 번호" },
  { data: "username", title: "유저 이름", footer: "유저 이름" },
  { data: "title", title: "제목", footer: "제목" },
  { data: "content", title: "내용", footer: "내용" },
  { data: "views", title: "조회수", footer: "조회수" },
  { data: "category.categoryKoName", title: "카테고리", footer: "카테고리(한글)" },
  { data: "subCategory.categoryKoName", title: "서브 카테고리", footer: "서브 카테고리" },
  { data: "createdDate", title: "생성 날짜", footer: "생성 날짜" },
  {
    data: "lastModifiedDate",
    title: "마지막 수정 날짜",
    footer: "마지막 수정 날짜",
  },
  {
    data: null,
    title: "삭제",
    footer: `<button type="button" class="btn btn-primary" id="board-delete-button-selected">선택 삭제</button>`,
    defaultContent: '',
    render(data, type, row) {
      if (type === "display") {
        return `<button type="button" class="btn btn-primary" id="board-delete-button-${row.boardId}">삭제</button>`;
      }
      return data;
    },
  },
];

const options = {
  responsive: true,
  select: true,
  serverSide: true,
  processing: true,
  initComplete: function() {
    var api = this.api();

    // 전체 선택 이벤트 등록
    $("#checkall").prop("checked", false);
    $("#checkall").on("click", function () {
      var value = $(this).prop("checked");
      api.cells('.select-checkbox')
      .every(function (rowIdx, colIdx) {
          api.cell(rowIdx, colIdx).data(value);
      });
    });

    // 선택 삭제 이벤트 등록
    $(`#board-delete-button-selected`).on("click", function() {
      var ids = [];
      api.rows()
        .data()
        .each(function(row){
          if ($(`#board${row.boardId}`).prop('checked') === true) {
            console.log( '체크 된 값: ' , row.boardId );
            ids.push(row.boardId);
          }
        });
      console.log(ids);
    })
  },
  drawCallback: function() {
    var api = this.api();

    // 개별 버튼 유저 삭제 이벤트 등록
    api.column(-1)
      .data()
      .each(function(row) {
        // console.log(row);
        $(`#board-delete-button-${row.boardId}`).on("click", function() {
          deleteBoard(row.boardId, row.category.categoryName, row.subCategory.categoryName)
            .then(() => {
              api.draw();
            })
            .catch((err) => {
              console.log(err);
            })
        })
      })
  },
};

const ajax = {
  url: "http://localhost:9090/api/admin/boards",
  type: "GET",
  // contentType: "application/json",
  data: function (data) {
    // data는 백엔드에 보낼 data 기본적인 파라미터들이 들어가 있다. ex) 페이징 처리용 파라미터도 있다.
    // data에 파라미터를 추가해서 내가 원하는 데이터들을 보낼 수 있다.
    data.page = data.start / data.length;
  },
  dataSrc: {
    data: "data.page.content",
    draw: "data.draw",
    recordsTotal: "data.page.totalElements",
    recordsFiltered: "data.page.totalElements",
  },
};

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
    };
  },
};
</script>
  
  <style>
</style>