import axios from 'axios';

export {
    deleteBoard,
    deleteBoards,
}

const config = {
    baseUrl: 'http://localhost:9090'
};

function deleteBoard(boardId,category,subCategory) {
    return axios.delete(`${config.baseUrl}/api/admin/board/${category.toLowerCase()}/${subCategory.toLowerCase()}/${boardId}`);
}

function deleteBoards(boardIds) {
    console.log("deleteBoards 시작");
    return axios.delete(`${config.baseUrl}/api/admin/boards`, {
        params: {
            boardIds: boardIds.join(',')
        }
    });
}