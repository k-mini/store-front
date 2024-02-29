import axios from 'axios';

const config = {
    baseUrl: 'http://localhost:9090'
};

export {
    processLogin,
    processJoin,
}

// 로그인 요청 (POST)
function processLogin(email, password) {
    return axios.post(`${config.baseUrl}/api/login`, { 
        email: email, 
        password: password
    });
}

// 회원가입 요청 (POST)
function processJoin(email, username, password, passwordCheck, file) {
    let formData = new FormData();
    let userSaveReqApiDto = {
        email: email,
        username: username,
        password: password,
        passwordCheck: passwordCheck,
    }
    
    // UserSaveReqApiDto Part
    formData.append(
        "userSaveReqApiDto",
        new Blob([JSON.stringify(userSaveReqApiDto)], { type: "application/json"})
    );
    // file Part
    formData.append("file", file);

    return axios.post(`${config.baseUrl}/api/user`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
}