import { CREATE_PRODUCTS, GET_All_PRODUCTS, GET_PRODUCT_DETAILS, GET_ERROR } from "../type";
import { useInsertDataWithImage } from "../../hooks/useInsertData";
import useGetData from "../../hooks/useGetData";



//create products
export const createProduct = (formatData) => async(dispatch) => {
     try {
          const response = await useInsertDataWithImage("/api/v1/products/", formatData)
          dispatch({
               type: CREATE_PRODUCTS,
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


//gat All products with pagination
export const getAllProducts = (limit) => async (dispatch) => {
     try {
          const response = await useGetData(`/api/v1/products/?limit=${limit}`) //useGetData from hooks, it use to retrieve data from our database
          dispatch({
               type: GET_All_PRODUCTS,
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

//get one products with id
export const getOneProducts = (id) => async (dispatch) => {
     try {
          const response = await useGetData(`/api/v1/products/${id}`)
          dispatch({
               type: GET_PRODUCT_DETAILS,
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