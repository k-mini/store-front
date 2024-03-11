<template>
  <section class="bg-[#F4F7FF] py-14 lg:py-20">
    <div class="container">
      <div class="-mx-4 flex flex-wrap">
        <div class="w-full px-4">
          <div
            class="wow fadeInUp relative mx-auto max-w-[780px] overflow-hidden rounded-lg bg-white py-14 px-8 text-center sm:px-12 md:px-[60px]"
            data-wow-delay=".15s"
          >
            <div class="mb-10 text-center">
              <router-link :to="`/`" class="mx-auto inline-block max-w-[160px]">
                <img src="../../assets/images/logo/logo.svg" alt="logo" />
              </router-link>
            </div>

            <form method="post" v-on:submit.prevent="saveBoard">
              <div class="mb-6">
                <div class="flex items-center md:justify-start mb-3">
                  <label
                    for="message"
                    class="mx-2 my-1 text-2xl font-bold text-dark"
                    >제목</label
                  >
                </div>
                <input
                  v-model="boardTitle"
                  type="text"
                  placeholder="제목을 입력해 주세요"
                  class="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none transition focus:border-primary focus-visible:shadow-none"
                />
              </div>

              <div class="mb-6">
                <div class="flex items-center md:justify-start mb-3">
                  <label
                    class="mx-2 my-1 text-2xl font-bold text-dark"
                    >카테고리</label
                  >
                </div>
                <select
                  v-model="categoryValue"
                  class="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="" selected>카테고리</option>
                  <option v-for="category in categories" 
                         :key="category.categoryName" :value="category.categoryName.toLowerCase()">
                  {{ category.categoryKoName }}
                  </option>
                  <!-- <option value="U11">United States</option> -->
                  <!-- <option value="C11">Canada</option> -->
                </select>
              </div>

              <div class="mb-6">
                <div class="flex items-center md:justify-start mb-3">
                  <label
                    class="mx-2 my-1 text-2xl font-bold text-dark"
                    >서브 카테고리</label
                  >
                </div>
                <select
                  v-model="subCategoryValue"
                  class="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="" selected>서브 카테고리</option>
                  <option v-for="category in subCategories" 
                         :key="category.categoryName" :value="category.categoryName.toLowerCase()">
                  {{ category.categoryKoName }}
                  </option>
                </select>
              </div>

              <div class="mb-6">
                <div class="flex items-center md:justify-start">
                  <label
                    class="mx-2 my-1 text-2xl font-bold text-dark"
                    >사진</label
                  >
                </div>
                <div class="filebox" style="margin: 20px 0px">
                  <input
                    class="upload-name"
                    value="첨부파일"
                    placeholder="첨부파일"
                    readonly
                  />
                  <label for="files">파일찾기</label>
                  <input type="file" id="files" multiple/>
                </div>

                <div style="margin: 20px 15px">
                  <img id="fileImage" />
                </div>
              </div>

              <div class="kakaoMapWrapper">
                <div id="kakaoMap" style="height: 400px;">
                </div>
              </div>

              <div class="mb-6">
                <div class="flex items-center md:justify-start">
                  <label
                    for="message"
                    class="mx-2 my-1 text-2xl font-bold text-dark mb-3"
                    >내용</label
                  >
                </div>
                <textarea
                  v-model="content"
                  rows="15"
                  class="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none transition focus:border-primary focus-visible:shadow-none"
                  placeholder="내용을 입력해 주세요"
                ></textarea>
              </div>

              <div class="px-10 mb-10">
                <input
                  id="board-save"
                  type="submit"
                  value="글쓰기"
                  class="bordder-primary w-full cursor-pointer rounded-md border bg-primary py-3 px-5 text-base text-white transition duration-300 ease-in-out hover:shadow-md"
                />
              </div>

            </form>

            <div>
              <span class="absolute top-1 right-1">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="1.39737"
                    cy="38.6026"
                    r="1.39737"
                    transform="rotate(-90 1.39737 38.6026)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="1.39737"
                    cy="1.99122"
                    r="1.39737"
                    transform="rotate(-90 1.39737 1.99122)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="13.6943"
                    cy="38.6026"
                    r="1.39737"
                    transform="rotate(-90 13.6943 38.6026)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="13.6943"
                    cy="1.99122"
                    r="1.39737"
                    transform="rotate(-90 13.6943 1.99122)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="25.9911"
                    cy="38.6026"
                    r="1.39737"
                    transform="rotate(-90 25.9911 38.6026)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="25.9911"
                    cy="1.99122"
                    r="1.39737"
                    transform="rotate(-90 25.9911 1.99122)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="38.288"
                    cy="38.6026"
                    r="1.39737"
                    transform="rotate(-90 38.288 38.6026)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="38.288"
                    cy="1.99122"
                    r="1.39737"
                    transform="rotate(-90 38.288 1.99122)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="1.39737"
                    cy="26.3057"
                    r="1.39737"
                    transform="rotate(-90 1.39737 26.3057)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="13.6943"
                    cy="26.3057"
                    r="1.39737"
                    transform="rotate(-90 13.6943 26.3057)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="25.9911"
                    cy="26.3057"
                    r="1.39737"
                    transform="rotate(-90 25.9911 26.3057)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="38.288"
                    cy="26.3057"
                    r="1.39737"
                    transform="rotate(-90 38.288 26.3057)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="1.39737"
                    cy="14.0086"
                    r="1.39737"
                    transform="rotate(-90 1.39737 14.0086)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="13.6943"
                    cy="14.0086"
                    r="1.39737"
                    transform="rotate(-90 13.6943 14.0086)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="25.9911"
                    cy="14.0086"
                    r="1.39737"
                    transform="rotate(-90 25.9911 14.0086)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="38.288"
                    cy="14.0086"
                    r="1.39737"
                    transform="rotate(-90 38.288 14.0086)"
                    fill="#3056D3"
                  />
                </svg>
              </span>
              <span class="absolute left-1 bottom-1">
                <svg
                  width="29"
                  height="40"
                  viewBox="0 0 29 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="2.288"
                    cy="25.9912"
                    r="1.39737"
                    transform="rotate(-90 2.288 25.9912)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="14.5849"
                    cy="25.9911"
                    r="1.39737"
                    transform="rotate(-90 14.5849 25.9911)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="26.7216"
                    cy="25.9911"
                    r="1.39737"
                    transform="rotate(-90 26.7216 25.9911)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="2.288"
                    cy="13.6944"
                    r="1.39737"
                    transform="rotate(-90 2.288 13.6944)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="14.5849"
                    cy="13.6943"
                    r="1.39737"
                    transform="rotate(-90 14.5849 13.6943)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="26.7216"
                    cy="13.6943"
                    r="1.39737"
                    transform="rotate(-90 26.7216 13.6943)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="2.288"
                    cy="38.0087"
                    r="1.39737"
                    transform="rotate(-90 2.288 38.0087)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="2.288"
                    cy="1.39739"
                    r="1.39737"
                    transform="rotate(-90 2.288 1.39739)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="14.5849"
                    cy="38.0089"
                    r="1.39737"
                    transform="rotate(-90 14.5849 38.0089)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="26.7216"
                    cy="38.0089"
                    r="1.39737"
                    transform="rotate(-90 26.7216 38.0089)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="14.5849"
                    cy="1.39761"
                    r="1.39737"
                    transform="rotate(-90 14.5849 1.39761)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="26.7216"
                    cy="1.39761"
                    r="1.39737"
                    transform="rotate(-90 26.7216 1.39761)"
                    fill="#3056D3"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import $ from "jquery";
import { mapActions, mapGetters, mapMutations } from "vuex";
import { fetchImage } from "../../api/boardApi";

export default {
  props: ["title"],
  data() {
    return {
      boardTitle: "",
      content: "",
      categoryValue: '',
      subCategoryValue: '',
    };
  },
  computed: {
    ...mapGetters(["getPageDetail", "getCategories"]),
    boardId() {
      return this.$route.params.boardId;
    },
    categories() {
      console.log('categories 계산 시작');
      var result = [];
      for (var category of this.getCategories) {
        if (category.categoryName == 'ALL') {
          continue;
        }
        result.push({
          categoryName: category.categoryName,
          categoryKoName: category.categoryKoName,
        })
      }
      return result;
    },
    subCategories() {
      console.log('subCategories 계산 시작');
      var result = [];
      for (var category of this.getCategories) {
        for (var subCategory of category.subCategories) {
          if (this.categoryValue != category.categoryName.toLowerCase()) {
            continue;
          }
          result.push({
            categoryName: subCategory.categoryName,
            categoryKoName: subCategory.categoryKoName, 
          });
        }
      }
      return result;
    },
  },
  methods: {
    ...mapActions(["CREATE_BOARD", "UPDATE_BOARD", "GET_PAGE_DETAIL"]),
    ...mapMutations(['SET_PAGE_DETAIL']),
    saveBoard() {
      let file = $("#files")[0].files[0];
      let files = $("#files")[0].files;
      let category = this.categoryValue;
      let subCategory = this.subCategoryValue;
      let boardId = this.boardId;
      let params = {
        title: this.boardTitle,
        content: this.content,
        file: file,
        files: files,
        latitude: this.latitude,
        longitude: this.longitude,
      };

      // 생성
      if (boardId == undefined) {
        this.CREATE_BOARD({ category, subCategory, params })
          .then(() => {
            console.log("게시물 생성 성공");
            this.$router.push(`/boards/${category}/${subCategory}`);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        this.UPDATE_BOARD({ category, subCategory, boardId, params })
          .then(() => {
            console.log("게시물 수정 성공");
            this.$router.push(`/boards/${category}/${subCategory}`);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    namingUploadFileName() {
      var fileName = $("#files").val();
      var fileList = $('#files')[0].files;
      if (fileList.length == 1) {
        $(".upload-name").val(fileName);
      } else {
        $(".upload-name").val(fileName + ' 외 ' + (fileList.length - 1) + '개' );
      }
    },
    async initModifyingForm() {
      if (this.getPageDetail == null) {
        console.log('상세정보가 없으므로 로딩합니다.');
        await this.GET_PAGE_DETAIL({
          category: this.$route.params.category,
          subCategory: this.$route.params.subCategory,
          boardId: this.$route.params.boardId,
        });
      }
      this.boardTitle = this?.getPageDetail?.title;
      this.content = this?.getPageDetail?.content;
      this.categoryValue = this.$route.params.category;
      this.subCategoryValue = this.$route.params.subCategory;
      let thumbnailUrl = this?.getPageDetail?.boardThumbnail;

      if (thumbnailUrl != undefined) {
        let url = `http://localhost:9090/images/${thumbnailUrl}`;
        fetchImage(thumbnailUrl).then((res) => {
          let ext = url.split(".").pop();
          let fileName = url.split("/").pop();
          let file = new File([res], fileName, { type: `image/${ext}` });

          const dataTransfer = new DataTransfer();
          dataTransfer.items.add(file);

          // fileList 등록
          $("#files")[0].files = dataTransfer.files;

          // filePath 등록
          let filePath = $("#files").val();
          $(".upload-name").val(filePath);
          $("#fileImage").attr("src", url);
        });
      }
    },
    initNewWritingForm() {
      // this.initKakaoMap();
      this.categoryValue = this.$route.params.category;
      this.subCategoryValue = this.$route.params.subCategory;
      this.SET_PAGE_DETAIL(null);
    },
    // initKakaoMap() {
    //   var container = document.getElementById("map");
    //   var options = {
    //     center: new window.kakao.maps.Lating(33.450701, 126.570667),
    //     level: 3
    //   }
    //   var map = new window.kakao.maps.Map(container, options);
    //   console.log(map);
    // },
    initMap() {
      const container = document.getElementById("kakaoMap");
      const options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        level: 5,
      };

      //지도 객체를 등록합니다.
      //지도 객체는 반응형 관리 대상이 아니므로 initMap에서 선언합니다.
      this.map = new window.kakao.maps.Map(container, options);

      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        let currentLatitude = position.coords.latitude;
        let currentLongitude = position.coords.longitude;
        console.log('현재 위치 : ',currentLatitude, currentLongitude);
        var moveLatLng = new window.kakao.maps.LatLng(currentLatitude,currentLongitude);
        this.map.setCenter(moveLatLng);

        // 마커 생성
        var marker = new window.kakao.maps.Marker({
          position: null
        });
        // 지도에 등록할 마커 미리 등록
        marker.setMap(this.map);

        // 지도에 클릭 이벤트 등록
        window.kakao.maps.event.addListener(this.map, 'click', (e) => {
          this.clickMap(e, marker);
        });

      })
    },
    clickMap(mouseEvent, marker) {

      // 클릭한 위치의 위도, 경도 정보 가져오기
      var latlng = mouseEvent.latLng;

      // 마커 위치를 클릭한 위치로 이동
      marker.setPosition(latlng);
      // console.log('현재 마커의 위치 : ', marker.getPosition());
      this.latitude = latlng.getLat();
      this.longitude = latlng.getLng();
      // console.log('위도 : ', this.latitude, ' 경도 : ', this.longitude);

    }
  },
  mounted() {
    console.log("boardForm 시작");
    // file input 변경 될 때 마다 파일 이름 이벤트
    $("#files").on("change", () => {
      this.namingUploadFileName();
    });

    let boardId = this.$route.params.boardId;
    if (boardId != null) {
      this.initModifyingForm();
    } else {
      this.initNewWritingForm();
    }

    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      // global kakao
      // window.kakao.maps.load 메서드를 호출하지 않고 autoload를 사용하면
      // 자동으로 추가적인 kakao.js파일을 로딩하는데, 그렇게 되면 
      // kakao.maps.LatLng의 함수가 로딩되지 않았는데 initMap메서드가 호출되어
      // is not a function 오류 발생.
      // 올바른 흐름
      // v2스크립트 -> kakao.js 로딩 -> 카카오 맵 관련 객체(LatLng, Map) 초기화
      // vue에서 autoload 사용할 경우 아래 순서때문에 오류가 발생.
      // v2스크립트 -> 카카오 맵 관련 객체 초기화 
      //           -> 존재하지 않는다는 오류 발생(kakao 맵 관련 객체는 kakao.js 파일에 존재)
      script.onload = () => window.kakao.maps.load(this.initMap);
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=0d26c55d5640d7a6d3fc46625ee781a6";
      document.head.appendChild(script);
    }

  },
  beforeRouteLeave() {
    $('#files').val(null);
  }
};
</script>

<style>
.kakaoMapWrapper {
  /* border: 5px solid; */
  /* border-radius: 10px; */
  padding: 5px;
  margin: 10px;
  margin-bottom: 2rem;
}
</style>


