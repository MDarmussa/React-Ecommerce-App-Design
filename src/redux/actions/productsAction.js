import { CREATE_PRODUCTS, GET_All_PRODUCTS, GET_ERROR } from "../type";
import { useInsertDataWithImage } from "../../hooks/useInsertData";
import useGetData from "../../hooks/useGetData";



//create products
export const createProduct = () => async(dispatch) => {
     try {
          const response = await useInsertDataWithImage("/api/v1/products")
          dispatch({
               type: CREATE_PRODUCTS,
               payload: response,
               loading: true
          })
     } catch(e) {
          dispatch({
               type: GET_ERROR,
               payload: "Error" + e,
          })
     }
}


//gat All products
export const getAllProducts = () => async (dispatch) => {
     try {
          const response = await useGetData(`/api/v1/products/?sort=sold`) //useGetData from hooks, it use to retrieve data from our database
          dispatch({
               type: GET_All_PRODUCTS,
               payload: response,
               loading: true
          })
     } catch(e) {
          dispatch({
               type: GET_ERROR,
               payload: "Error" + e,
          })
     }
}