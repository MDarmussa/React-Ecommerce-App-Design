import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { applyCoupon } from '../../redux/actions/cartAction'
import notify from '../useNotifaction'


function ApplyCouponHook() {

     const dispatch = useDispatch()

     const [couponName, setCouponName] = useState('')
     const [loading, setLoading] = useState(true)

     const onChangeCoupon = (e) => {
          setCouponName(e)
     }

     const handleSubmitCoupon = async () => {
          if(couponName === "") {
               notify("Please Add Coupon", "warn")
               return
          }
          setLoading(true)
          await dispatch(applyCoupon({
               couponName: couponName
          }))
          setLoading(false)   
     }

     const res= useSelector(state => state.cartReducer.applyCoupon)

     useEffect(() => {
          if(loading === false) {
               console.log(res)
               if(res && res.status === 200) {
                    notify('Coupon Applied successfuly', 'success')
                    setTimeout(() => {
                         window.location.reload(false)
                    }, 1000)
               } else{
                    notify('Wrong or expired Coupon', 'warn')
                    setTimeout(() => {
                         window.location.reload(false)
                    }, 1000)
               }
          }
     }, [loading])



     return [couponName, onChangeCoupon, handleSubmitCoupon]
  
}

export default ApplyCouponHook