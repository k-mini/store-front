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
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Office</th>
              <th>Age</th>
              <th>Start date</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Office</th>
              <th>Age</th>
              <th>Start date</th>
              <th>Salary</th>
            </tr>
          </tfoot>
          <tbody>
            <!-- 여기에 DataTables라이브러리가 ajax로 가져온 데이터들을 알아서 넣어준다. -->
          </tbody>
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
  { data: 'name',

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
  { data: 'position'},
  { data: 'office'},
  { data: 'age' },
  { data: 'startDate'},
  { data: 'salary'}
]

const options = {
  responsive: true,
  select: true,
  serverSide: true,
  processing: true,
};

const ajax = {
  url: "http://localhost:8080/api/dataTables",
  type: "POST",
  // contentType: "application/json",
  // fnServerParams: function(aoData){
    // aoData.push({"test" : "1"});
  // }
  data: function(data) {
  //   console.log("data는 백엔드에 보낼 data 기본적인 파라미터들이 들어가 있다. ex) 페이지네이션");
    console.log(data);
    
    // application/json 용
    // return JSON.stringify(data);

    // x-www-urlencoded (form data)
    return data;
  },
  // dataSrc: function(json) {
    // console.log("dataSrc 호출됨 ");
    // json은 서버로 부터 받은 데이터
    // console.log(json);
    // return json;
  // }
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
@import "bootstrap";
@import "datatables.net-bs5";
</style>