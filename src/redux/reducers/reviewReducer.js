import { ALL_REVIEWS_PRODUCT, ALL_REVIEWs_PRODUCT, CREATE_REVIEW, DELETE_REVIEW, UPDATE_REVIEW } from "../type";

const initial = {
     createReview: [],
     allReviewsProduct: [],
     deleteReview: [],
     updateReview: [],
     loading: true,
}

const reviewReducer = (state = initial, action) => {

     switch(action.type)
     {
          case CREATE_REVIEW:
               return{
                    ...state,
                    createReview: action.payload,
                    loading: false,
               }
          case ALL_REVIEWS_PRODUCT:
               return{
                    ...state,
                    allReviewsProduct: action.payload,
                    loading: false,
               }
          case DELETE_REVIEW:
               return{
                    ...state,
                    deleteReview: action.payload,
               }
          case UPDATE_REVIEW:
               return{
                    ...state,
                    updateReview: action.payload, //means we store the response that we receive then store it in the array updateReview: []
               }
          default:
               return state;
     }
}

export default reviewReducer