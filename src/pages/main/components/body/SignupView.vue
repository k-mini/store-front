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
            <form
              method="POST"
              v-on:submit.prevent="processJoin"
            >

              <div class="mb-3">
                <p class="py-3 px-1" style="text-align: left; font-size: 20px;">
                  이메일
                </p>
                <input
                  v-model="email"
                  type="email"
                  placeholder="이메일을 입력해 주세요"
                  class="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none transition focus:border-primary focus-visible:shadow-none"
                />
              </div>

              <div class="mb-3">
                <p class="py-3 px-1" style="text-align: left; font-size: 20px;">
                  닉네임
                </p>
                <input
                  v-model="username"
                  type="text"
                  placeholder="이름을 입력해 주세요"
                  class="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none transition focus:border-primary focus-visible:shadow-none"
                />
              </div>

              <div class="mb-3">
                <p class="py-3 px-1" style="text-align: left; font-size: 20px;">
                  비밀번호
                </p>
                <input
                  v-model="password"
                  type="password"
                  placeholder="영문자 숫자 포함 최소 8~20자"
                  class="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none transition focus:border-primary focus-visible:shadow-none"
                />
              </div>

              <div class="mb-3">
                <p class="py-3 px-1" style="text-align: left; font-size: 20px;">
                  비밀번호 확인
                </p>
                <input
                  v-model="passwordCheck"
                  type="password"
                  placeholder="비밀번호를 확인해 주세요"
                  class="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none transition focus:border-primary focus-visible:shadow-none"
                />
              </div>

              <div class="mb-6" style="width: 20%;">
                <p class="py-3 px-1" style="text-align: left; font-size: 20px;">
                  성별
                </p>
                <select v-model="gender" 
                  class="bordder-[#E9EDF4] w-full rounded-md
                  border bg-[#FCFDFE] py-3 px-5 text-base text-body-color
                    placeholder-[#ACB6BE] outline-none transition focus:border-primary focus-visible:shadow-none">
                  <option value="Man">남자</option>
                  <option value="Woman">여자</option>
                </select>
              </div>

              <!-- 주소 -->
              <div>
                <p class="py-3 px-1" style="text-align: left; font-size: 20px;">
                    주소
                </p>
                <div class="mb-2" style="width: 50%; display: flex;">
                  <input
                    v-model="zonecode"
                    type="text"
                    placeholder="우편번호"
                    class="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none transition focus:border-primary focus-visible:shadow-none"
                    readonly
                  />
                  <input type="button" 
                  class="bordder-primary cursor-pointer rounded-md bg-primary py-3 px-5 mx-4 text-base text-white transition duration-300 hover:shadow-md"
                  @click="extractAddress()" value="우편번호 찾기"><br>
                </div>

                <div class="mb-2" style="width: 60%;">
                  <input
                    v-model="roadAddress"
                    type="text"
                    placeholder="도로명주소"
                    class="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none transition focus:border-primary focus-visible:shadow-none"
                    readonly
                  />
                </div>

                <div class="mb-2" style="width: 60%;">
                  <input
                    v-model="jibunAddress"
                    type="text"
                    placeholder="지번주소"
                    class="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none transition focus:border-primary focus-visible:shadow-none"
                    readonly
                  />
                </div>
                <div class="mb-6" style="width:30%;">
                  <input
                    v-model="detailAddress"
                    type="text"
                    placeholder="상세주소"
                    class="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none transition focus:border-primary focus-visible:shadow-none"
                  />
                </div>
              </div>

              <div class="mb-6">
                <p class="py-3 px-1" style="text-align: left; font-size: 20px;">
                  프로필 사진
                </p>
                <div class="filebox" style="display: flex;">
                  <input
                    class="upload-name"
                    value="첨부파일"
                    placeholder="첨부파일"
                    readonly
                  />
                  <label for="file">파일찾기</label>
                  <input type="file" id="file" @change="previewFile()"/>
                </div>
              </div>

              <div class="mb-6">
                <img id="userImage"/>
              </div>

              <div class="mb-10">
                <input
                  type="submit"
                  value="회원가입"
                  class="bordder-primary w-full cursor-pointer rounded-md border bg-primary py-3 px-5 text-base text-white transition duration-300 ease-in-out hover:shadow-md"
                />
              </div>
            </form>
            <p class="mb-3 text-base text-[#adadad]">
              다른 계정으로 로그인하기
            </p>
            <div class="mb-6" style="display: flex;
               align-items: center;
               justify-content: center;
               " >
                <a href="#" 
                onclick="window.open('/oauth2/authorization/kakao', '', 'width=500, height=600, top=200, left=200');">
                  <img class='logo' src="../../assets/images/kakao.png" >
                </a>
                <a href="#"
                onclick="window.open('/oauth2/authorization/google', '', 'width=500, height=600, top=200, left=200');">
                  <img class='logo' src="../../assets/images/google.png">
                </a>
                <a href="#"
                onclick="window.open('/oauth2/authorization/github', '', 'width=500, height=600, top=200, left=200');">
                  <img class='logo' src="../../assets/images/github.png">
                </a>
              </div>

            <p class="text-base text-[#adadad]">
              이미 회원이신가요?
              <router-link :to="`/auth/signin`" class="text-primary hover:underline">
                로그인
              </router-link>
            </p>

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
import $ from 'jquery';
import { mapActions } from 'vuex';
import { load } from 'recaptcha-v3';

export default {
  props: ['title'],
  data() {
    return {
      email: '',
      username: '',
      password: '',
      passwordCheck: '',
      zonecode: '',
      roadAddress: '',
      jibunAddress: '',
      detailAddress: '',
      gender: '',
      reCaptChaToken: '',
    }
  },
  methods: {
    ...mapActions(['PROCESS_JOIN']),
    async processJoin() {
      // console.log('processJoin 호출');
      // console.log(this.email, this.username, this.password, 
      //   this.passwordCheck, $('#file')[0].files[0] );
      await this.fetchReCaptChaToken();

      this.PROCESS_JOIN({
        email: this.email, 
        username: this.username, 
        password: this.password,
        passwordCheck: this.passwordCheck,
        file: $('#file')[0].files[0],
        zonecode: this.zonecode,
        roadAddress: this.roadAddress,
        jibunAddress: this.jibunAddress,
        detailAddress: this.detailAddress,
        gender: this.gender.toUpperCase(),
        reCaptChaToken : this.reCaptChaToken,
      })
      .then(() => {
        console.log('회원가입 성공');
        this.$router.push('/');
      })
      .catch((err) => {
        console.log(err);
      })
    },
    previewFile() {
      console.log('preview 실행');
      let preview = $('#userImage');
      let file = $('#file')[0].files[0];
      let reader = new FileReader();

      reader.addEventListener("load", function(e){
        preview.attr('src', e.target.result);
      });

      if (file) {
        reader.readAsDataURL(file);
      }
    },
    extractAddress() {
        new window.daum.Postcode({
          oncomplete: (data) => {    
            // console.log(data);
            // console.log(this);
            // 우편번호 입력
            this.zonecode = data.zonecode;
            // 도로명 주소 입력
            if (data.roadAddress !== '') {
              this.roadAddress = data.roadAddress;
            } else {
              this.roadAddress=  data.autoRoadAddress;
            }
            // 지번 주소 입력
            if (data.jibunAddress !== '') {
              this.jibunAddress = data.jibunAddress;
            } else {
              this.jibunAddress = data.autoJibunAddress;
            }
        }
      }).open();
    },
    fetchReCaptChaToken() {
      // reCAPTCHA
      load('6Lcxm5MpAAAAAJB8K-373tgGZK8Ygc5BJCnMwueA').then((recaptcha) => {
        recaptcha.execute('login').then((token) => {
          // console.log('reCAPTCHA 토큰 생성 완료',token);
          this.reCaptChaToken = token;
        })
      })
    },
  },
  beforeRouteUpdate() {
    $('#file').attr('src','');
  },
  created() {
    this.$store.commit('SET_TITLE', this.title);
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