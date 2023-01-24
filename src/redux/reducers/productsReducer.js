import {CREATE_PRODUCTS, GET_All_PRODUCTS, GET_ERROR, GET_PRODUCT_DETAILS} from "../type"

const initial = {
     products: [],
     allProducts:[],
     oneProduct:[],
     loading: true,
}

const productsReducer = (state = initial, action) => {

     switch(action.type)
     {
          case CREATE_PRODUCTS:
               return{
                    ...state, 
                    products: action.payload, 
                    loading: false
               }
          case GET_All_PRODUCTS:
               return{
                    ...state, 
                    allProducts: action.payload, 
                    loading: false
               }
          case GET_PRODUCT_DETAILS:
               return{
                    oneProduct: action.payload, 
                    loading: false
               }
          case GET_ERROR:
               return{
                    loading: true,
                    products: action.payload,
               }
          default:
               return state;
     }
}

export default productsReducer