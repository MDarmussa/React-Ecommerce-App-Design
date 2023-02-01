import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import notify from '../useNotifaction';
import { allReviewsProduct, createReview } from './../../redux/actions/reviewAction';

function ViewAllReviewsHook(id) {

     const dispatch = useDispatch();

     const [loading, setLoading] = useState(true)

     const allReviews = useSelector((state) => state.reviewReducer.allReviewsProduct)

     useEffect(() => {
          setLoading(true)
          dispatch(allReviewsProduct(id, 1, 2)) // in one page, show only 10 reviews
          setLoading(false)
     }, [])

     const onPress = async (page) => {
          await dispatch(allReviewsProduct(id, page, 2))
     }

     return [allReviews, onPress]
   
     
  
}

export default ViewAllReviewsHook