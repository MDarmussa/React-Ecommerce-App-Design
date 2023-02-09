import React from 'react'
import { Row, Col } from 'react-bootstrap'
import UserAllOrderCard from './UserAllOrderCard'

function UserAllOrderItem({ orderItem }) {

     //UserAllOrderCard: the loop is to show how many items in the same order, return <UserAllOrderCard key={index} item={item} /> is to send props to UserAllOrderCard.
     // console.log('test for order item', orderItem)

     const formatDate = (dateString) => {
          const options = { year: "numeric", month: "numeric", day: "numeric" }
          return new Date(dateString).toLocaleDateString(undefined, options)
      }

  return (
     <div className="user-order mt-3">
          <Row>
               <div className="py-2 order-title">Order# {orderItem.id || 0} <span className='mx-4'> Order Date: {formatDate(orderItem.createdAt)}</span></div>
               <div></div>
          </Row>
          
          {
               orderItem.cartItems ? (orderItem.cartItems.map((item, index) => {
                    return <UserAllOrderCard key={index} item={item} />
               })) : null
          }
          
          <Row className="d-flex justify-content-between">
               <Col xs="6" className="">
                    <div>
                         <div className="d-inline">Delivery Status</div>
                         <div className="d-inline mx-2 stat">{orderItem.isDelivered === true ? 'Delivered' : 'Not Delivered'}</div>
                    </div>
                    <div>
                         <div className="d-inline">Payment Status</div>
                         <div className="d-inline mx-2 stat">{orderItem.isPaid === true ? 'Paid' : 'Not Paid'}</div>
                    </div>
                    <div>
                         <div className="d-inline">Payment Method</div>
                         <div className="d-inline mx-2 stat">{orderItem.paymentMethodType === 'cash' ? 'cash' : 'Card'}</div>
                    </div>
               </Col>
               <Col xs="6" className="d-flex justify-content-end">
               <div>
                    <div className="barnd-text">${orderItem.totalOrderPrice || 0}</div>
               </div>
               </Col>
          </Row>
     </div>
  )
}

export default UserAllOrderItem