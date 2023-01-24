import {CREATE_CATEGORY, GET_ALL_CATEGORY, GET_ONE_CATEGORY, GET_ERROR} from "../type";
import useGetData from "../../hooks/useGetData";
import { useInsertDataWithImage } from "../../hooks/useInsertData";

//get all category
export const getAllCategory = (limit) => async(dispatch) => {
     try {
          const response = await useGetData(`/api/v1/categories?limit=${limit}`); 
          
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

//get all category with pagination
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