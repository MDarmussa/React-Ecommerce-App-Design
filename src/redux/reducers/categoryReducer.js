import {GET_ALL_CATEGORY, GET_ERROR} from "../type"

const initial = {
     category: [],
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