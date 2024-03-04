import {
    deleteUser,
    fetchedUserJoinStatistics,
    fetchedUserGenderRatioStatistics,
    fetchedUserAgeStatistics,
} from '../api/userApi';

import {
    fetchedCommentWriteStatistics,
    fetchedCommentCategoryStatistics,
    fetchedCommentGenderStatistics,
} from '../api/commentApi';

import {
    fetchedBoardWriteStatistics,
    fetchedBoardCategoryStatistics,
} from '../api/boardApi';

export default {
    async DELETE_USER(context, { userId }) {
        const response = await deleteUser(userId);
        return response;
    },

    async FETCHED_USER_JOIN_STATISTICS(context, { year, }) {
        const response = await fetchedUserJoinStatistics(year);
        return response;
    },

    async FETCHED_USER_GENDER_RATIO_STATISTICS(context, { year, }) {
        const response = await fetchedUserGenderRatioStatistics(year);
        return response;
    },

    async FETCHED_USER_AGE_STATISTICS(context, { year, }) {
        const response = await fetchedUserAgeStatistics(year);
        return response;
    },

    async FETCHED_COMMENT_WRITE_STATISTICS(context, { year, }) {
        const response = await fetchedCommentWriteStatistics(year);
        return response;
    },

    async FETCHED_COMMENT_CATEGORY_STATISTICS(context, { year, }) {
        const response = await fetchedCommentCategoryStatistics(year);
        return response;
    },

    async FETCHED_COMMENT_GENDER_STATISTICS(context, { year, }) {
        const response = await fetchedCommentGenderStatistics(year);
        return response;
    },

    async FETCHED_BOARD_WRITE_STATISTICS(context, { year, }) {
        const response = await fetchedBoardWriteStatistics(year);
        return response;
    },

    async FETCHED_BOARD_CATEGORY_STATISTICS(context, { year, }) {
        const response = await fetchedBoardCategoryStatistics(year);
            return response;
    },
}