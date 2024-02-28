import axios from 'axios';

export {
    deleteBoard
}

const config = {
    baseUrl: 'http://localhost:9090'
};

function deleteBoard(boardId,category,subCategory) {
    console.log('deleteBoard 시작');
    return axios.delete(`${config.baseUrl}/api/board/${category.toLowerCase()}/${subCategory.toLowerCase()}/${boardId}`);
}