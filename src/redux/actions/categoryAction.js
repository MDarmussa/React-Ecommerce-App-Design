import {CREATE_CATEGORY, GET_ALL_CATEGORY, GET_ONE_CATEGORY, GET_ERROR, DELETE_CATEGORY, UPDATE_CATEGORY} from "../type";
import { useGetData } from "../../hooks/useGetData";
import { useInsertDataWithImage } from "../../hooks/useInsertData";
import useDeleteData from "../../hooks/useDeleteData";
import { useUpdateData, useUpdateDataWithImage, useUpdateDataWithImageNoToken } from "../../hooks/useUpdateData";

//get all category
export const getAllCategory = (limit) => async(dispatch) => {
     try {
          const response = await useGetData(`/api/v1/categories?limit=${limit}`); 
          console.log(response)
          dispatch({
               type: GET_ALL_CATEGORY,
               payload: response //payload is coming from CategoryReducer
          })
     } catch(e) {
          dispatch({
               type: GET_ERROR,
               payload: "Error" + e,
          })
     }
}


//get one category
export const getOneCategory = (id) => async(dispatch) => {
     try {
          const response = await useGetData(`/api/v1/categories/${id}`)
          dispatch({
               type: GET_ONE_CATEGORY,
               payload: response,
          })
     } catch(e) {
          dispatch({
               type: GET_ERROR,
               payload: "Error" + e,
          })
     }
}

//get category with pagination
export const getAllCategoryPage = (page) => async(dispatch) => {
     try {
          const response = await useGetData(`/api/v1/categories?limit=6&page=${page}`) //this limit is coming from the backend to tell how many item to show in one page which is 3
          dispatch({
               type: GET_ALL_CATEGORY,
               payload: response, //payload is coming from CategoryReducer
          })
     } catch(e) {
          dispatch({
               type: GET_ERROR,
               payload: "Error" + e,
          })
     }
}

//get one category with pagination
export const getAllCategoryLimitPage = (page, limit) => async(dispatch) => {
     try {
          const response = await useGetData(`/api/v1/categories?limit=${limit}&page=${page}`)
          dispatch({
               type: GET_ALL_CATEGORY,
               payload: response, //payload is coming from CategoryReducer
          })
     } catch(e) {
          dispatch({
               type: GET_ERROR,
               payload: "Error" + e,
          })
     }
}


//create category
export const createCategory = (formData) => async(dispatch) => {
     try {
          const response = await useInsertDataWithImage("/api/v1/categories", formData)
          dispatch({
               type: CREATE_CATEGORY,
               payload: response,
               loading: true
          })
     } catch(e) {
          dispatch({
               type: GET_ERROR,
               payload: "Error" + e,
          })
     }
}


//delete category
export const deleteCategory = (id) => async(dispatch) => {
     try {
          const response = await useDeleteData(`/api/v1/categories/${id}`)
          dispatch({
               type: DELETE_CATEGORY,
               payload: response,
               loading: true
          })
     } catch(e) {
          dispatch({
               type: GET_ERROR,
               payload: "Error" + e,
          })
     }
}

//update category with id
export const updateCategory = (id, formData) => async (dispatch) => {
     try {
          const response = await useUpdateDataWithImage(`/api/v1/categories/${id}`, formData)
          console.log('in Action', response)
          dispatch({
               type: UPDATE_CATEGORY,
               payload: response,
               loading: true
          })
     } catch(e) {
          dispatch({
               type: GET_ERROR,
               payload: "Error " + e,
          })
     }
}


