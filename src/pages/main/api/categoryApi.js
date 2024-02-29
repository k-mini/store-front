import axios from 'axios';

const config = {
    baseUrl: 'http://localhost:9090'
};

export {
    fetchCategories,
}

// 카테고리 요청 (GET)
function fetchCategories() {
    return axios.get(`${config.baseUrl}/api/categories`);
}
