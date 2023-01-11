import React from 'react'
import { Row,Col } from 'react-bootstrap'


function ChoosePayMethod() {
  return (
     <div>
          <div className="admin-content-text pt-5">Choose Payment Method</div>
          <div className="user-address-card my-3 px-3">
               <Row className="d-flex justify-content-between ">
               <Col xs="12" className="my-4">
                    <input
                         name="group"
                         id="group1"
                         type="radio"
                         value="Visa"
                         className="mt-2"
                    />
                    <label className="mx-2" for="group1">
                         Pay by Visa Card
                    </label>
               </Col>
               </Row>

               <Row className="mt-3">
               <Col xs="12" className="d-flex">
                    <input
                         name="group"
                         id="group1"
                         type="radio"
                         value="الدفع عند الاستلام"
                         className="mt-2"
                    />
                    <label className="mx-2" for="group1">
                         Pay Uppon Delivery
                    </label>
               </Col>
               </Row>
          </div>

          <Row>
               <Col xs="12" className="d-flex justify-content-end">
               <div className="product-price d-inline   border">$34000</div>
               <div className="product-cart-add px-3 pt-2 d-inline me-2"> Complete Purchase</div>
               </Col>
          </Row>
     </div>
  )
}

export default ChoosePayMethod