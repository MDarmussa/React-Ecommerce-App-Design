import {ADD_COUPON, CREATE_CATEGORY, DELETE_COUPON, EDIT_COUPON, GET_ALL_CATEGORY, GET_All_COUPONS, GET_ERROR, GET_ONE_CATEGORY, GET_ONE_COUPON} from "../type"

const initial = {
     addCoupon: [],
     allCoupons: [],
     deleteCoupon: [],
     oneCoupon: [],
     editCoupon: [],
}

const couponReducer = (state = initial, action) => {

     switch(action.type)
     {
          case ADD_COUPON:
               return{
                    ...state, 
                    addCoupon: action.payload,
               }
          case GET_All_COUPONS:
               return{
                    ...state, 
                    allCoupons: action.payload,
               }
          case DELETE_COUPON:
               return{
                    ...state,
                    deleteCoupon: action.payload

               }
          case GET_ONE_COUPON:
               return{
                    ...state,
                    oneCoupon: action.payload
               }
          case EDIT_COUPON:
               return{
                    ...state,
                    editCoupon: action.payload
               }
          default:
               return state;
     }
}

export default couponReducer