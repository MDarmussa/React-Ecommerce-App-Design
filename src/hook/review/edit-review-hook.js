import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import notify from '../useNotifaction';
import { createReview, deleteReviewOnProduct, updateReviewOnProduct } from './../../redux/actions/reviewAction';


function EditRateHook(review) {

     const dispatch = useDispatch();

     const [loading, setLoading] = useState(true)
     const [newRateText, setNewRateText] = useState(review.review);
     const [newRateValue, setNewRateValue] = useState(review.rating);
     const [showEdit, setShowEdit] = useState(false)

     const handleCloseEdit = () => setShowEdit(false);
     const handleShowEdit = () => setShowEdit(true);

     const onChangeRateText = (e) => {
          setNewRateText(e.target.value)
     }
     const onChangeRateValue = (val) => {
          setNewRateValue(val)
     }

     const handleEdit = async () => {
          setLoading(true)
          await dispatch(updateReviewOnProduct(review._id, {
               review: newRateText,
               rating: newRateValue
          }))
          setLoading(false)
          handleCloseEdit();
     }

     const res = useSelector(state => state.reviewReducer.updateReview)


     useEffect(() => {
          if(loading === false)
               console.log(res)
               if(res.status && res.status === 200) {
                    notify("Review Edit Successfully Completed", "success")
                    setTimeout(() => {
                         window.location.reload(false)
                    }, 1000)
               } else 
                    notify("There is a problem editting reviews", "error")

     }, [loading])



     return [newRateText, newRateValue, showEdit, handleCloseEdit, handleShowEdit, onChangeRateText, onChangeRateValue, handleEdit]


     
}

export default EditRateHook