import {ADD_COUPON, DELETE_COUPON, EDIT_COUPON, GET_All_COUPONS, GET_ONE_COUPON} from "../type";
import { useInsertData } from "../../hooks/useInsertData";
import { useGetDataToken } from "../../hooks/useGetData";
import useDeleteData from '../../hooks/useDeleteData'
import { useUpdateData } from "../../hooks/useUpdateData";


//add coupon
export const addCoupon = (body) => async(dispatch) => {
     try {
          const response = await useInsertData("/api/v1/coupons", body)
          console.log(response)
          dispatch({
               type: ADD_COUPON,
               payload: response,
          })
     } catch(e) {
          dispatch({
               type: ADD_COUPON,
               payload: e.response
          })
     }
}

//create category
export const getAllCoupons = () => async(dispatch) => {
     try {
          const response = await useGetDataToken("/api/v1/coupons") //GET_All_COUPONs because admin only can get it. it's secured // we can add pagination by checking the backend route by adding limit and page params
          dispatch({
               type: GET_All_COUPONS,
               payload: response,
          })
     } catch(e) {
          dispatch({
               type: GET_All_COUPONS,
               payload: e.response
          })
     }
}

//delete coupon
export const deleteCoupon = (id) => async(dispatch) => {
     try {
          const response = await useDeleteData(`/api/v1/coupons/${id}`)
          console.log(response)
          dispatch({
               type: DELETE_COUPON,
               payload: response,
          })
     } catch(e) {
          dispatch({
               type: DELETE_COUPON,
               payload: e.response
          })
     }
}

//get one coupon
export const getOneCoupon = (id) => async(dispatch) => {
     try {
          const response = await useGetDataToken(`/api/v1/coupons/${id}`) //4) id: will compare the id that is coming from the edit-coupon-hook.js and get the result from the reducer
          console.log(response)
          dispatch({
               type: GET_ONE_COUPON,
               payload: response,
          })
     } catch(e) {
          dispatch({
               type: GET_ONE_COUPON,
               payload: e.response
          })
     }
}


//edit coupon
export const editCoupon = (id, body) => async(dispatch) => { //for more info about the params (id, body), see backend or postman. the route requires both
     try {
          const response = await useUpdateData(`/api/v1/coupons/${id}`, body)
          console.log(response)
          dispatch({
               type: EDIT_COUPON,
               payload: response,
          })
     } catch(e) {
          dispatch({
               type: GET_ONE_COUPON,
               payload: e.response
          })
     }
}