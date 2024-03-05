import {
    fetchBoardDetail,
    fetchBoardLists,
    createBoard,
    updateBoard,
} from '../api/boardApi';

import {
    processJoin,
    processLogin,
    updateUser,
} from '../api/userApi';

import {
    fetchCategories
} from '../api/categoryApi';

import {
    saveComment,
    updateComment,
    deleteComment,
    plusTotalCounts,
    downTotalCounts,
    getCommentComp,
    getReplyComp,
    updateToggle,
    initCommentCompEvent,
    initCommentReplyCompEvent,
} from '../api/commentApi';

import $ from 'jquery';

export default {

    async PROCESS_LOGIN(context, { email, password }) {
        const response = await processLogin(email, password);
        // console.log(response);
        context.commit('SET_AUTHENTICATION', response.data);
        return response;
    },

    async PROCESS_JOIN(context, { email, username, password, passwordCheck, file }) {
        const response = await processJoin(email, username, password, passwordCheck, file)
        return response;
    },
    
    async UPDATE_USER(context, payload) {
        const response = await updateUser(payload.userId, payload);
        return response
    },

    async FETCH_CATEGORIES(context) {
        const response = await fetchCategories();
        let map = makeCategoryMap(response.data);
        context.commit('SET_CATEGORIES', response.data);
        context.commit('SET_CATEGORYMAP', map);
        return response;
    },

    async GET_BOARDLISTS(context, { category, subCategory, searchType, searchKeyword, page }) {
        console.log('GET_BOARDLISTS 시작');
        // console.log(category, subCategory, searchType, searchKeyword, page)
        let response;
        response = await fetchBoardLists(category, subCategory, searchType, searchKeyword, page);
        var categoryMap = context.state.categoryMap;

        context.commit('SET_TITLE', categoryMap.get(subCategory.toUpperCase()) + ' 게시판');
        context.commit('SET_PAGERESULTS', response.data);
        return response;
    },

    async GET_PAGE_DETAIL(context, { category, subCategory, boardId }) {
        console.log('GET_PAGE_DETAIL 시작');
        const response = await fetchBoardDetail(category, subCategory, boardId);
        var categoryMap = context.state.categoryMap;
        console.log('상세 페이지 조회 완료', response);

        context.commit('SET_TITLE', categoryMap.get(subCategory.toUpperCase()) + ' 게시판')
        context.commit('SET_PAGE_DETAIL', response.data.data);
        return response;
    },

    async CREATE_BOARD(context, { category, subCategory, params}) {
        const response = await createBoard(category, subCategory, params);
        console.log(response);
        return response;
    },

    async UPDATE_BOARD(context, { category, subCategory, boardId, params}) {
        const response = await updateBoard(category, subCategory, boardId, params);
        console.log(response);
        return response;
    },

    async SAVE_COMMENT(context, { boardId }) {
        let content = $("#comment-content").val();

        const response = await saveComment(boardId, null, content);
        let commentTotalCount = context.getters['getPageDetail'].commentTotalCount;
        console.log(response);

        $("#comment-box").append(getCommentComp(response.data.data));
        $("#comment-content").val('');

        initCommentCompEvent(context, response.data.data, boardId);
        plusTotalCounts(commentTotalCount);

        return response;
    },

    async SAVE_REPLY_COMMENT(context, { boardId, topCommentId }) {
        let content = $(`#reply-content-${topCommentId}`).val()

        const response = await saveComment(boardId, topCommentId, content);
        let commentTotalCount = context.getters['getPageDetail'].commentTotalCount;

        console.log(response);

        $(`#reply-bar-${topCommentId}`).before(getReplyComp(response.data.data));
        $(`#reply-content-${topCommentId}`).val('');

        initCommentReplyCompEvent(context, response.data.data, boardId, topCommentId);
        plusTotalCounts(commentTotalCount);
        
        return response;
    },

    async UPDATE_COMMENT(context, { boardId, commentId }) {
        let content = $(`#update-content-${commentId}`).val();

        const response = await updateComment(boardId, commentId, content);
        console.log(response);

        $(`#update-content-${commentId}`).val('');
        $(`#content-${commentId}`).text(content);
        updateToggle(commentId);

        return response;
    },

    async DELETE_COMMENT(context, { commentId, commentTotalCount }) {
        const response = await deleteComment(commentId);
        console.log(response);

        $(`#comment-${commentId}`).remove();
        downTotalCounts(commentTotalCount, response.data.data);

        return response;
    },

}

function makeCategoryMap(categories) {
    let map = new Map();
    for (var category of categories) {
        map.set(category.categoryName, category.categoryKoName);
        if (category.categoryName === 'ALL') {
            continue;
        }

        for (var subCategory of category.subCategories) {
            map.set(subCategory.categoryName, subCategory.categoryKoName);
        }
    }
    return map;
}