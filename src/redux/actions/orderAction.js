import { useGetDataToken } from "../../hooks/useGetData"
import { GET_ALL_ORDERS, GET_ONE_ORDER, UPDATE_ORDER_DELIVER, UPDATE_ORDER_PAY } from "../type"
import {useUpdateData} from '../../hooks/useUpdateData'



//get all orders 
export const getAllOrders = (page, limit) => async(dispatch) => {
     try {
          const response = await useGetDataToken(`/api/v1/orders?limit=${limit}&page=${page}`)
          dispatch({
               type: GET_ALL_ORDERS,
               payload: response,
          })
     } catch(e) {
          dispatch({
               type: GET_ALL_ORDERS,
               payload: e.response
          })
     }
}


//get one order 
export const getOneOrder = (id) => async(dispatch) => {
     try {
          const response = await useGetDataToken(`/api/v1/orders/${id}`)
          console.log(response)
          dispatch({
               type: GET_ONE_ORDER,
               payload: response,
          })
     } catch(e) {
          dispatch({
               type: GET_ONE_ORDER,
               payload: e.response
          })
     }
}


//change order pay status
export const changeOrderPay = (id) => async(dispatch) => {
     try {
          const response = await useUpdateData(`/api/v1/orders/${id}/pay`)
          console.log(response)
          dispatch({
               type: UPDATE_ORDER_PAY,
               payload: response,
          })
     } catch(e) {
          dispatch({
               type: UPDATE_ORDER_PAY,
               payload: e.response
          })
     }
}


//change order deliver status
export const changeOrderDeliver = (id) => async(dispatch) => {
     try {
          const response = await useUpdateData(`/api/v1/orders/${id}/deliver`)
          console.log(response)
          dispatch({
               type: UPDATE_ORDER_DELIVER,
               payload: response,
          })
     } catch(e) {
          dispatch({
               type: UPDATE_ORDER_DELIVER,
               payload: e.response
          })
     }
}