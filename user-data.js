// user-data.js
// 专门管理账号数据（localStorage版）

// 初始化账号数据，如果不存在
function initUserData(user, balance = 10000, equity = 10250) {
    let userData = JSON.parse(localStorage.getItem("userData")) || {};
    if (!userData[user]) {
        userData[user] = { balance, equity };
        localStorage.setItem("userData", JSON.stringify(userData));
        console.log(`User ${user} initialized`);
    }
}

// 修改账号数据（覆盖/增加字段）
function setUserData(user, newData) {
    let userData = JSON.parse(localStorage.getItem("userData")) || {};
    if (!userData[user]) userData[user] = {};
    userData[user] = { ...userData[user], ...newData };
    localStorage.setItem("userData", JSON.stringify(userData));
    console.log(`User ${user} data updated`, newData);
}

// 获取账号数据
function getUserData(user) {
    let userData = JSON.parse(localStorage.getItem("userData")) || {};
    return userData[user] || null;
}
