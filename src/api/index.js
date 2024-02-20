import axios from 'axios';

const config = {
    baseUrl: 'http://localhost:8080'
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
function fetchBoardLists(categoryName, subCategoryName) {
    return axios.get(`${config.baseUrl}/api/boards/${categoryName}/${subCategoryName}`);
}

export { 
    postLogin,
    fetchCategories,
    fetchBoardLists,
 };