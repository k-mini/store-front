<template>
  <!-- Page Heading -->
  <h1 class="h3 mb-2 text-gray-800">Tables</h1>
  <p class="mb-4">
    DataTables is a third party plugin that is used to generate the demo table
    below. For more information about DataTables, please visit the
    <a target="_blank" href="https://datatables.net"
      >official DataTables documentation</a
    >.
  </p>

  <!-- DataTales Example -->
  <div class="card shadow mb-4">
    <div class="card-header py-3">
      <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
    </div>
    <div class="card-body">
      <div class="table-responsive">
        <DataTable
          :columns="columns"
          :options="options"
          :ajax="ajax"
          class="table table-hover table-striped"
        >
          <!-- <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Office</th>
              <th>Age</th>
              <th>Start date</th>
              <th>Salary</th>
            </tr>
          </thead> -->
          <!-- <tbody> -->
            <!-- 여기에 DataTables라이브러리가 ajax로 가져온 데이터들을 알아서 넣어준다. -->
          <!-- </tbody> -->
          <!-- <tfoot>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Office</th>
              <th>Age</th>
              <th>Start date</th>
              <th>Salary</th>
            </tr>
          </tfoot> -->
        </DataTable>
      </div>
    </div>
  </div>
</template>

<script>
import DataTable from "datatables.net-vue3";
// import DataTablesCore from "datatables.net";
// 부트스트랩 적용(4버전은 오류나서 5로 변경하니 동작됨)
import DataTablesCore from 'datatables.net-bs5';
// import 'datatables.net-searchpanes-bs4';

const columns = [
  { data: 'name', title: "Name", footer: "Name",

    // 뽑아온 데이터들을 4가지 타입(display, sort, filter, type)으로 호출해준다.
    // 데이터가 10개면 각각 타입별로 총 40번 호출.
    // 각 데이터들을 해당 타입에 맞는 용도로 바꿔줘야 함.
    // display: 화면뿌릴때 사용하는 데이터
    // sort: 정렬할 때 사용하는 데이터
    // filter: 검색할 때 사용하는 데이터
    // type: type detection data => 아마 타입을 찾을때 사용하는 데이터일듯 
    // ex) sort할때 쓰는 함수에서 각 테이블의 row에서 sort타입의 데이터를 꺼내서 쓰는 것 같다.
    render: function(data, type, row){
      if (type === 'display') {
        console.log(row);
        return '<a href="/admin">' + data + '</a>';
      }

      return data;
    }
  },
  { data: 'position',  title: "Position",  footer: "Position" },
  { data: 'office',    title: "Office",    footer: "Office" },
  { data: 'age',       title: "Age",       footer: "Age" },
  { data: 'startDate', title: "StartDate", footer: "StartDate" },
  { data: 'salary',    title: "Salary",    footer: "Salary" }
]

const options = {
  responsive: true,
  select: true,
  serverSide: true,
  processing: true,
  initComplete: function(settings, json) {
    console.log('initComplete 호출됨');
    console.log(settings, json);
  },
  // search: {
    // search: 'Tiger' // 초기 검색
  // },
  // searchCols: [
  //   {search: "test1"}, 컬럼 0번에 초기필터
  //   {search: "test2"}, 컬럼 1번에 초기필터
  //   {search: "test3"}, 컬럼 2번에 초기필터
  //   {search: "test4"}, 컬럼 3번에 초기필터
  //   {search: "test5"}, 컬럼 4번에 초기필터
  //   {search: "test6"}, 컬럼 5번에 초기필터
  // ],
};

const ajax = {
  url: "http://localhost:8080/api/dataTables",
  type: "POST",
  // contentType: "application/json",
  data: function(data) {
  // data는 백엔드에 보낼 data 기본적인 파라미터들이 들어가 있다. ex) 페이징 처리용 파라미터도 있다.
  // data에 파라미터를 추가해서 내가 원하는 데이터들을 보낼 수 있다.
    console.log("data callback 호출됨 ");
    console.log(data);

    // application/json 용
    // return JSON.stringify(data);

    // x-www-urlencoded (form data)
    return data;
  },
  // dataSrc는 서버로 부터 받은 데이터
  // 특정 형식으로 보내줘야 함. 자세한 내용은 매뉴얼 참고
  // https://datatables.net/manual/server-side
  // 아래 함수를 작성하는 이유는 특정 형식에 맞추기 위해서 
  // 서버에서 형식에 맞게 보내면 따로 수정할 필요없음.
  // dataSrc: function(json) {
  //   console.log("dataSrc callback 호출됨 ");
  //   // json은 서버로 부터 받은 데이터
  //   console.log(json);
  //   return json.data;
  // }
  // 서버로부터 받은 데이터가 기대했던 형식과 다를때
  // javascript dot으로 접근하는 표현식으로 표현해주면 된다.
  dataSrc: {
    data: "data",
    draw: "draw",
    // 함수형으로도 가능
    // 데이터베이스에 있는 총 개수
    recordsTotal: function(res) {
      // console.log("recoredsTotal 찾기");
      // console.log(res);
      return res.recordsTotal;
    },
    // 해당 조건으로 조회되는 총 개수
    // 만약 특정한 조건이 없으면 recordsTotal과 동일
    recordsFiltered: "recordsFiltered", 
  }
}

DataTable.use(DataTablesCore);


export default {
  components: {
    DataTable
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
/* @import "bootstrap"; */
@import "datatables.net-bs5";
</style>