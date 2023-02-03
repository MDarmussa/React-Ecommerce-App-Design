import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteCoupon } from '../../redux/actions/couponAction';

function CouponCardHook(coupons) { //coupons is coming from AdminAddCoupon, and will be sent to AdminCouponCard // (AdminAddCoupon -> CouponCardHook -> AdminCouponCard)
  
     //convert date from timestamp to custom format javascript
     var timestamp = coupons.expire;
     var date = new Date(timestamp);
     var options = { year: 'numeric', month: 'numeric', day: 'numeric'}; //month: 'short' ---> will give you jan, feb, march, ...etc
     var dateString = date.toLocaleDateString('en-US', options);


     const dispatch = useDispatch()
     const [show, setShow] = useState(false);

     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);

     const handleDelete = async () => {
          await dispatch(deleteCoupon(coupons._id))
          setShow(false);
          window.location.reload();
     }

     return [timestamp, dateString, show, handleClose, handleShow, handleDelete]
}

export default CouponCardHook