<template>
    <!-- Page Heading -->
    <h1 class="h3 mb-2 text-gray-800">유저 관리 테이블</h1>
    <p class="mb-4">
    </p>
  
    <!-- DataTales Example -->
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">유저 명단</h6>
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
  import DataTable from "datatables.net-vue3";
  import DataTablesCore from "datatables.net-bs5";
  
  const columns = [
    {
      data: "commentId",
      title: "댓글 번호",
      footer: "댓글 번호",
      render: function (data, type) {
        if (type === "display") {
          return '<a href="/admin">' + data + "</a>";
        }
  
        return data;
      },
    },
    { data: "content", title: "댓글 내용", footer: "댓글 내용" },
    { data: "boardId", title: "게시물 번호", footer: "게시물 번호" },
    { data: "topCommentId", title: "상위 댓글 번호", footer: "상위 댓글 번호" },
    { data: "userId", title: "작성자 번호", footer: "작성자 번호" },
    { data: "username", title: "작성자 이름", footer: "작성자 이름" },
    { data: "createdDate", title: "생성 날짜", footer: "생성 날짜" },
    { data: "lastModifiedDate", title: "마지막 수정 날짜", footer: "마지막 수정 날짜" },
  ];
  
  const options = {
    responsive: true,
    select: true,
    serverSide: true,
    processing: true,
  };
  
  const ajax = {
    url: "http://localhost:8080/api/admin/comments",
    type: "GET",
    data: function (data) {
      data.page = data.start / data.length
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