import axios from 'axios';
import { getJwtToken } from './jwtApi';

const config = {
    baseUrl: 'http://localhost:9090'
};

export {
    processLogin,
    processJoin,
    fetchUserProfileImage,
    updateUser,
    fetchAuthentication,
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
    
    // UserSaveReqApiDto Part
    let userSaveReqApiDto = {
        email: email,
        username: username,
        password: password,
        passwordCheck: passwordCheck,
    }
    let blob = new Blob([JSON.stringify(userSaveReqApiDto)], { type: "application/json"});
    formData.append("userSaveReqApiDto", blob);

    // file Part
    formData.append("file", file);

    return axios.post(`${config.baseUrl}/api/user`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
}

// 회원수정 요청 (PATCH)
function updateUser(userId, params) {
    let formData = new FormData();

    // userUpdateReqApiDto part
    let userUpdateReqApiDto = {
        email: params.email,
        username: params.username,
        password: params.password,
        passwordCheck: params.passwordCheck,
    }
    let blob = new Blob([JSON.stringify(userUpdateReqApiDto)], { type: 'application/json'});
    formData.append("userUpdateReqApiDto", blob);

    // file part
    formData.append("file", params.file);

    return axios.patch(`${config.baseUrl}/api/user/${userId}`, formData, 
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }, 
        { 
            headers : { Authorization: getJwtToken()},
        })
}

// 회원 프로필 수정할 때 기존 프로필에 있었던 이미지를 가져와서 input에 세팅하는 메서드
function fetchUserProfileImage(thumbnailUrl) {
    let url = `http://localhost:9090/images/${thumbnailUrl}`;
    return axios.get(url, { responseType: 'blob'});
}

// 인증 정보 가져오기
function fetchAuthentication(token) {
    return axios.get(`${config.baseUrl}/api/user/authentication`, {
        headers: {
            Authorization: token,
        }
    })
}