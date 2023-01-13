import {CREATE_SUB_CATEGORY, GET_ERROR} from "../type"

const initial = {
     subcategory: [],
     loading: true,
}

const subCategoryReducer = (state = initial, action) => {

     switch(action.type)
     {
          case CREATE_SUB_CATEGORY:
               return{
                    ...state, //original data
                    subcategory: action.payload, // payload can be any
                    loading: false
               }
          case GET_ERROR:
               return{
                    loading: true,
                    subcategory: action.payload,
               }
          default:
               return state;
     }
}

export default subCategoryReducer