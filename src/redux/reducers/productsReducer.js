import {CREATE_PRODUCTS, DELETE_PRODUCT, GET_All_PRODUCTS, GET_ERROR, GET_PRODUCT_DETAILS, GET_PRODUCT_LIKE, UPDATE_PRODUCT} from "../type"

const initial = {
     products: [],
     allProducts:[],
     oneProduct:[],
     productLike: [],
     deleteProducts: [],
     updateProducts: [],
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
          case GET_PRODUCT_LIKE:
               return{
                    ...state,
                    productLike: action.payload, 
                    loading: false
               }
          case DELETE_PRODUCT:
               return{
                    ...state,
                    deleteProducts: action.payload, 
                    loading: false
               }
          case UPDATE_PRODUCT:
               return{
                    ...state,
                    updateProducts: action.payload, 
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