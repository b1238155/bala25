function loginUser(username, password) {
    if (username === "user" && password === "pass") {
        return "Login Successful!";
    } else {
        return "Login Unsuccessful!";
    }
}

module.exports = loginUser;


