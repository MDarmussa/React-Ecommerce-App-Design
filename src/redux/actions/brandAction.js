import {CREATE_BRAND, GET_ALL_BRAND, GET_ERROR} from "../type";
import useGetData from "../../hooks/useGetData";
import { useInsertDataWithImage } from "../../hooks/useInsertData";

//get all brand
export const getAllBrand = (limit) => async(dispatch) => {
     try {
          const response = await useGetData(`/api/v1/brands?limit=${limit}`); 
          
          dispatch({
               type: GET_ALL_BRAND,
               payload: response //payload is coming from BrandReducer
          })
     } catch(e) {
          dispatch({
               type: GET_ERROR,
               payload: "Error" + e,
          })
     }
}

//get all brands with pagination
export const getAllBrandPage = (page) => async(dispatch) => {
     try {
          const response = await useGetData(`/api/v1/brands?limit=4&page=${page}`) //this limit is coming from the backend to tell how many item to show in one page which is 3
          dispatch({
               type: GET_ALL_BRAND,
               payload: response, 
          })
     } catch(e) {
          dispatch({
               type: GET_ERROR,
               payload: "Error" + e,
          })
     }
}

//create a brand
export const createBrand = (formData) => async(dispatch) => {
     try {
          const response = await useInsertDataWithImage("/api/v1/brands", formData)
          dispatch({
               type: CREATE_BRAND,
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