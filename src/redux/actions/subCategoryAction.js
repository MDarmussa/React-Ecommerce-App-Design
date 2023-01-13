import {CREATE_SUB_CATEGORY, GET_ERROR} from "../type";
import useGetData from "../../hooks/useGetData";
import { useInsertData, useInsertDataWithImage } from "../../hooks/useInsertData";


//create sub category
export const createSubCategory = (data) => async(dispatch) => {
     try {
          const response = await useInsertData("/api/v1/subcategories", data) //useInsertData: inserting only data without image. see hooks
          dispatch({
               type: CREATE_SUB_CATEGORY,
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