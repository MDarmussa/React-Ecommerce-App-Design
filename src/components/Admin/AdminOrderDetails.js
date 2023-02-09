import React from 'react'
import CartItem from '../Cart/CartItem'
import { Row,Col } from 'react-bootstrap'
import UserAllOrderItem from '../User/UserAllOrderItem'
import { useParams } from 'react-router-dom'
import GetOrderDetailsHook from '../../hook/admin/get-order-details-hook'
import ChangeOrdeStatus from '../../hook/admin/change-order-status-hook'
import { ToastContainer } from 'react-toastify'

//orderItem is going as a prop to UserAllOrderItem to get same card in here
function AdminOrderDetails() {
     const {id} = useParams()
     const [orderData, cartItems] = GetOrderDetailsHook(id)

     const [handleSubmitPayOrder, onChangePaid, handleSubmitDeliverOrder, onChangeDeliver] = ChangeOrdeStatus(id)
     
     
  return (
    <div>

          <UserAllOrderItem orderItem={orderData} />

          <Row className="justify-content-center mt-4 user-data">
               <Col xs="12" className=" d-flex">
               <div className="admin-content-text py-2">تفاصيل العميل</div>
               </Col>
               <Col xs="12" className="d-flex">
               <div
                    style={{
                         color: "#555550",
                         fontFamily: "Almarai",
                         fontSize: "16px",
                    }}>
                    الاسم:
               </div>

               <div
                    style={{
                         color: "#979797",
                         fontFamily: "Almarai",
                         fontSize: "16px",
                    }}
                    className="mx-2">
                    {orderData ? orderData.user ? orderData.user.name : '' : '' }
               </div>
               </Col>

               <Col xs="12" className="d-flex">
               <div
                    style={{
                         color: "#555550",
                         fontFamily: "Almarai",
                         fontSize: "16px",
                    }}>
                    رقم الهاتف:
               </div>

               <div
                    style={{
                         color: "#979797",
                         fontFamily: "Almarai",
                         fontSize: "16px",
                    }}
                    className="mx-2">
                    {orderData ? orderData.user ? orderData.user.phone : '' : '' }
               </div>
               </Col>
               <Col xs="12" className="d-flex">
               <div
                    style={{
                         color: "#555550",
                         fontFamily: "Almarai",
                         fontSize: "16px",
                    }}>
                    الايميل:
               </div>

               <div
                    style={{
                         color: "#979797",
                         fontFamily: "Almarai",
                         fontSize: "16px",
                    }}
                    className="mx-2">
                    {orderData ? orderData.user ? orderData.user.email : '' : '' }
               </div>
               </Col>
               
               <div className="d-flex mt-2 justify-content-center">
                    <div>
                         <select
                              onChange={onChangePaid}
                              name="pay"
                              id="paid"
                              className="select input-form-area mt-2  text-center px-2 w-50">
                              <option value="0">Payement</option>
                              <option value="true">Paid</option>
                              <option value="false">Not Paid</option>
                         </select>
                         <button onClick={handleSubmitPayOrder} className="btn-a px-3 d-inline mx-2" style={{height: '40px'}}>Save </button>
                    </div>
               
                    <div>
                         <div>
                              <select
                                   onChange={onChangeDeliver}
                                   name="deliver"
                                   id="deliver"
                                   className="select input-form-area mt-2  text-center px-2  w-50">
                                   <option value="0">Delivery</option>
                                   <option value="true">Delivered</option>
                                   <option value="false">Not Delivered</option>
                              </select>
                              <button onClick={handleSubmitDeliverOrder} className="btn-a px-3 d-inline mx-1" style={{height: '40px'}}>Save</button>
                         </div>
                    </div>
               </div>
          </Row>
          <ToastContainer />
    </div>
  )
}

export default AdminOrderDetails