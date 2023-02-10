import { addConsoleHandler } from "selenium-webdriver/lib/logging";
import { useGetDataToken } from "../../hooks/useGetData";
import { useInsertData } from "../../hooks/useInsertData";
import { CREATE_ORDER_CARD, CREATE_ORDER_CASH } from "../type";



//create order cash for user
export const createOrderCash = (id, body) => async(dispatch) => {
     try {
          const response = await useInsertData(`/api/v1/orders/${id}`, body); 
          dispatch({
               type: CREATE_ORDER_CASH,
               payload: response 
          })
     } catch(e) {
          dispatch({
               type: CREATE_ORDER_CASH,
               payload: e.response,
          })
     }
}

//create order card for user //see postman for the url and method (it needs get not post because it geals with third party - stipe)
export const createOrderCard = (id, body) => async(dispatch) => {
     try {
          const response = await useGetDataToken(`/api/v1/orders/checkout-session/${id}`, body)
          console.log(response)
          dispatch({
               type: CREATE_ORDER_CARD,
               payload: response 
          })
     } catch(e) {
          dispatch({
               type: CREATE_ORDER_CARD,
               payload: e.response,
          })
     }
}