import {CREATE_NEW_USER, LOGIN_USER, GET_CURRENT_USER, FORGET_PASSWORD, VERIFY_PASSWORD, RESET_PASSWORD} from "../type";
import { useInsertData } from "../../hooks/useInsertData";
import { useGetData, useGetDataToken } from "../../hooks/useGetData";
import { useUpdateData } from "../../hooks/useUpdateData";

//create new user
export const createNewUser = (data) => async (dispatch) => {
     try {
          const response = await useInsertData(`/api/v1/auth/signup`, data)
          dispatch({
               type: CREATE_NEW_USER,
               payload: response,
               loading: true
          })
     } catch(e) {
          dispatch({
               type: CREATE_NEW_USER, //must dispatch on the same value and the response will send back the values
               payload: e.response,
          })
     }
}

//login user
export const loginUser = (data) => async (dispatch) => {
     try {
          const response = await useInsertData(`/api/v1/auth/login`, data)
          dispatch({
               type: LOGIN_USER,
               payload: response,
               loading: true
          })
     } catch(e) {
          dispatch({
               type: LOGIN_USER,
               payload: e.response,
          })
     }
}

//login user with token
export const getLoggedUser = () => async (dispatch) => {
     try {
          const response = await useGetDataToken(`/api/v1/users/getMe`)
          dispatch({
               type: GET_CURRENT_USER,
               payload: response,
               loading: true
          })
     } catch(e) {
          dispatch({
               type: GET_CURRENT_USER,
               payload: e.response,
          })
     }
}


//forget password
export const forgetPassword = (data) => async (dispatch) => {
     try {
          const response = await useInsertData(`/api/v1/auth/forgotPasswords`, data)
          dispatch({
               type: FORGET_PASSWORD,
               payload: response,
               loading: true
          })
     } catch(e) {
          dispatch({
               type: FORGET_PASSWORD,
               payload: e.response,
          })
     }
}

//verify password
export const verifyPassword = (data) => async (dispatch) => {
     try {
          const response = await useInsertData(`/api/v1/auth/verifyResetCode`, data)
          dispatch({
               type: VERIFY_PASSWORD,
               payload: response,
               loading: true
          })
     } catch(e) {
          dispatch({
               type: FORGET_PASSWORD,
               payload: e.response,
          })
     }
}


//reset password
export const resetPassword = (data) => async (dispatch) => {
     try {
          const response = await useUpdateData(`/api/v1/auth/resetPassword`, data)
          dispatch({
               type: RESET_PASSWORD,
               payload: response,
               loading: true
          })
     } catch(e) {
          dispatch({
               type: FORGET_PASSWORD,
               payload: e.response,
          })
     }
}