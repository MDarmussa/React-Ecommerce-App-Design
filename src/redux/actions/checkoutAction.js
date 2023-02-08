import { useInsertData } from "../../hooks/useInsertData";
import { CREATE_ORDER_CASH } from "../type";



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