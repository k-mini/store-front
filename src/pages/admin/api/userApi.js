import axios from 'axios';

const config = {
    baseUrl: 'http://localhost:9090'
};

export {
    deleteUser,
    fetchedUserJoinStatistics,
};

function deleteUser(userId) {
    return axios.delete(`${config.baseUrl}/api/user/${userId}`);
}

function fetchedUserJoinStatistics() {
    return ;
}