import { ADD_TO_CART, APPLY_COUPON, DELETE_ONE_ITRM_FROM_CART, GET_ALL_USER_CART, GLEAR_ALL_USER_CART, UPDATE_ITRM_FROM_CART } from "../type";

const initial = {
     addToCart: [],
     getAllUserCart: [],
     clearCart: [],
     deleteOneItem: [],
     updateItem: [],
     applyCoupon: [],
     loading: true,
}

const cartReducer = (state = initial, action) => {

     switch(action.type)
     {
          case ADD_TO_CART:
               return{
                    ...state,
                    addToCart: action.payload, 
               }
          case GET_ALL_USER_CART:
               return{
                    ...state,
                    getAllUserCart: action.payload, 
               }
          case GLEAR_ALL_USER_CART:
               return{
                    ...state,
                    clearCart: action.payload, 
               }
          case DELETE_ONE_ITRM_FROM_CART:
               return{
                    ...state,
                    deleteOneItem: action.payload, 
               }
          case UPDATE_ITRM_FROM_CART:
               return{
                    ...state,
                    updateItem: action.payload, 
               }
          case APPLY_COUPON:
               return{
                    ...state,
                    applyCoupon: action.payload, 
               }
          default:
               return state;
     }
}

export default cartReducer

