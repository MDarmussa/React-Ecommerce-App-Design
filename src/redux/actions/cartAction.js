import {ADD_TO_CART, APPLY_COUPON, DELETE_ONE_ITRM_FROM_CART, GET_ALL_USER_CART, GLEAR_ALL_USER_CART, UPDATE_ITRM_FROM_CART} from "../type";
import { useGetDataToken } from "../../hooks/useGetData";
import { useInsertData } from "../../hooks/useInsertData";
import useDeleteData from "../../hooks/useDeleteData";
import {useUpdateData} from "../../hooks/useUpdateData";

//get all cart
export const addProductToCart = (body) => async(dispatch) => {
     try {
          const response = await useInsertData(`/api/v1/cart`, body); 
          dispatch({
               type: ADD_TO_CART,
               payload: response //payload is coming from BrandReducer
          })
     } catch(e) {
          dispatch({
               type: ADD_TO_CART,
               payload: "Error" + e,
          })
     }
}


//get all cart items
export const getAllUserCartItems = () => async(dispatch) => {
     try {
          const response = await useGetDataToken(`/api/v1/cart`); 
          // console.log(response)
          dispatch({
               type: GET_ALL_USER_CART,
               payload: response //payload is coming from BrandReducer
          })
     } catch(e) {
          dispatch({
               type: GET_ALL_USER_CART,
               payload: "Error" + e,
          })
     }
}

//clear all cart items //this will remove them from the cart only no the database
export const clearAllCartItem = () => async(dispatch) => {
     try {
          const response = await useDeleteData(`/api/v1/cart`); 
          dispatch({
               type: GLEAR_ALL_USER_CART,
               payload: response //payload is coming from BrandReducer
          })
     } catch(e) {
          dispatch({
               type: GLEAR_ALL_USER_CART,
               payload: "Error" + e,
          })
     }
}

//delete one item - basket cart
export const clearOneCartItem = (id) => async(dispatch) => {
     try {
          const response = await useDeleteData(`/api/v1/cart/${id}`); 
          dispatch({
               type: DELETE_ONE_ITRM_FROM_CART,
               payload: response //payload is coming from BrandReducer
          })
     } catch(e) {
          dispatch({
               type: DELETE_ONE_ITRM_FROM_CART,
               payload: "Error" + e,
          })
     }
}


//update Cart Item - basket cart
export const updateCartItem = (id, body) => async(dispatch) => {
     try {
          const response = await useUpdateData(`/api/v1/cart/${id}`, body); 
          dispatch({
               type: UPDATE_ITRM_FROM_CART,
               payload: response //payload is coming from BrandReducer
          })
     } catch(e) {
          dispatch({
               type: UPDATE_ITRM_FROM_CART,
               payload: "Error" + e,
          })
     }
}



//apply coupon cart
export const applyCoupon = (body) => async(dispatch) => {
     try {
          const response = await useUpdateData(`/api/v1/cart/applyCoupon`, body); 
          dispatch({
               type: APPLY_COUPON,
               payload: response 
          })
     } catch(e) {
          dispatch({
               type: APPLY_COUPON,
               payload: "Error" + e,
          })
     }
}
