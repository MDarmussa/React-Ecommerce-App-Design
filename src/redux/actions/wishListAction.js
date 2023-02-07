import {ADD_TO_WISHLIST, GET_ERROR, REMOVE_FROM_WISHLIST, USER_WISHLIST} from "../type";
import { useGetData, useGetDataToken } from "../../hooks/useGetData";
import { useInsertData } from "../../hooks/useInsertData";
import useDeleteData from '../../hooks/useDeleteData'


//Add product to wishlist
export const addProductToWishList = (body) => async(dispatch) => {
     try {
          const response = await useInsertData("/api/v1/wishlist", body); //we only have body object (no id param required) see postman on create wishlist route
          dispatch({
               type: ADD_TO_WISHLIST,
               payload: response,
          })
     } catch(e) {
          dispatch({
               type: ADD_TO_WISHLIST,
               payload: e.response,
          })
     }
}

//remove product to wishlist
export const removeProductToWishList = (prodID) => async(dispatch) => {
     try {
          const response = await useDeleteData(`/api/v1/wishlist/${prodID}`); //prodID see postman (backend), no body requied, just id param only
          dispatch({
               type: REMOVE_FROM_WISHLIST,
               payload: response,
               loading: true
          })
     } catch(e) {
          dispatch({
               type: REMOVE_FROM_WISHLIST,
               payload: e.response,
          })
     }
}


//get wishlist product
export const getProductToWishList = () => async(dispatch) => {
     try {
          const response = await useGetDataToken(`/api/v1/wishlist`);
          dispatch({
               type: USER_WISHLIST,
               payload: response,
               loading: true
          })
     } catch(e) {
          dispatch({
               type: USER_WISHLIST,
               payload: e.response,
          })
     }
}
