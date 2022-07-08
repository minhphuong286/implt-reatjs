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
    // console.log("data put on server: ", data)
    return axios.put('/api/edit-user', data)
}

const getAllcodes = (inputType) => {
    return axios.get(`/api/get-all-codes?type=${inputType}`)
}

const getTopDoctorHomeService = (limit) => {
    return axios.get(`/api/top-doctor-home?limit=${limit}`)
}

const getAllDoctors = () => {
    return axios.get(`/api/get-all-doctors`)
}

const saveDetailDoctor = (data) => {
    return axios.post(`/api/save-infor-doctor`, data)
}
const getDetailInforDoctor = (id) => {
    return axios.get(`/api/get-detail-doctor-byid/?id=${id}`)
}
export {
    handleLogin,
    getAllUsers,
    createUser,
    deleteUser,
    saveUser,
    getAllcodes,
    getTopDoctorHomeService,
    getAllDoctors,
    saveDetailDoctor,
    getDetailInforDoctor
}