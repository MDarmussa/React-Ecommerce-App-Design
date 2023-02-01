import { ALL_REVIEWS_PRODUCT, CREATE_REVIEW, DELETE_REVIEW, UPDATE_REVIEW } from "../type";
import { useGetDataToken } from "../../hooks/useGetData";
import { useInsertData } from "../../hooks/useInsertData";
import useDeleteData from "../../hooks/useDeleteData";
import {useUpdateData} from "../../hooks/useUpdateData"

//create review
export const createReview = (prodID, body) => async(dispatch) => { //body is json body, see create review on product on postman
     try {
          const response = await useInsertData(`/api/v1/products/${prodID}/reviews`, body); 
          
          dispatch({
               type: CREATE_REVIEW,
               payload: response //payload is coming from BrandReducer
          })
     } catch(e) {
          dispatch({
               type: CREATE_REVIEW,
               payload: e.response,
          })
     }
}

//get all reviews to one product
export const allReviewsProduct = (prodID, page, limit) => async(dispatch) => { //body is json body, see create review on product on postman
     try {
          const response = await useGetDataToken(`/api/v1/products/${prodID}/reviews?page=${page}&limit=${limit}`); 
          
          dispatch({
               type: ALL_REVIEWS_PRODUCT,
               payload: response //payload is coming from BrandReducer
          })
     } catch(e) {
          dispatch({
               type: ALL_REVIEWS_PRODUCT,
               payload: e.response,
          })
     }
}

//delete review
export const deleteReviewOnProduct = (id) => async(dispatch) => { //body is json body, see create review on product on postman
     try {
          const response = await useDeleteData(`/api/v1/reviews/${id}`); 
          
          dispatch({
               type: DELETE_REVIEW,
               payload: response //payload is coming from BrandReducer
          })
     } catch(e) {
          dispatch({
               type: DELETE_REVIEW,
               payload: e.response,
          })
     }
}


//update review
export const updateReviewOnProduct = (id, body) => async(dispatch) => { 
     try {
          const response = await useUpdateData(`/api/v1/reviews/${id}`, body); 
          
          dispatch({
               type: UPDATE_REVIEW,
               payload: response //payload is coming from BrandReducer
          })
     } catch(e) {
          dispatch({
               type: UPDATE_REVIEW,
               payload: e.response,
          })
     }
}
