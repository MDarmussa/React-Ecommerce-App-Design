import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import notify from '../useNotifaction';
import { createReview, deleteReviewOnProduct, updateReviewOnProduct } from './../../redux/actions/reviewAction';


function EditRateHook(review) {

     const dispatch = useDispatch();

     const [loading, setLoading] = useState(true)
     const [newRateText, setNewRateText] = useState(review.review); //new text that you need to add on the update review (dialog windows)
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

     const handleEdit = async () => { //how it works: load data when requesting by the user > wait the data to be ready from dispatch, updateReviewOnProduct has two thinds, id and body. id is review._id and body is {review, rating}
          setLoading(true)
          await dispatch(updateReviewOnProduct(review._id, { //
               review: newRateText, //newRateText is the value from user
               rating: newRateValue //rating: the value is entered from user
          }))
          setLoading(false)
          handleCloseEdit();
     }

     const res = useSelector(state => state.reviewReducer.updateReview) //updateReview is in the reducer file

     useEffect(() => {
          if (loading === false) {
              console.log(res)
              if(res.status && res.status === 200) {
                    notify("Review Edit Successfully Completed", "success")
                  setTimeout(() => {
                    window.location.reload(false)
                  }, 1000);
              }
              else
                  notify("There is a problem editting reviews", "error")
          }
      }, [loading])



     return [newRateText, newRateValue, showEdit, handleCloseEdit, handleShowEdit, onChangeRateText, onChangeRateValue, handleEdit]


     
}

export default EditRateHook