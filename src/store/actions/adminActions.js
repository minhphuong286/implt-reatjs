import actionTypes from './actionTypes';
import {
    getAllcodes, createUser, getAllUsers, deleteUser, saveUser,
    getTopDoctorHomeService
} from '../../services/userService';
import { toast } from 'react-toastify';

export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_GENDER_START })

            let res = await getAllcodes('GENDER');
            console.log('adAct: ', res)
            if (res && res.errCode === 0) {
                dispatch(fetchGenderSuccess(res.data))
            }
        } catch (e) {
            console.log(e)
            dispatch(fetchGenderFail());
        }

    }
}

export const fetchGenderSuccess = (inputGenders) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    gendersData: inputGenders
})

export const fetchGenderFail = () => ({
    type: actionTypes.FETCH_GENDER_FAIL
})

export const fetchPositionStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllcodes('position');
            if (res && res.errCode === 0) {
                dispatch(fetchPositionSuccess(res.data))
            }
        } catch (e) {
            console.log(e)
            dispatch(fetchPositionFail());
        }

    }
}

export const fetchPositionSuccess = (inputPositions) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    positionsData: inputPositions
})

export const fetchPositionFail = () => ({
    type: actionTypes.FETCH_POSITION_FAIL
})

export const fetchRoleStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllcodes('ROLE');
            if (res && res.errCode === 0) {
                dispatch(fetchRoleSuccess(res.data))
            }
        } catch (e) {
            console.log(e)
            dispatch(fetchRoleFail());
        }
    }
}
export const fetchRoleSuccess = (inputRoles) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    rolesData: inputRoles
})

export const fetchRoleFail = () => ({
    type: actionTypes.FETCH_ROLE_FAIL
})

export const createNewUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await createUser(data);
            if (res && res.errCode === 0) {
                dispatch(createUserSuccess())
                dispatch(fetchAllUserStart())
                toast.success('Create user successfully!')
            } else {
                toast.error(res.message)
            }
        } catch (e) {
            console.log(e)
            dispatch(createUserFail());
        }
    }
}
export const createUserSuccess = () => ({
    type: actionTypes.CREATE_USER_SUCCESS
})

export const createUserFail = () => ({
    type: actionTypes.CREATE_USER_FAIL
})

export const fetchAllUserStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllUsers('All');
            if (res && res.errCode === 0) {
                dispatch(fetchAllUserSuccess(res.users.reverse()))
            } else {
                toast.error(res.message)
            }
        } catch (e) {
            console.log(e)
            dispatch(createUserFail());
        }
    }
}
export const fetchAllUserSuccess = (users) => ({
    type: actionTypes.FETCH_ALL_USER_SUCCESS,
    users: users
})

export const fetchAllUserFail = () => ({
    type: actionTypes.FETCH_ALL_USER_FAIL
})

export const editUserStart = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await saveUser(data);
            if (res && res.errCode === 0) {
                dispatch(editUserSuccess())
                toast.success('Edit user successfully');
                dispatch(fetchAllUserStart())
            } else {
                toast.error(res.message)
            }
        } catch (e) {
            console.log(e)
            dispatch(editUserFail());
        }
    }
}
export const editUserSuccess = () => ({
    type: actionTypes.EDIT_USER_SUCCESS,
})

export const editUserFail = () => ({
    type: actionTypes.EDIT_USER_FAIL
})

export const deleteUserStart = (userId) => {
    return async (dispatch, getState) => {
        try {
            let res = await deleteUser(userId);
            if (res && res.errCode === 0) {
                dispatch(deleteUserSuccess())
                toast.success('Delete user successfully');
                dispatch(fetchAllUserStart())
            } else {
                toast.error(res.message)
            }
        } catch (e) {
            console.log(e)
            dispatch(deleteUserFail());
        }
    }
}
export const deleteUserSuccess = () => ({
    type: actionTypes.DELETE_USER_SUCCESS,
})

export const deleteUserFail = () => ({
    type: actionTypes.DELETE_USER_FAIL
})

export const fetchTopDoctor = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getTopDoctorHomeService('');
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTORS_SUCCESS,
                    dataDoctors: res.data
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTORS_FAIL
                })
            }
        } catch (e) {
            console.log('FETCH_TOP_DOCTORS_FAIL: ', e);
            dispatch({
                type: actionTypes.FETCH_TOP_DOCTORS_FAIL
            })
        }
    }
}