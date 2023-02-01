import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import notify from '../useNotifaction';
import { createReview } from './../../redux/actions/reviewAction';


function AddRateHhook(id) {

     const dispatch = useDispatch();
     const navigate = useNavigate()
     const [rateText, setRateText] = useState('')
     const [rateValue, setRateValue] = useState(0)
     
     const [loading, setLoading] = useState(true)
   
   
     const onChangeRateText = (e) => {
          setRateText(e.target.value)
     }
     const onChangeRateValue = (val) => {
          setRateValue(val)
     }

     var user = "" //this to identify the user from our local storage so he can add reviews under his name
     if(localStorage.getItem("user") != null)
          user = JSON.parse(localStorage.getItem("user"))

     //when save rate
     const onSubmit = async () => {
          if(rateText === ""){
               notify("Please Add Review", "error")
               return
          }
          setLoading(true)
          await dispatch(createReview(id, {
               review: rateText,
               rating: rateValue
          }))
          setLoading(false)
     }

     const res = useSelector(state => state.reviewReducer.createReview)

     useEffect(() => {
          if(loading === false) {
               if(res) {
                    console.log(res)
                    if(res.status && res.status === 403){
                         notify("Admin is not allowed to add reviews", "error")
                    }else if(res.data.errors && res.data.errors[0].msg === "You already added review on this product"){
                         notify("You Already Added Review on this item", "error")
                    }else if(res.status && res.status === 201){
                         notify("You Added review successfully", "success")
                         setTimeout(() => {
                              window.location.reload(false) //refresh the page after deleting the review
                         }, 1000);
                    }
               }
          }
     }, [loading])


     return [onChangeRateText, onChangeRateValue, rateText, rateValue, user, onSubmit]
 
}

export default AddRateHhook