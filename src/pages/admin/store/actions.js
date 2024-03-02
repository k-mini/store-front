import {
    deleteUser,
    fetchedUserJoinStatistics,
} from '../api/userApi';

export default {
    async DELETE_USER(context, { userId }) {
        const response = await deleteUser(userId);
        return response;
    },

    async FETCHED_USER_JOIN_STATISTICS() {
        const response = await fetchedUserJoinStatistics();
        return response;
    }
}