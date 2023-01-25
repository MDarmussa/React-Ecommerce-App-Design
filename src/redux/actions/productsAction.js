import { CREATE_PRODUCTS, GET_All_PRODUCTS, GET_PRODUCT_DETAILS, GET_ERROR, GET_PRODUCT_LIKE, DELETE_PRODUCT } from "../type";
import { useInsertDataWithImage } from "../../hooks/useInsertData";
import useGetData from "../../hooks/useGetData";
import useDeleteData from "../../hooks/useDeleteData";



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

//gat All products with pagination and page number
export const getAllProductsPage = (page, limit) => async (dispatch) => {
     try {
          const response = await useGetData(`/api/v1/products?page=${page}&limit=${limit}`) //useGetData from hooks, it use to retrieve data from our database
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

//get one products with id
export const getProductLike = (id) => async (dispatch) => {
     try {
          const response = await useGetData(`/api/v1/products?category=${id}`)
          dispatch({
               type: GET_PRODUCT_LIKE,
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

//delete one product with id
export const deleteProducts = (id) => async (dispatch) => {
     try {
          const response = await useDeleteData(`/api/v1/products/${id}`)
          dispatch({
               type: DELETE_PRODUCT,
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