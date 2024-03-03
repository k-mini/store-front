import {
    deleteUser,
    fetchedUserJoinStatistics,
    fetchedUserRatioStatistics,
    fetchedUserAgeStatistics,
} from '../api/userApi';

export default {
    async DELETE_USER(context, { userId }) {
        const response = await deleteUser(userId);
        return response;
    },

    async FETCHED_USER_JOIN_STATISTICS() {
        const response = await fetchedUserJoinStatistics();
        return response;
    },

    async FETCHED_USER_RATIO_STATISTICS() {
        const response = await fetchedUserRatioStatistics();
        return response;
    },

    async FETCHED_USER_AGE_STATISTICS() {
        const response = await fetchedUserAgeStatistics();
        return response;
    },
}