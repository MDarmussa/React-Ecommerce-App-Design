import React, { useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'
import GetAllUserCartHook from '../../hook/cart/get-all-user-cart-hook'
import OrderPayCardHook from '../../hook/checkout/order-pay-card-hook'
import OrderPayCashHook from '../../hook/checkout/order-pay-cash-hook'
import notify from '../../hook/useNotifaction'
import ViewAddressesHook from '../../hook/user/view-addresses-hook'


function ChoosePayMethod() {

     const [res] = ViewAddressesHook()
     // console.log(res.data)
     const [handleChooseAddress, addressDetails, HandlcreateOrderCash] = OrderPayCashHook()

     const [HandlcreateOrderCard] = OrderPayCardHook(addressDetails) //send it as param to OrderPayCardHook

     const [ , , totalCartPrice, , totalCartPriceAfterDiscount, ] = GetAllUserCartHook()

     const [type, setType] = useState('')

     const changePayMethod = (e) => {
          setType(e.target.value)
     }

     const handlePay = () => {
          if(type === 'CARD'){
               HandlcreateOrderCard();
          } else if (type === 'CASH') {
               HandlcreateOrderCash();
          } else {
               notify('Please choose payment method', 'warn')
          }
     }
   
  return (
     <div>
          <div className="admin-content-text pt-5">Choose Payment Method</div>
          <div className="user-address-card my-3 px-3">
               <Row className="d-flex justify-content-between ">
                    <Col xs="12" className="my-2">
                         <input
                         onChange={changePayMethod}
                              style={{cursor:"pointer"}}
                              name="group"
                              id="group1"
                              type="radio"
                              value="CARD"
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
                         onChange={changePayMethod}
                              style={{cursor:"pointer"}}
                              name="group"
                              id="group2"
                              type="radio"
                              value="CASH"
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
                    <div className="product-price d-inline   border">
                         {
                              totalCartPriceAfterDiscount >= 1 ? 
                                   `$${totalCartPrice} - After Discount: $${totalCartPriceAfterDiscount}`:
                                   `$${totalCartPrice} `
                         }
                    </div>
                    <div onClick={handlePay} className="product-cart-add px-3 pt-2 d-inline me-2"> Process Payment</div>
               </Col>
          </Row>
          <ToastContainer />
     </div>
  )
}

export default ChoosePayMethod