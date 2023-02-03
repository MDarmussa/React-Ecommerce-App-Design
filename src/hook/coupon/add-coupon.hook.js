import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCoupon, getAllCoupons } from '../../redux/actions/couponAction'
import notify from '../../hook/useNotifaction'


function AddCouponHook() {
   const dispatch = useDispatch()
  const [couponName, setCouponName] = useState('')
  const [couponDate, setCouponDate] = useState('')
  const [couponValue, setCouponValue] = useState('')
  const [loading, setLoading] = useState('')

  const onChangeName = (event) => {
     event.persist();
     setCouponName(event.target.value)
  }
  const onChangeDate = (event) => {
     event.persist();
     setCouponDate(event.target.value)
  }
  const onChangeValue= (event) => {
     event.persist();
     setCouponValue(event.target.value)
  }

  const onSubmit = async () => {
     if(couponName === "" || couponDate === "" || couponValue <= 0) {
          notify("Please fill all values", "warn")
          return
     }
     setLoading(true)
     await dispatch(addCoupon({
          name: couponName,
          expire: couponDate,
          discount: couponValue
     }))
     setLoading(false)
  }

  const res = useSelector(state => state.couponReducer.addCoupon) //couponReducer is state, coming from rootReducer. in small projects that has only one reducer, we need to add (state => state.addCoupon) only
//addCoupon is not same one in onSubmit. that one is coming from action file, but this one is the array in reducer file
  useEffect(() => {
     if(loading === false) {
          if(res && res.status === 201){
               notify("Coupon Added Successfully", "success")
               window.location.reload(false) //refresh the page after adding a coupon
          } else if (res && res.status === 400) {
               notify("Coupon Already Exist", "warn")
          } else if (res && res.status === 403) {
               notify("You Are Not Allowed to Add Coupon", "error")
          }
     }
  }, [loading])

  //to get all coupons from the route
  useEffect(() => {
    const get = async () => {
          await dispatch(getAllCoupons()) 
    }
    get()
  }, [])

  const allCoupon = useSelector(state => state.couponReducer.allCoupons)  //this fire the route and get the data
  
  let coupons = []
  try{
     if(allCoupon && allCoupon.data.length >= 1)
     coupons = allCoupon.data
  } catch(e) {}



  return [couponName, couponDate, couponValue, onChangeName, onChangeDate, onChangeValue, onSubmit, coupons]

}

export default AddCouponHook