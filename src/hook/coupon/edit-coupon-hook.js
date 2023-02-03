import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCoupon, editCoupon, getAllCoupons, getOneCoupon } from '../../redux/actions/couponAction'
import notify from '../../hook/useNotifaction'
import { useNavigate } from 'react-router-dom'


function EditCouponHook(id) { //3) id is coming from AdminEditCoupon
     const navigate = useNavigate()
  const dispatch = useDispatch()
  const [couponName, setCouponName] = useState('')
  const [couponDate, setCouponDate] = useState('')
  const [couponValue, setCouponValue] = useState('')
  const [loading, setLoading] = useState(true)
  const [loadingData, setLoadingData] = useState(true)

  const oneCoupon = useSelector(state => state.couponReducer.oneCoupon)

    //to get all coupons from the route
    useEffect(() => {
          const get = async () => {
               setLoadingData(true)
               await dispatch(getOneCoupon(id)) 
               setLoadingData(false)
          }
          get()
   }, [])

   //convert date from timestamp to custom format javascript //another way that the one in the couponCardHook
   const formatDate = (dateString) => {
          const options = { year: "numeric", month: "numeric", day: "numeric" }
          return new Date(dateString).toLocaleDateString(undefined, options)
     }


   useEffect(() => { //after click edit, it will render the coupon name in the new edit dialog
          if(loadingData === false) {
               if(oneCoupon.data){
                    setCouponName(oneCoupon.data.name)
                    setCouponDate(formatDate(oneCoupon.data.expire))
                    setCouponValue(oneCoupon.data.discount)
               }
          }
   }, [loadingData])


     // if(oneCoupon.data)
     //      setCouponDate(oneCoupon.data.expire)
     // if(oneCoupon.data)
     //      setCouponValue(oneCoupon.data.discount)


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
     await dispatch(editCoupon(id, {
          name: couponName,
          expire: couponDate,
          discount: couponValue
     }))
     setLoading(false)
  }

  const res = useSelector(state => state.couponReducer.editCoupon)
  
  useEffect(() => {
     if(loading === false) {
          if(res && res.status === 200){
               notify("Coupon Was Edited Successfully", "success")
               // window.location.reload(false) 
               setTimeout(() => {
                    navigate('/admin/addcoupon')
               }, 1000)    
          } else {
               notify("Edit Coupon Failed", "error")
          } 
     }
  }, [loading])


  return [couponName, couponDate, couponValue, onChangeName, onChangeDate, onChangeValue, onSubmit]

}

export default EditCouponHook