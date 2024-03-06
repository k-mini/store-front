import axios from 'axios';
import { getJwtToken } from './jwtApi';

const config = {
    baseUrl: 'http://localhost:9090'
};

export {
    fetchBoardLists,
    fetchBoardDetail,
    createBoard,
    updateBoard,
    fetchImage
}


// 게시물 요청 (GET)
function fetchBoardLists(categoryName, subCategoryName, searchType, searchKeyword, page) {
    return axios.get(`${config.baseUrl}/api/boards/${categoryName}/${subCategoryName}`, {
        params: {
            searchType: searchType,
            searchKeyword: searchKeyword,
            page: page,
        },
        headers: {
            Authorization: getJwtToken(),
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
        },
        headers: {
            Authorization: getJwtToken(),
        }
    });
}

// 게시물 새로 생성 (POST)
function createBoard(categoryName, subCategoryName, params) {
    let formData = new FormData();

    // itemBoardSaveReqApiDto part
    let itemBoardSaveReqApiDto = {
        title: params.title,
        content: params.content,
        itemName: params.itemName,
    }
    formData.append("itemBoardSaveReqApiDto", 
        new Blob([JSON.stringify(itemBoardSaveReqApiDto)], { type: "application/json" })
    );

    // file part
    let file = params.file
    formData.append("file", file)

    return axios.post(`${config.baseUrl}/api/board/${categoryName}/${subCategoryName}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: getJwtToken(),
        }
    })
}

// 게시물 수정 (PATCH) 
function updateBoard(categoryName, subCategoryName, boardId, params) {
    let formData = new FormData();

    // itemBoardUpdateReqApiDto part
    let itemBoardUpdateReqApiDto = {
        title: params.title,
        content: params.content,
        itemName: params.itemName,
    };
    let blob = new Blob([JSON.stringify(itemBoardUpdateReqApiDto)], { type: 'application/json'});
    formData.append("itemBoardUpdateReqApiDto", blob);

    // file part
    let file = params.file;
    formData.append("file", file);

    return axios.patch(`${config.baseUrl}/api/board/${categoryName}/${subCategoryName}/${boardId}`, formData, {
        headers : {
            'Content-Type' : 'multipart/form-data',
            Authorization: getJwtToken(),
        }
    })
}


// 게시물 수정할 때 기존 게시물에 있었던 이미지를 가져와서 input에 세팅하는 메서드
function fetchImage(thumbnailUrl) {
    let url = `http://localhost:9090/images/${thumbnailUrl}`;
    return axios.get(url, { responseType: 'blob'});
}






