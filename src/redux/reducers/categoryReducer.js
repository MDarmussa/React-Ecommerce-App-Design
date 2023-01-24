import {CREATE_CATEGORY, GET_ALL_CATEGORY, GET_ERROR, GET_ONE_CATEGORY} from "../type"

const initial = {
     category: [],
     oneCategory: [],
     loading: true,
}

const categoryReducer = (state = initial, action) => {

     switch(action.type)
     {
          case GET_ALL_CATEGORY:
               return{
                    ...state, //original data
                    category: action.payload, // payload can be any
                    loading: false
               }
          case CREATE_CATEGORY:
               return{
                    category: action.payload,
                    loading: false,
               }
          case GET_ONE_CATEGORY:
               return{
                    oneCategory: action.payload, 
                    loading: false
               }
          case GET_ERROR:
               return{
                    loading: true,
                    category: action.payload,
               }
          default:
               return state;
     }
}

export default categoryReducer