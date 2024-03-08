
export {
    getJwtToken,
    setJwtToken,
    removeJwtToken,
}

function getJwtToken() {
    let token = localStorage.getItem("Authorization");
    return token;
}

function setJwtToken(value) {
    if (!value.startsWith('Bearer ')) {
        value = 'Bearer ' + value;
    }
    localStorage.setItem("Authorization", value);
}

function removeJwtToken() {
    localStorage.removeItem("Authorization");
}