import axios from 'axios';

export {
    deleteBoard,
    deleteBoards,
    fetchedBoardWriteStatistics,
    fetchedBoardCategoryStatistics,
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

function fetchedBoardWriteStatistics(year) {
    let params = { year: year};
    return axios.get(`${config.baseUrl}/api/admin/statistics/boards/write`, { params });
}

function fetchedBoardCategoryStatistics(year) {
    let params = { year: year};
    return axios.get(`${config.baseUrl}/api/admin/statistics/boards/category`, { params });
}