<template>
  <section class="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
    <div class="container">
      <div class="-mx-4 flex flex-wrap justify-center">
        <div class="w-full px-4">
          <!-- 사진 배너 -->
          <div
            class="wow fadeInUp relative z-20 mb-[60px] h-[300px] overflow-hidden rounded md:h-[400px] lg:h-[500px]"
            data-wow-delay=".1s"
          >
            <!-- 작성자가 올린 그림 -->
            <img
              :src="
                getPageDetail?.boardThumbnail != null
                  ? '/images/' + getPageDetail.boardThumbnail
                  : require('@/pages/main/assets/images/blog/blog-details-01.jpg')
              "
              alt="image"
              class="h-full w-full object-cover object-center"
              onerror="this.style.display='none';"
            />
            <div
              class="absolute top-0 left-0 z-10 flex h-full w-full items-end bg-gradient-to-t from-dark-700 to-transparent"
            >
              <div class="flex flex-wrap items-center p-4 pb-4 sm:p-8">
                <div class="mb-4 mr-5 flex items-center md:mr-10">
                  <div class="mr-4 h-10 w-10 overflow-hidden rounded-full">
                    <!-- 회원 썸네일 -->
                    <img
                      :src="
                        getPageDetail?.userThumbnail != null
                          ? '/images/' + getPageDetail.userThumbnail
                          : '/assets/images/blog/author-01.png'"
                      alt="image"
                      class="w-full"
                      onerror="this.style.display='none';"
                    />
                  </div>
                  <p class="text-base font-medium text-white">
                    <a
                      :text="getPageDetail?.username"
                      href="javascript:void(0)"
                      class="text-white hover:opacity-70"
                    >
                      작성자 이름
                    </a>
                  </p>
                </div>
                <div class="mb-4 flex items-center">
                  <p
                    class="mr-5 flex items-center text-sm font-medium text-white md:mr-8"
                  >
                    <span class="mr-3">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        class="fill-current"
                      >
                        <path
                          d="M3.8958 8.67529H3.10715C2.96376 8.67529 2.86816 8.77089 2.86816 8.91428V9.67904C2.86816 9.82243 2.96376 9.91802 3.10715 9.91802H3.8958C4.03919 9.91802 4.13479 9.82243 4.13479 9.67904V8.91428C4.13479 8.77089 4.03919 8.67529 3.8958 8.67529Z"
                        />
                        <path
                          d="M6.429 8.67529H5.64035C5.49696 8.67529 5.40137 8.77089 5.40137 8.91428V9.67904C5.40137 9.82243 5.49696 9.91802 5.64035 9.91802H6.429C6.57239 9.91802 6.66799 9.82243 6.66799 9.67904V8.91428C6.66799 8.77089 6.5485 8.67529 6.429 8.67529Z"
                        />
                        <path
                          d="M8.93779 8.67529H8.14914C8.00575 8.67529 7.91016 8.77089 7.91016 8.91428V9.67904C7.91016 9.82243 8.00575 9.91802 8.14914 9.91802H8.93779C9.08118 9.91802 9.17678 9.82243 9.17678 9.67904V8.91428C9.17678 8.77089 9.08118 8.67529 8.93779 8.67529Z"
                        />
                        <path
                          d="M11.472 8.67529H10.6833C10.5399 8.67529 10.4443 8.77089 10.4443 8.91428V9.67904C10.4443 9.82243 10.5399 9.91802 10.6833 9.91802H11.472C11.6154 9.91802 11.711 9.82243 11.711 9.67904V8.91428C11.711 8.77089 11.5915 8.67529 11.472 8.67529Z"
                        />
                        <path
                          d="M3.8958 11.1606H3.10715C2.96376 11.1606 2.86816 11.2562 2.86816 11.3996V12.1644C2.86816 12.3078 2.96376 12.4034 3.10715 12.4034H3.8958C4.03919 12.4034 4.13479 12.3078 4.13479 12.1644V11.3996C4.13479 11.2562 4.03919 11.1606 3.8958 11.1606Z"
                        />
                        <path
                          d="M6.429 11.1606H5.64035C5.49696 11.1606 5.40137 11.2562 5.40137 11.3996V12.1644C5.40137 12.3078 5.49696 12.4034 5.64035 12.4034H6.429C6.57239 12.4034 6.66799 12.3078 6.66799 12.1644V11.3996C6.66799 11.2562 6.5485 11.1606 6.429 11.1606Z"
                        />
                        <path
                          d="M8.93779 11.1606H8.14914C8.00575 11.1606 7.91016 11.2562 7.91016 11.3996V12.1644C7.91016 12.3078 8.00575 12.4034 8.14914 12.4034H8.93779C9.08118 12.4034 9.17678 12.3078 9.17678 12.1644V11.3996C9.17678 11.2562 9.08118 11.1606 8.93779 11.1606Z"
                        />
                        <path
                          d="M11.472 11.1606H10.6833C10.5399 11.1606 10.4443 11.2562 10.4443 11.3996V12.1644C10.4443 12.3078 10.5399 12.4034 10.6833 12.4034H11.472C11.6154 12.4034 11.711 12.3078 11.711 12.1644V11.3996C11.711 11.2562 11.5915 11.1606 11.472 11.1606Z"
                        />
                        <path
                          d="M13.2637 3.3697H7.64754V2.58105C8.19721 2.43765 8.62738 1.91189 8.62738 1.31442C8.62738 0.597464 8.02992 0 7.28906 0C6.54821 0 5.95074 0.597464 5.95074 1.31442C5.95074 1.91189 6.35702 2.41376 6.93058 2.58105V3.3697H1.31442C0.597464 3.3697 0 3.96716 0 4.68412V13.2637C0 13.9807 0.597464 14.5781 1.31442 14.5781H13.2637C13.9807 14.5781 14.5781 13.9807 14.5781 13.2637V4.68412C14.5781 3.96716 13.9807 3.3697 13.2637 3.3697ZM6.6677 1.31442C6.6677 0.979841 6.93058 0.716957 7.28906 0.716957C7.62364 0.716957 7.91042 0.979841 7.91042 1.31442C7.91042 1.649 7.64754 1.91189 7.28906 1.91189C6.95448 1.91189 6.6677 1.6251 6.6677 1.31442ZM1.31442 4.08665H13.2637C13.5983 4.08665 13.8612 4.34954 13.8612 4.68412V6.45261H0.716957V4.68412C0.716957 4.34954 0.979841 4.08665 1.31442 4.08665ZM13.2637 13.8612H1.31442C0.979841 13.8612 0.716957 13.5983 0.716957 13.2637V7.16957H13.8612V13.2637C13.8612 13.5983 13.5983 13.8612 13.2637 13.8612Z"
                        />
                      </svg>
                    </span>
                    {{ getPageDetail?.createdDate }}
                  </p>

                  <p
                    class="mr-5 flex items-center text-sm font-medium text-white md:mr-8"
                  >
                    <span class="mr-3">
                      <svg
                        width="18"
                        height="13"
                        viewBox="0 0 18 13"
                        class="fill-current"
                      >
                        <path
                          d="M15.9754 0H2.02539C1.09727 0 0.337891 0.759375 0.337891 1.6875V10.6875C0.337891 11.3062 0.647266 11.8406 1.18164 12.15C1.43477 12.2906 1.74414 12.375 2.02539 12.375C2.30664 12.375 2.58789 12.2906 2.86914 12.15L5.34414 10.7156C5.45664 10.6594 5.56914 10.6312 5.68164 10.6312H15.9473C16.8754 10.6312 17.6348 9.87187 17.6348 8.94375V1.6875C17.6629 0.759375 16.9035 0 15.9754 0ZM16.6785 8.94375C16.6785 9.3375 16.3691 9.64687 15.9754 9.64687H5.70977C5.42852 9.64687 5.11914 9.73125 4.86602 9.87187L2.39102 11.3063C2.16602 11.4187 1.91289 11.4187 1.68789 11.3063C1.46289 11.1938 1.35039 10.9688 1.35039 10.7156V1.6875C1.35039 1.29375 1.65977 0.984375 2.05352 0.984375H16.0035C16.3973 0.984375 16.7066 1.29375 16.7066 1.6875V8.94375H16.6785Z"
                        />
                        <path
                          d="M12.5721 3.375H5.03457C4.75332 3.375 4.52832 3.6 4.52832 3.88125C4.52832 4.1625 4.75332 4.3875 5.03457 4.3875H12.6002C12.8814 4.3875 13.1064 4.1625 13.1064 3.88125C13.1064 3.6 12.8533 3.375 12.5721 3.375Z"
                        />
                        <path
                          d="M11.3908 6.55322H5.03457C4.75332 6.55322 4.52832 6.77822 4.52832 7.05947C4.52832 7.34072 4.75332 7.56572 5.03457 7.56572H11.4189C11.7002 7.56572 11.9252 7.34072 11.9252 7.05947C11.9252 6.77822 11.6721 6.55322 11.3908 6.55322Z"
                        />
                      </svg>
                    </span>
                    {{ getPageDetail?.commentTotalCount }}
                  </p>
                  <p class="flex items-center text-sm font-medium text-white">
                    <span class="mr-3">
                      <svg
                        width="20"
                        height="12"
                        viewBox="0 0 20 12"
                        class="fill-current"
                      >
                        <path
                          d="M10.2559 3.8125C9.03711 3.8125 8.06836 4.8125 8.06836 6C8.06836 7.1875 9.06836 8.1875 10.2559 8.1875C11.4434 8.1875 12.4434 7.1875 12.4434 6C12.4434 4.8125 11.4746 3.8125 10.2559 3.8125ZM10.2559 7.09375C9.66211 7.09375 9.16211 6.59375 9.16211 6C9.16211 5.40625 9.66211 4.90625 10.2559 4.90625C10.8496 4.90625 11.3496 5.40625 11.3496 6C11.3496 6.59375 10.8496 7.09375 10.2559 7.09375Z"
                        />
                        <path
                          d="M19.7559 5.625C17.6934 2.375 14.1309 0.4375 10.2559 0.4375C6.38086 0.4375 2.81836 2.375 0.755859 5.625C0.630859 5.84375 0.630859 6.125 0.755859 6.34375C2.81836 9.59375 6.38086 11.5312 10.2559 11.5312C14.1309 11.5312 17.6934 9.59375 19.7559 6.34375C19.9121 6.125 19.9121 5.84375 19.7559 5.625ZM10.2559 10.4375C6.84961 10.4375 3.69336 8.78125 1.81836 5.96875C3.69336 3.1875 6.84961 1.53125 10.2559 1.53125C13.6621 1.53125 16.8184 3.1875 18.6934 5.96875C16.8184 8.78125 13.6621 10.4375 10.2559 10.4375Z"
                        />
                      </svg>
                    </span>
                    {{ getPageDetail?.views }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- 사진 배너 종료 -->
          <div class="-mx-4 flex flex-wrap">
            <!-- 글 본문 시작 -->
            <div class="w-full px-4 lg:w-8/12">

              <div>
                <h2
                  v-text="getPageDetail?.title"
                  class="wow fadeInUp mb-6 text-[26px] font-bold leading-snug text-dark sm:text-3xl sm:leading-snug md:text-4xl md:leading-snug"
                  data-wow-delay=".1s"
                ></h2>
                
                <div class="mx-8 my-16 gallery">
                  <div class="gallery-wrapper">
                    <div v-for="itemImageURL in getPageDetail?.itemImageURLs" :key="itemImageURL">
                      <img
                        :src="'/images/' + itemImageURL"
                        alt="image"
                        class="h-full w-1/2 object-cover object-center"
                        onerror="this.style.display='none';"
                      />
                    </div>
                  </div>
                  <div class="gallery-button">
                    <div class="prev-button bg-primary font-semibold text-white py-1 px-4 mx-1 rounded" 
                    @click="prevEvent">이전</div>
                    <div class="next-button bg-primary font-semibold text-white py-1 px-4 mx-1 rounded" 
                    @click="nextEvent">다음</div>
                  </div>
                </div>

                <div class="kakaoMapWrapper">
                  <div id="kakaoMap" style="height: 400px;">
                  </div>
                </div>
                
                <div class="mx-4">
                <p
                  v-text="getPageDetail?.content"
                  class="wow fadeInUp mb-8 text-base leading-relaxed text-body-color"
                  data-wow-delay=".1s"
                ></p>
                </div>

                <!-- 댓글 영역 시작 -->
                <div id="comment-box" class="max-w-2xl mx-auto px-4">
                  <div class="flex justify-between items-center mb-6">
                    <h2
                      id="comment-total"
                      class="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white"
                    >
                      댓글 ({{ getPageDetail?.commentTotalCount }})
                    </h2>
                    <div>
                      <button
                        v-if="
                          getPageDetail?.writerId !== getAuthentication.userId &&
                          getPageDetail?.tradePossible == true
                        "
                        id="board-trade"
                        type="button"
                        class="mb-5 inline-block rounded bg-primary py-1 px-4 mx-2 text-center text-xs font-semibold leading-loose text-white"
                      >
                        거래 신청
                      </button>
                      <router-link
                        v-if="
                          getPageDetail?.writerId === getAuthentication.userId
                        "
                        id="board-update"
                        :to="`/board/trade/${subCategory}/${getPageDetail.id}/form`"
                        type="button"
                        class="mb-5 inline-block rounded bg-primary py-1 px-4 mx-1 text-center text-xs font-semibold leading-loose text-white"
                      >
                        게시물 수정
                      </router-link>
                      <button
                        v-if="
                          getPageDetail?.writerId === getAuthentication.userId
                        "
                        id="board-delete"
                        type="button"
                        class="mb-5 inline-block rounded bg-primary py-1 px-4 mx-1 text-center text-xs font-semibold leading-loose text-white"
                      >
                        게시물 삭제
                      </button>
                      <router-link :to="`/boards/${category}/${subCategory}`">
                        <button
                          type="button"
                          class="mb-5 inline-block rounded bg-primary py-1 px-4 mx-1 text-center text-xs font-semibold leading-loose text-white"
                        >
                          목록
                        </button>
                      </router-link>
                    </div>
                  </div>
                  <div class="mb-6">
                    <div
                      class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700"
                    >
                      <textarea
                        id="comment-content"
                        rows="6"
                        class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                        placeholder="Write a comment..."
                      ></textarea>
                    </div>
                    <button
                      @click="this.SAVE_COMMENT({ boardId: getPageDetail?.id})"
                      type="button"
                      class="mb-5 inline-block rounded bg-primary py-1 px-4 text-center text-xs font-semibold leading-loose text-white"
                    >
                      댓글 작성
                    </button>
                  </div>

                  <!-- 부모 댓글 시작 -->
                  <div
                    v-for="comment in getPageDetail?.comments"
                    :key="comment.id"
                    :id="`comment-${comment.id}`"
                    class="mb-6 text-base bg-white rounded-lg dark:bg-gray-900 border px-4 py-4"
                  >
                    <div class="flex justify-between items-center mb-2">
                      <div class="flex items-center">
                        <p
                          class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold"
                        >
                          {{ comment.commentUserName }}
                        </p>
                        <p class="text-sm text-gray-600 dark:text-gray-400">
                          <time
                            pubdate
                            datetime="2022-02-08"
                            title="February 8th, 2022"
                          >
                            {{ comment.createdDate }}
                          </time>
                        </p>
                      </div>

                      <div class="flex items-center">
                        <button
                          @click="updateToggle(comment.id)"
                          v-if="
                            `${
                              getAuthentication.userId == comment.commentUserId
                            }`
                          "
                          class="inline-flex items-center mr-3 text-sm text-gray-900 hover:underline dark:text-white font-semibold"
                        >
                          수정
                        </button>
                        <button
                          @click="this.DELETE_COMMENT({
                            commentId : comment.id,
                            commentTotalCount: getPageDetail?.commentTotalCount
                          })"
                          v-if="
                            `${
                              getAuthentication.userId == comment.commentUserId
                            }`
                          "
                          class="inline-flex items-center mr-3 text-sm text-gray-900 hover:underline dark:text-white font-semibold"
                        >
                          삭제
                        </button>
                      </div>
                    </div>

                    <p
                      :id="`content-${comment.id}`"
                      class="text-gray-500 py-4 dark:text-gray-400"
                    >
                      {{ comment.content }}
                    </p>

                    <div class="flex items-center py-4">
                      <button
                        @click="replyToggle(comment.id)"
                        type="button"
                        class="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
                      >
                        답글 달기
                      </button>
                    </div>
                    <!-- 수정 댓글 바 시작 -->
                    <div
                      :id="`update-bar-${comment.id}`"
                      class="mb-6 lg:ml-6"
                      style="display: none"
                    >
                      <div
                        class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700"
                      >
                        <textarea
                          :id="`update-content-${comment.id}`"
                          rows="3"
                          class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                          placeholder="수정 내용.."
                        ></textarea>
                      </div>
                      <button
                        @click="this.UPDATE_COMMENT({
                          boardId: getPageDetail.id,
                          commentId: comment.id
                        })"
                        type="button"
                        class="mb-5 inline-block rounded bg-primary py-1 px-4 text-center text-xs font-semibold leading-loose text-white"
                      >
                        작성
                      </button>
                    </div>
                    <!-- 수정 댓글 바 종료 -->

                    <!-- 대댓글 시작 -->
                    <div
                      v-for="reply in comment.replies"
                      :key="reply.id"
                      :id="`comment-${reply.id}`"
                      class="py-4 lg:ml-6 text-base bg-white rounded-lg dark:bg-gray-900"
                    >
                      <div class="flex justify-between items-center mb-2">
                        <div class="flex items-center">
                          <p
                            class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold"
                          >
                            {{ reply.commentUserName }}
                          </p>
                          <p class="text-sm text-gray-600 dark:text-gray-400">
                            <time
                              pubdate
                              datetime="2022-02-08"
                              title="February 8th, 2022"
                            >
                              {{ reply.createdDate }}
                            </time>
                          </p>
                        </div>

                        <div class="flex items-center">
                          <button
                            @click="updateToggle(reply.id)"
                            v-if="
                              `${
                                getAuthentication.userId ==
                                comment.commentUserId
                              }`
                            "
                            class="inline-flex items-center mr-3 text-sm text-gray-900 hover:underline dark:text-white font-semibold"
                          >
                            수정
                          </button>
                          <button
                            @click="this.DELETE_COMMENT({
                             commentId: reply.id,
                             commentTotalCount: getPageDetail?.commentTotalCount 
                            })"
                            v-if="
                              `${
                                getAuthentication.userId ==
                                comment.commentUserId
                              }`
                            "
                            class="inline-flex items-center mr-3 text-sm text-gray-900 hover:underline dark:text-white font-semibold"
                          >
                            삭제
                          </button>
                        </div>
                      </div>
                      <p
                        :id="`content-${comment.id}`"
                        class="text-gray-500 py-4 dark:text-gray-400"
                      >
                        {{ reply.content }}
                      </p>
                      <!-- 대댓글 수정 바 -->
                      <div
                        :id="`update-bar-${reply.id}`"
                        class="mb-6 lg:ml-6"
                        style="display: none"
                      >
                        <div
                          class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700"
                        >
                          <textarea
                            :id="`update-content-${reply.id}`"
                            rows="3"
                            class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                            placeholder="수정 내용.."
                          ></textarea>
                        </div>
                        <button
                          @click="this.UPDATE_COMMENT({
                            boardId: getPageDetail?.id,
                            commentId: reply?.id
                          })"
                          type="button"
                          class="mb-5 inline-block rounded bg-primary py-1 px-4 text-center text-xs font-semibold leading-loose text-white"
                        >
                          작성
                        </button>
                      </div>
                      <!-- 대댓글 수정 바 종료 -->
                    </div>
                    <!-- 대댓글 종료-->

                    <!-- 대댓글 작성 바 시작 -->
                    <div
                      :id="`reply-bar-${comment.id}`"
                      class="mb-6 lg:ml-6"
                      style="display: none"
                    >
                      <div
                        class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700"
                      >
                        <textarea
                          :id="`reply-content-${comment.id}`"
                          rows="3"
                          class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                          placeholder="답글 적기..."
                        ></textarea>
                      </div>
                      <button
                        @click="this.SAVE_REPLY_COMMENT({
                          boardId: getPageDetail?.id,
                          topCommentId: comment?.id,
                        })"
                        type="button"
                        class="mb-5 inline-block rounded bg-primary py-1 px-4 text-center text-xs font-semibold leading-loose text-white"
                      >
                        작성
                      </button>
                    </div>
                    <!-- 대댓글 작성 바 종료 -->
                  </div>
                  <!-- 부모 댓글 종료 -->
                </div>
                <!-- 댓글 영역 종료 -->

              </div>
            </div>
            <!-- 글 본문 종료 -->

            <!-- 오른쪽 사이드바 시작-->
            <div class="w-full px-4 lg:w-4/12">
              <div>
                <div class="-mx-4 mb-8 flex flex-wrap">
                  <div class="w-full px-4">
                    <h2
                      class="wow fadeInUp relative pb-5 text-2xl font-semibold text-dark sm:text-[28px]"
                      data-wow-delay=".1s
                        "
                    >
                      인기있는 게시물
                    </h2>
                    <span
                      class="mb-10 inline-block h-[2px] w-20 bg-primary"
                    ></span>
                  </div>

                  <div class="w-full px-4 md:w-1/2 lg:w-full">
                    <div
                      class="wow fadeInUp mb-5 flex w-full items-center border-b border-[#F2F3F8] pb-5"
                      data-wow-delay=".1s
                        "
                    >
                      <div
                        class="mr-5 h-20 w-full max-w-[80px] overflow-hidden rounded-full"
                      >
                        <img
                          src="/assets/images/blog/article-author-01.png"
                          alt="image"
                          class="w-full"
                        />
                      </div>
                      <div class="w-full">
                        <h4>
                          <a
                            href="javascript:void(0)"
                            class="mb-1 inline-block text-lg font-medium leading-snug text-dark hover:text-primary lg:text-base xl:text-lg"
                          >
                            Create engaging online courses your student…
                          </a>
                        </h4>
                        <p class="text-sm text-body-color">Glomiya Lucy</p>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- 배너 광고 -->
                <div
                  class="wow fadeInUp mb-12 overflow-hidden rounded"
                  data-wow-delay=".1s"
                >
                  <img
                    src="/assets/images/blog/bannder-ad.png"
                    alt="image"
                    class="w-full"
                  />
                </div>
                <!-- 배너 광고 끝 -->
              </div>
            </div>
            <!-- 오른쪽 사이드바 종료-->
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import $ from 'jquery';
import { mapGetters, mapActions } from "vuex";
import {
  replyToggle,
  updateToggle,
} from "../../api/commentApi";
// import { initKakaoMap, initMap } from '../../api/kakaoMapApi';

export default {
  data() {
    return {
      // CAROUSEL_LENGTH: 0,
      current: 0,
      kakaoMapLoaded: false,
    };
  },
  computed: {
    ...mapGetters(["getPageDetail", "getAuthentication"]),
    category() {
      return this.$route.params.categoryName;
    },
    subCategory() {
      return this.$route.params.subCategoryName;
    },
    CAROUSEL_LENGTH() {
      var length = document.querySelectorAll(".gallery-wrapper img").length - 1
      // console.log('캐러셀 갯수는 ?', length + 1);
      return length;
    },
  },
  methods: {
    ...mapActions([
      "GET_PAGE_DETAIL",
      "SAVE_COMMENT",
      "SAVE_REPLY_COMMENT",
      "UPDATE_COMMENT",
      "DELETE_COMMENT"]),
    replyToggle,
    updateToggle,
    nextBtnClick() {
      document.querySelector(".next-button").click();
    },
    prevBtnClick() {
      document.querySelector(".prev-button").click();
    },
    nextEvent() {
      let CAROUSEL_LENGTH = this.CAROUSEL_LENGTH;
      let $carousel = $('.gallery-wrapper')[0];
      if (this.current !== CAROUSEL_LENGTH) {
        // console.log((this.current + 1) * -600);
        $carousel.style.transform = `translateX(${(this.current + 1) * -600}px)`;
        this.current ++;
      } else {
        this.current = 0;
        $carousel.style.transform = `translateX(0px)`;
      }
    },
    prevEvent() {
      let CAROUSEL_LENGTH = this.CAROUSEL_LENGTH;
      let $carousel = $('.gallery-wrapper')[0];
      if (this.current !== 0) {
        this.current--;
        $carousel.style.transform = `translateX(${this.current * -600}px)`;
      } else {
        this.current = CAROUSEL_LENGTH;
        $carousel.style.transform = `translateX(${CAROUSEL_LENGTH * -600}px)`;
      }
    },
    initMap() {
      let currentLatitude = this.getPageDetail.latitude;
      let currentLongitude = this.getPageDetail.longitude;
      if (currentLatitude == null || currentLongitude == null) {
        return;
      }
      const container = document.getElementById("kakaoMap");
      const options = {
        center: new window.kakao.maps.LatLng(currentLatitude, currentLongitude),
        level: 5,
      };

      //지도 객체를 등록합니다.
      //지도 객체는 반응형 관리 대상이 아니므로 initMap에서 선언합니다.
      this.map = new window.kakao.maps.Map(container, options);

      // 마커 생성
      var marker = new window.kakao.maps.Marker({
        position: this.map.getCenter()
      });
      // 지도에 마커 표시
      marker.setMap(this.map);

    },
  },
  beforeRouteUpdate(to, from, next) {
    this.GET_PAGE_DETAIL({
      category: to.params.categoryName,
      subCategory: to.params.subCategoryName,
      boardId: to.params.boardId,
    });
    next();
  },
  beforeRouteLeave(to, from, next) {
    clearInterval(this.interval);
    next();
  },
  created() {
    console.log('boardDetail 시작');
  },
  async mounted() {
    console.log('mounted');
    // this.CAROUSEL_LENGTH = document.querySelectorAll(".gallery-wrapper img").length - 1;
    // console.log('현재 갤러리 이미지 개수',this.CAROUSEL_LENGTH + 1);

    this.interval = setInterval(this.nextBtnClick,5000);

    await this.GET_PAGE_DETAIL({
      category: this.$route.params.categoryName,
      subCategory: this.$route.params.subCategoryName,
      boardId: this.$route.params.boardId,
    });

    // 카카오 맵 초기화
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      script.onload = () => window.kakao.maps.load(this.initMap);
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=0d26c55d5640d7a6d3fc46625ee781a6";
      document.head.appendChild(script);
    }
  }
};
  
</script>

<style>
.gallery {
  overflow: hidden;
  width: 600px;
}
.gallery-wrapper {
  width: 600px;
  height: 600px;
  transition: all 0.5s;
  display: flex;
  margin: auto auto;
}
.gallery-wrapper div{
  width: 600px;
  height: 600px;
  /* flex-shrink가 있어야 해당 div영역이 쪼그라들지 않음 */
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.gallery-button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}
</style>