
export {
    getJwtToken,
    removeJwtToken,
}

function getJwtToken() {
    let token = localStorage.getItem("Authorization");
    return token;
}

function removeJwtToken() {
    localStorage.removeItem("Authorization");
}