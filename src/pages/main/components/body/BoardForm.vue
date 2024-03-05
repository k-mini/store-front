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
                <div class="flex items-center md:justify-start">
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
                <div class="flex items-center md:justify-start">
                  <label
                    for="message"
                    class="mx-2 my-1 text-2xl font-bold text-dark"
                    >사진</label
                  >
                </div>
                <div class="filebox" style="margin : 20px 0px;">
                  <input class="upload-name" value="첨부파일" placeholder="첨부파일" readonly>
                  <label for="file">파일찾기</label> 
                  <input type="file" id="file">
                </div>

                <div style="margin : 20px 15px;">
                  <img id="fileImage"/>
                </div>
              </div>

              <div class="mb-6">
                <div class="flex items-center md:justify-start">
                  <label
                    for="message"
                    class="mx-2 my-1 text-2xl font-bold text-dark"
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
    };
  },
  computed: {
    ...mapGetters(["getPageDetail"]),
    category() {
      return this.$route.params.category;
    },
    subCategory() {
      return this.$route.params.subCategory;
    },
    boardId() {
      return this.$route.params.boardId;
    },
  },
  methods: {
    ...mapActions(["CREATE_BOARD", "UPDATE_BOARD"]),
    saveBoard() {
      let file = $("#file")[0].files[0];
      let category = this.category;
      let subCategory = this.subCategory;
      let boardId = this.boardId;
      let params = {
        title: this.boardTitle,
        content: this.content,
        file: file,
      };
      console.log("saveBoard 시작");
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
    console.log('boardForm 시작');
    this.$store.commit("SET_TITLE", this.title);
    this.boardTitle = this.getPageDetail.title;
    this.content = this.getPageDetail.content;
    console.log('boardform');
    let thumbnailUrl = this.getPageDetail.boardThumbnail;

    if (thumbnailUrl != undefined) {
      let url = `http://localhost:9090/images/${thumbnailUrl}`;
      fetchImage(thumbnailUrl)
        .then((res) => {
          let ext = url.split(".").pop();
          let fileName = url.split("/").pop();
          let file = new File([res], fileName, { type: `image/${ext}` });

          const dataTransfer = new DataTransfer();
          dataTransfer.items.add(file);

          // fileList 등록
          $("#file")[0].files = dataTransfer.files;

          // filePath 등록
          let filePath = $('#file').val();
          $('.upload-name').val(filePath);
          $('#fileImage').attr('src', url);
        });
    }
  },
  mounted() {
    // file input 변경 될 때 마다 파일 이름 이벤트
    $("#file").on('change', function(){
      var fileName = $("#file").val();
      $(".upload-name").val(fileName);
    });
  }
};
</script>

<style>
.filebox .upload-name {
    display: inline-block;
    height: 40px;
    padding: 0 0px;
    vertical-align: middle;
    border: 1px solid #dddddd;
    width: 78%;
    color: #999999;
}

.filebox label {
    display: inline-block;
    padding: 10px 20px;
    color: #fff;
    vertical-align: middle;
    background-color: #999999;
    cursor: pointer;
    height: 40px;
    margin-left: 10px;
}

.filebox input[type="file"] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    overflow: hidden;
    border: 0;
}
</style>


