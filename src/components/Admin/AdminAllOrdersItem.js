import React from 'react'
import { Col,Row } from 'react-bootstrap'
import mobile from '../../images/mobile.png'
import deleteicon from '../../images/delete.png'
import { Link } from 'react-router-dom'

function AdminAllOrdersItem({ orderItem }) {

  console.log(orderItem)


  const formatDate = (dateString) => {
       const options = { year: "numeric", month: "numeric", day: "numeric" }
       return new Date(dateString).toLocaleDateString(undefined, options)
   }

  return (
     <Col xs="12">
      <Link to={`/admin/orders/${orderItem._id}`} style={{textDecoration: 'none'}} className="cart-item-body-admin my-2 px-1 d-flex px-2" >
          <div className="w-100">

            <Row className="justify-content-between" style={{ cursor: "pointer" }}>
              <Col sm="12" className=" d-flex flex-row justify-content-between">
                <div sm="12" className="py-2 order-title">Order# {orderItem.id || 0} <span className='mx-4'> Order Date: {formatDate(orderItem.createdAt)}</span></div>
              </Col>
            </Row>

            <Row className="justify-content-center mt-2">
              <Col sm="12" className=" d-flex flex-row justify-content-start">
                <div className="d-inline pt-2 cat-title">
                  Order By: {orderItem.user.name || ''}                 
                </div>
                <div style={{ color: 'black' }}  className="d-inline pt-2 cat-rate me-2 p-1"> {orderItem.user.email || ''}</div>
              </Col>
            </Row>

            <Row className="d-flex justify-content-between">
              <Col xs="6" className="d-flex">
                  <div>
                        <div style={{ color: 'black' }}  className="d-inline">Delivery Status: </div>
                        <div className="d-inline mx-2 stat">{orderItem.isDelivered === true ? 'YES' : 'NO'}</div>
                  </div>
                  <div>
                        <div style={{ color: 'black' }}  className="d-inline"> Is Paid: </div>
                        <div className="d-inline mx-2 stat">{orderItem.isPaid === true ? 'YES' : 'NO'}</div>
                  </div>
                  <div>
                        <div style={{ color: 'black' }} className="d-inline"> Payment Method: </div>
                        <div className="d-inline mx-2 stat">{orderItem.paymentMethodType === 'cash' ? 'Cash' : 'Card'}</div>
                  </div>
              </Col>

              <Col xs="6" className="d-flex justify-content-end">
                <div>
                    <div className="barnd-text">${orderItem.totalOrderPrice || 0}</div>
                </div>
              </Col>
            </Row>

          </div>
        </Link>
     </Col>
  )
}

export default AdminAllOrdersItem