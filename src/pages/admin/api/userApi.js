import axios from 'axios';

const config = {
    baseUrl: 'http://localhost:9090'
};

export {
    deleteUser,
    fetchedUserJoinStatistics,
    fetchedUserGenderRatioStatistics,
    fetchedUserAgeStatistics,
};

function deleteUser(userId) {
    return axios.delete(`${config.baseUrl}/api/user/${userId}`);
}

function fetchedUserJoinStatistics(year) {
    let params = { year: year }
    return axios.get('/api/admin/statistics/users/join', { params });
}

function fetchedUserGenderRatioStatistics(year) {
    let params = { year: year}
    return axios.get('/api/admin/statistics/users/gender', { params });
}

function fetchedUserAgeStatistics(year) {
    let params = { year: year }
    return axios.get('/api/admin/statistics/users/age', { params });
}
