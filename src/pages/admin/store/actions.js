import {
    deleteUser
} from '../api/userApi';

export default {
    async DELETE_USER(context, { userId }) {
        const response = await deleteUser(userId);
        return response;
    }
}