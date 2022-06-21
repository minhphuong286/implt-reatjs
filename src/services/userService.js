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
    // console.log("CHeckDDDDDDD",data)
    return axios.post('/api/create-new-user', data)
}
const deleteUser = (userId) => {
    // console.log('check from axios: ', userId)
    return axios.delete('/api/del-user', { data: { id: userId } });
}

const saveUser = (data) => {
    console.log("data put on server: ", data)
    return axios.put('/api/edit-user', data)
}

export {
    handleLogin,
    getAllUsers,
    createUser,
    deleteUser,
    saveUser,
}
// export default handleLogin;