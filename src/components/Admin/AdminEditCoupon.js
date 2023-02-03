import React, { useRef } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import EditCouponHook from '../../hook/coupon/edit-coupon-hook'

function AdminEditCoupon() {
     const { id } = useParams() //1) id is coming from the variable id in app.js from edit coupon route (which is going to be sent to coupon action - see getOneCoupon in couponAction.js), and send it as a parameter to EditCouponHook(id) and receive it in the hook EditCouponHook
     const [couponName, couponDate, couponValue, onChangeName, onChangeDate, onChangeValue, onSubmit] = EditCouponHook(id) //2)id received from useParams as a param and it will be sent to EditCouponHook -- 3) see EditCouponHook

  return (
     <div>
          <Row className="justify-content-start ">
               <div className="admin-content-text pb-4"> Edit Coupon</div>
               <Col sm="8">
               <input
                    value={couponName}
                    onChange={onChangeName}
                    type="text"
                    className="input-form d-block mt-3 px-3"
                    placeholder="Coupon Name"
               />
               <input
                    type="text"
                    className="input-form d-block mt-3 px-3"
                    placeholder="Expire Date"
                    value={couponDate}
                    onChange={onChangeDate}
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
               <button onClick={onSubmit} className="btn-save d-inline mt-2 ">Save</button>
               </Col>
          </Row>

          <ToastContainer />
     </div>
  )
}

export default AdminEditCoupon