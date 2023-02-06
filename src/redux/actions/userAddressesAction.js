import { ADD_USER_ADDRESSES, DELETE_USER_ADDRESSES, GET_ALL_USER_ADDRESSES, GET_ONE_USER_ADDRESSES, UPDATE_USER_ADDRESSES } from "../type";
import { useInsertData } from "../../hooks/useInsertData";
import {useGetDataToken} from '../../hooks/useGetData'
import useDeleteData from "../../hooks/useDeleteData";
import {useUpdateData} from '../../hooks/useUpdateData'



//add user address
export const addUserAddress = (body) => async(dispatch) => {
     try {
          const response = await useInsertData("/api/v1/addresses", body)
          console.log(response)
          dispatch({
               type: ADD_USER_ADDRESSES,
               payload: response,
          })
     } catch(e) {
          dispatch({
               type: ADD_USER_ADDRESSES,
               payload: e.response
          })
     }
}



//get all user addresses
export const getAllUserAddress = () => async(dispatch) => {
     try {
          const response = await useGetDataToken("/api/v1/addresses")
          //console.log(response)
          dispatch({
               type: GET_ALL_USER_ADDRESSES,
               payload: response,
          })
     } catch(e) {
          dispatch({
               type: GET_ALL_USER_ADDRESSES,
               payload: e.response
          })
     }
}

//delete user addresses
export const deleteUserAddress = (id) => async(dispatch) => {
     try {
          const response = await useDeleteData(`/api/v1/addresses/${id}`)
          //console.log(response)
          dispatch({
               type: DELETE_USER_ADDRESSES,
               payload: response,
          })
     } catch(e) {
          dispatch({
               type: DELETE_USER_ADDRESSES,
               payload: e.response
          })
     }
}

//get all user addresses
export const getOneUserAddress = (id) => async(dispatch) => {
     try {
          const response = await useGetDataToken(`/api/v1/addresses/${id}`)
          console.log(response)
          dispatch({
               type: GET_ONE_USER_ADDRESSES,
               payload: response,
          })
     } catch(e) {
          dispatch({
               type: GET_ONE_USER_ADDRESSES,
               payload: e.response
          })
     }
}



//update user addresses
export const updateUserAddress = (id, body) => async(dispatch) => {
     try {
          const response = await useUpdateData(`/api/v1/addresses/${id}`, body)
          //console.log(response)
          dispatch({
               type: UPDATE_USER_ADDRESSES,
               payload: response,
          })
     } catch(e) {
          dispatch({
               type: UPDATE_USER_ADDRESSES,
               payload: e.response
          })
     }
}

