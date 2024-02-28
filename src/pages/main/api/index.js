import axios from 'axios';

const config = {
    baseUrl: 'http://localhost:9090'
};

// 로그인 요청 (POST)
function postLogin(email, password) {
    return axios.post(`${config.baseUrl}/auth/signin`, { email: email, password: password});
}

// 카테고리 요청 (GET)
function fetchCategories() {
    return axios.get(`${config.baseUrl}/api/categories`);
}

// 게시물 요청 (GET)
function fetchBoardLists(categoryName, subCategoryName, searchType, searchKeyword, page) {
    return axios.get(`${config.baseUrl}/api/boards/${categoryName}/${subCategoryName}`, {
        params: {
            searchType: searchType,
            searchKeyword: searchKeyword,
            page: page,
        }
    });
}

// 게시물 상세정보 요청 (GET)
function fetchBoardDetail(categoryName, subCategoryName, boardId) {
    return axios.get(`${config.baseUrl}/api/board/${categoryName}/${subCategoryName}/${boardId}`,{
        param: {
            categoryName: categoryName,
            subCategoryName: subCategoryName,
            boardId: boardId,
        }
    });
}

export { 
    postLogin,
    fetchCategories,
    fetchBoardLists,
    fetchBoardDetail,
 };