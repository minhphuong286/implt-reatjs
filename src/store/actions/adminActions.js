import actionTypes from './actionTypes';
import { getAllcodes } from '../../services/userService';

export const fetchGenderStart = () => ({
    type: actionTypes.FETCH_GENDER_SUCCESS
})
export const fetchGenderSuccess = (inputData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    genderAct: inputData,
})
export const fetchGenderFail = () => ({
    type: actionTypes.FETCH_GENDER_FAIL
})
