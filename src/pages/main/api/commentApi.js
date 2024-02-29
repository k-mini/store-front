import axios from 'axios';
import $ from 'jquery';

const config = {
    baseUrl: 'http://localhost:9090'
};

export {
    saveComment,
    updateComment,
    deleteComment,
    replyToggle,
    updateToggle,
    plusTotalCounts,
    downTotalCounts,
    getCommentComp,
    getReplyComp,
    initCommentCompEvent,
    initCommentReplyCompEvent
}

function saveComment(boardId, topCommentId, content) {
    let data = {
        boardId: boardId,
        content: content,
        topCommentId: topCommentId,
    }
    return axios.post(`${config.baseUrl}/api/comment`, data);
}

function updateComment(boardId, commentId, content) {
    let data = {
        boardId: boardId,
        commentId: commentId,
        content: content,
    }
    return axios.patch(`${config.baseUrl}/api/comment/${commentId}`, data);
}

function deleteComment(commentId) {
    return axios.delete(`${config.baseUrl}/api/comment/${commentId}`);
}

function replyToggle(commentId) {
    let selector = $(`#reply-bar-${commentId}`);
    return selector.is(':visible') ? selector.hide() : selector.show();
}
function updateToggle(commentId) {
    let selector = $(`#update-bar-${commentId}`);
    return selector.is(':visible') ? selector.hide() : selector.show();
}

function plusTotalCounts(totalCount) {
    totalCount += 1;
    $("#comment-total").text(`댓글 (${totalCount})`);
}

function downTotalCounts(totalCount, cnt) {
    totalCount -= cnt;
    $("#comment-total").text(`댓글 (${totalCount})`);
}

function getCommentComp(data) {
    let commentId = data.id;
    let commentUserName = data.commentUserName;
    let comp = `
    <div id="comment-${commentId}" class="mb-6 text-base bg-white rounded-lg dark:bg-gray-900">
        <div class="flex justify-between items-center mb-2">
            <div class="flex items-center">
                <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                    ${commentUserName}</p>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                    <time pubdate datetime="2022-02-08" title="February 8th, 2022">${data.createdDate}</time></p>
            </div>

            <div class="flex items-center">
                <button 
                    id="comment-${commentId}-update" 
                    class="inline-flex items-center mr-3 text-sm text-gray-900 hover:underline dark:text-white font-semibold">
                    수정</button>
                <button 
                    id="comment-${commentId}-delete" 
                    class="inline-flex items-center mr-3 text-sm text-gray-900 hover:underline dark:text-white font-semibold">
                    삭제</button>
            </div>
        </div>
        
        <p class="text-gray-500 py-4 dark:text-gray-400">${data.content}</p>
        
        <div class="flex items-center py-4">
            <button id="reply-toggle-${commentId}" 
                    type="button"
                    class="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium">
                답글 달기
            </button>
        </div>

        <div id="update-bar-${commentId}" 
             class="mb-6 lg:ml-6" 
             style="display: none">
            <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <textarea
                id="update-content-${commentId}"
                rows="3"
                class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                placeholder="수정 내용..">
            </textarea>
            </div>
            <button
                id="comment-${commentId}-update-action"
                type="button"
                class="mb-5 inline-block rounded bg-primary py-1 px-4 text-center text-xs font-semibold leading-loose text-white">
                작성
            </button>
        </div>

        
        <div id="reply-bar-${commentId}" class="mb-6 lg:ml-6" style="display: none;">
            <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <textarea id="reply-content-${commentId}" rows="3"
                        class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                        placeholder="답글 적기..."></textarea>
            </div>
            <button type="button"
                    class="mb-5 inline-block rounded bg-primary py-1 px-4 text-center text-xs font-semibold leading-loose text-white">
                작성
            </button>
        </div>
    </div>`;
    return comp;
}

function initCommentCompEvent(context, data, boardId) {
    let commentId = data.id;
    let commentTotalCount = context.getters['getPageDetail'].commentTotalCount;
    console.log('이벤트 등록 시작');

    // 답글 버튼 (토글)
    $(`#reply-toggle-${commentId}`).off().on("click", function () {
        replyToggle(commentId);
    });

    // 수정 버튼 (토글)
    $(`#comment-${commentId}-update`).off().on("click", function () {
        updateToggle(commentId);
    });

    // 수정 버튼 (동작)
    $(`#comment-${commentId}-update-action`).off().on("click", function () {
        this.UPDATE_COMMENT({ boardId: data.id, commentId: commentId })
    });

    // 삭제 버튼
    $(`#comment-${commentId}-delete`).off().on("click", function () {
        context.dispatch('DELETE_COMMENT', { commentId, commentTotalCount });
    });

    // 답글 작성 버튼
    $(`#reply-bar-${commentId} button`).off().on("click", function () {
        context.dispatch('SAVE_REPLY_COMMENT', { boardId, topCommentId: commentId});
    });
}

function getReplyComp(data) {
    let commentId = data.id;
    let commentUserName = data.commentUserName;

    let comp = `
    <div id="comment-${commentId}" class="py-4 lg:ml-6 text-base bg-white rounded-lg dark:bg-gray-900">
        <div class="flex justify-between items-center mb-2">
            <div class="flex items-center">
                <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                    ${commentUserName}</p>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                    <time pubdate datetime="2022-02-08" title="February 8th, 2022">${data.createdDate}</time></p>
            </div>

            <div class="flex items-center">
                <button 
                        id="comment-${commentId}-update"
                        class="inline-flex items-center mr-3 text-sm text-gray-900 hover:underline dark:text-white font-semibold">
                    수정
                </button>
                <button
                        id="comment-${commentId}-delete"
                        class="inline-flex items-center mr-3 text-sm text-gray-900 hover:underline dark:text-white font-semibold">
                    삭제
                </button>
            </div>
        </div>

        <p class="text-gray-500 py-4 dark:text-gray-400">${data.content}</p>

        <div id="update-bar-${commentId}" 
             class="mb-6 lg:ml-6" 
             style="display: none">
            <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <textarea
                id="update-content-${commentId}"
                rows="3"
                class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                placeholder="수정 내용..">
            </textarea>
            </div>
            <button
                id="comment-${commentId}-update-action"
                type="button"
                class="mb-5 inline-block rounded bg-primary py-1 px-4 text-center text-xs font-semibold leading-loose text-white">
                작성
            </button>
        </div>
    </div>`;
    return comp;
}

function initCommentReplyCompEvent(context, data, boardId, topCommentId) {
    let commentId = data.id;
    let commentTotalCount = context.getters['getPageDetail'].commentTotalCount;

    // 답글 버튼 (토글)
    $(`#reply-toggle-${commentId}`).off().on("click", function () {
        replyToggle(commentId);
    });

    // 수정 버튼 (토글)
    $(`#comment-${commentId}-update`).off().on("click", function () {
        updateToggle(commentId);
    })

    // 수정 버튼 (동작)
    $(`#comment-${commentId}-update-action`).off().on("click", function () {
        this.UPDATE_COMMENT({ boardId: data.id, commentId: commentId })
    })

    // 삭제 버튼
    $(`#comment-${commentId}-delete`).off().on("click", function () {
        context.dispatch('DELETE_COMMENT', { commentId, commentTotalCount });
    })

    // 답글 작성 버튼
    $(`#reply-bar-${commentId} button`).off().on("click", function () {
        context.dispatch('SAVE_REPLY_COMMENT', { boardId, topCommentId});
    });
}
