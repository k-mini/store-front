import axios from 'axios';

export {
    deleteComment,
    deleteComments,
    fetchedCommentWriteStatistics,
    fetchedCommentCategoryStatistics,
    fetchedCommentGenderStatistics,
}

const config = {
    baseUrl: 'http://localhost:9090'
}

function deleteComment(commentId) {
    return axios.delete(`${config.baseUrl}/api/admin/comment/${commentId}`);
}

function deleteComments(commentIds) {
    let params = { commentIds: commentIds.join(',')};
    return axios.delete(`${config.baseUrl}/api/admin/comments`,{ params });
}

function fetchedCommentWriteStatistics(year) {
    let params = { year: year };
    return axios.get(`${config.baseUrl}/api/admin/statistics/comments/write`,{ params });
}

function fetchedCommentCategoryStatistics(year) {
    let params = { year: year };
    return axios.get(`${config.baseUrl}/api/admin/statistics/comments/category`, { params });
}

function fetchedCommentGenderStatistics(year) {
    let params = { year: year };
    return axios.get(`${config.baseUrl}/api/admin/statistics/comments/gender`, { params });
}