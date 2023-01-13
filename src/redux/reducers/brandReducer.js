import { GET_ALL_BRAND, CREATE_BRAND, GET_ERROR } from "../type"

const initial = {
     brand: [],
     loading: true,
}

const brandReducer = (state = initial, action) => {

     switch(action.type)
     {
          case GET_ALL_BRAND:
               return{
                    ...state, //original data
                    brand: action.payload, // payload can be any
                    loading: false
               }
          case CREATE_BRAND:
               return{
                    brand: action.payload,
                    loading: false,
               }
          case GET_ERROR:
               return{
                    loading: true,
                    brand: action.payload,
               }
          default:
               return state;
     }
}

export default brandReducer