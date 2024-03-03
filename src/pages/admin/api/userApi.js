import axios from 'axios';

const config = {
    baseUrl: 'http://localhost:9090'
};

export {
    deleteUser,
    fetchedUserJoinStatistics,
    fetchedUserRatioStatistics,
    fetchedUserAgeStatistics,
};

function deleteUser(userId) {
    return axios.delete(`${config.baseUrl}/api/user/${userId}`);
}

function fetchedUserJoinStatistics() {
    return axios.get('/api/admin/statistics/users/join');
}

function fetchedUserRatioStatistics() {
    return axios.get('/api/admin/statistics/users/ratio');
}

function fetchedUserAgeStatistics() {
    return axios.get('/api/admin/statistics/users/age');
}
