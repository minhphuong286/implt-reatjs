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
const createUser = (data) => {
    console.log("CHeckDDDDDDD",data)
    return axios.post('/api/create-new-user', data)
}


export {
    handleLogin,
    getAllUsers,
    createUser,
}
// export default handleLogin;