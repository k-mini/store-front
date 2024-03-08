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
                  <label for="file">파일찾기</label>
                  <input type="file" id="file" />
                </div>

                <div style="margin: 20px 15px">
                  <img id="fileImage" />
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
import { mapActions, mapGetters } from "vuex";
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
    ...mapActions(["CREATE_BOARD", "UPDATE_BOARD"]),
    saveBoard() {
      let file = $("#file")[0].files[0];
      let category = this.categoryValue;
      let subCategory = this.subCategoryValue;
      let boardId = this.boardId;
      let params = {
        title: this.boardTitle,
        content: this.content,
        file: file,
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
  },
  created() {
    console.log("boardForm 시작");
    this.$store.commit("SET_TITLE", this.title);
    this.boardTitle = this.getPageDetail.title;
    this.content = this.getPageDetail.content;
    let thumbnailUrl = this.getPageDetail.boardThumbnail;

    if (thumbnailUrl != undefined) {
      let url = `http://localhost:9090/images/${thumbnailUrl}`;
      fetchImage(thumbnailUrl).then((res) => {
        let ext = url.split(".").pop();
        let fileName = url.split("/").pop();
        let file = new File([res], fileName, { type: `image/${ext}` });

        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);

        // fileList 등록
        $("#file")[0].files = dataTransfer.files;

        // filePath 등록
        let filePath = $("#file").val();
        $(".upload-name").val(filePath);
        $("#fileImage").attr("src", url);
      });
    }
  },
  mounted() {
    // file input 변경 될 때 마다 파일 이름 이벤트
    $("#file").on("change", function () {
      var fileName = $("#file").val();
      $(".upload-name").val(fileName);
    });
  },
};
</script>

<style>
</style>


