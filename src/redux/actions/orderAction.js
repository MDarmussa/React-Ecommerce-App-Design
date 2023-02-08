import { useGetDataToken } from "../../hooks/useGetData"
import { GET_ALL_ORDERS } from "../type"


//get all orders
export const getAllOrders = (page, limit) => async(dispatch) => {
     try {
          const response = await useGetDataToken(`/api/v1/orders?limit=${limit}&page=${page}`)
          console.log(response)
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