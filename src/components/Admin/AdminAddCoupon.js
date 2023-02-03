import React, { useRef } from 'react'
import { Row,Col, Spinner } from 'react-bootstrap'
import AddBrandHook from '../../hook/brand/add-brand-hook';
import { ToastContainer } from 'react-toastify';
import AddCouponHook from '../../hook/coupon/add-coupon.hook';
import AdminCouponCard from './AdminCouponCard';

function AdminAddCoupon() {
     const dateRef = useRef() //convert the date calender placeholder into text to make it easy for user to know what's the box for.
     //onFocus: conver the text into the original type (date format - calender) when clicking on the box.
     //onBlur; convert the box into text when leaving the box

     const [couponName, couponDate, couponValue, onChangeName, onChangeDate, onChangeValue, onSubmit, coupons] = AddCouponHook()

     return (
     <div>
          <Row className="justify-content-start ">
               <div className="admin-content-text pb-4">  Add New Coupon</div>
               <Col sm="8">
               <input
                    value={couponName}
                    onChange={onChangeName}
                    type="text"
                    className="input-form d-block mt-3 px-3"
                    placeholder="Coupon Name"
               />
               <input
                    ref={dateRef}
                    type="text"
                    className="input-form d-block mt-3 px-3"
                    placeholder="Expire Date"
                    value={couponDate}
                    onChange={onChangeDate}
                    onFocus={() => dateRef.current.type = "date"}
                    onBlur={() => dateRef.current.type = "text"}

               />
               <input
                    value={couponValue}
                    onChange={onChangeValue}
                    type="number"
                    className="input-form d-block mt-3 px-3"
                    placeholder="Percentage Discount"
               />
               </Col>
          </Row>
          <Row>
               <Col sm="8" className="d-flex justify-content-end ">
               <button onClick={onSubmit} className="btn-save d-inline mt-2 ">Add Coupon</button>
               </Col>
          </Row>

          <Row>
               <Col sm="8" className="">
                    {
                         coupons ?
                          (coupons.map((item, index) => {

                              return <AdminCouponCard key={index} coupons={item} />

                         })) : (<h6>No Coupons Available</h6>)
                    }
                    
               </Col>
          </Row>

          <ToastContainer />
     </div>
  )
}

export default AdminAddCoupon