import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'
import OrderPayCashHook from '../../hook/checkout/order-pay-cash-hook'
import ViewAddressesHook from '../../hook/user/view-addresses-hook'


function ChoosePayMethod() {

     const [res] = ViewAddressesHook()
     // console.log(res.data)
     const [handleChooseAddress, addressDetails, HandlcreateOrderCash] = OrderPayCashHook()
     console.log(addressDetails)
   
  return (
     <div>
          <div className="admin-content-text pt-5">Choose Payment Method</div>
          <div className="user-address-card my-3 px-3">
               <Row className="d-flex justify-content-between ">
                    <Col xs="12" className="my-2">
                         <input
                              style={{cursor:"pointer"}}
                              name="group"
                              id="group1"
                              type="radio"
                              value="Visa"
                              className="mt-2"
                         />
                         <label style={{cursor:"pointer"}} className="mx-2" for="group1">
                              Pay by Visa Card
                         </label>
                    </Col>
               </Row>

               <Row className="mt-2">
                    <Col xs="12" className="d-flex">
                         <input
                              style={{cursor:"pointer"}}
                              name="group"
                              id="group2"
                              type="radio"
                              value="الدفع عند الاستلام"
                              className="mt-2"
                         />
                         <label style={{cursor:"pointer"}} className="mx-2" for="group1">
                              Pay Uppon Delivery
                         </label>
                    </Col>
               </Row>

               <Row className="mt-2">
                    <Col xs="6" className="d-flex">
                         <select name="Addresses" id="address" className="select mt-3 px-2" onChange={handleChooseAddress} >
                              <option value="0">Choose Address</option>
                              {
                                   res.data ? (res.data.map((item, index) => {
                                        return <option key={item._id} value={item._id}>{item.alias}</option>
                                   })) : <option key={0} value={0}>No Addresses In Your Cart</option>
                              }
                              
                         </select>
                    </Col>
               </Row>

          </div>

          <Row>
               <Col xs="12" className="d-flex mx-2 btn-space justify-content-end">
                    <div className="product-price d-inline   border">$34000</div>
                    <div onClick={HandlcreateOrderCash} className="product-cart-add px-3 pt-2 d-inline me-2"> Complete Purchase</div>
               </Col>
          </Row>
          <ToastContainer />
     </div>
  )
}

export default ChoosePayMethod