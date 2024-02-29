<template>
  <!-- Page Heading -->
  <h1 class="h3 mb-2 text-gray-800">댓글 관리 페이지</h1>
  <p class="mb-4"></p>

  <!-- DataTales Example -->
  <div class="card shadow mb-4">
    <div class="card-header py-3">
      <h6 class="m-0 font-weight-bold text-primary">댓글 테이블</h6>
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
import $ from "jquery";
import DataTable from "datatables.net-vue3";
import DataTablesCore from "datatables.net-bs5";
import { deleteComment, deleteComments } from '../../api/commentApi';

const columns = [
  {
    data: "",
    title: "체크 박스",
    footer: '<input type="checkbox" name="checkall" id="checkall">',
    render: function(data, type, row) {
      if (type === "display") {
        // console.log(row);
        if (data) {
          return `<input type="checkbox" id="comment${row.commentId}" checked="${data}">`;
        } else {
          return `<input type="checkbox" id="comment${row.commentId}">`;
        }
      }
      return data;
    },
    defaultContent: "",
    className: "select-checkbox",
  },
  {
    data: "commentId",
    title: "댓글 번호",
    footer: "댓글 번호",
    render: function(data, type) {
      if (type === "display") {
        return '<a href="/admin">' + data + "</a>";
      }

      return data;
    },
  },
  { data: "content", title: "댓글 내용", footer: "댓글 내용" },
  { data: "boardId",
   title: "게시물 번호",
    footer: "게시물 번호",
    render: function(data, type) {
      if (type === "display") {
        return '<a href="/admin">' + data + "</a>";
      }

      return data;
    },
  },
  { data: "topCommentId", title: "상위 댓글 번호", footer: "상위 댓글 번호" },
  { data: "userId", title: "작성자 번호", footer: "작성자 번호" },
  { data: "username", title: "작성자 이름", footer: "작성자 이름" },
  { data: "createdDate", title: "생성 날짜", footer: "생성 날짜" },
  {
    data: "lastModifiedDate",
    title: "마지막 수정 날짜",
    footer: "마지막 수정 날짜",
  },
  {
    data: null,
    title: "삭제",
    footer: `<button type="button" class="btn btn-primary" id="comment-delete-button-selected">선택 삭제</button>`,
    defaultContent: "",
    render: function(data, type, row) {
      if (type === "display") {
        return `<button type="button" class="btn btn-primary" id="comment-delete-button-${row.commentId}">삭제</button>`;
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

  initComplete: function () {
    console.log('initComplete 시작');
    let api = this.api();
    $("#checkall").prop("checked", false);

    // 전체 선택 이벤트 등록
    $("#checkall").on("click", function () {
      var value = $(this).prop("checked");
      api.cells(".select-checkbox").every(function (rowIdx, colIdx) {
        api.cell(rowIdx, colIdx).data(value);
      });
    });

    // 선택 삭제 이벤트 등록
    $(`#comment-delete-button-selected`).on("click", function () {
      let commentIds = [];
      api
        .rows()
        .data()
        .each(function (row) {
          if ($(`#comment${row.commentId}`).prop("checked") === true) {
            commentIds.push(row.commentId);
          }
        });
      console.log(commentIds);
      
      if (commentIds.length == 0) {
        alert('아무것도 선택되지 않았습니다.');
        return ;
      }

      deleteComments(commentIds)
        .then(() => {
          console.log("성공");
          api.draw();
        })
        .catch((err) => {
          console.log(err);
        });
    });
  },

  drawCallback: function () {
    console.log('drawCallback 시작');
    let api = this.api();
    $("#checkall").prop("checked", false);

    // 개별 버튼 유저 삭제 이벤트 등록
    api
      .column(-1)
      .data()
      .each(function (row) {
        // console.log(row);
        $(`#comment-delete-button-${row.commentId}`).on("click", function () {
          deleteComment(
            row.commentId,
          )
            .then(() => {
              api.draw();
            })
            .catch((err) => {
              console.log(err);
            });
        });
      });

    // footer 모양 깨짐 조정
    $(api.column(0).footer()).removeClass('dt-type-numeric');
  },
};

const ajax = {
  url: "http://localhost:9090/api/admin/comments",
  type: "GET",
  data: function (data) {
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