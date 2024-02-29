import axios from 'axios';

export {
    deleteComment,
    deleteComments
}

const config = {
    baseUrl: 'http://localhost:9090'
}

function deleteComment(commentId) {
    return axios.delete(`${config.baseUrl}/api/admin/comment/${commentId}`);
}

function deleteComments(commentIds) {
    return axios.delete(`${config.baseUrl}/api/admin/comments`,{
        params: {
            commentIds: commentIds.join(',')
        }
    });
}