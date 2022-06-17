import axios from "../axios";

const handleLogin = (username, password) => {
    return axios.post('/api/login', {
        email: username,
        password: password
    });
}
const getAllUsers = (inputId) => {
    return axios.get(`/api/get-all-users?id=${inputId}`, {
        id: inputId
    })
}

export {
    handleLogin,
    getAllUsers
}
// export default handleLogin;