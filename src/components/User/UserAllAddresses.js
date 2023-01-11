import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import UserAddressCard from './UserAddressCard'

function UserAllAddresses() {
  return (
    <div>
          <div className='admin-content-text pb-4'>Addresses Book</div>
          <UserAddressCard />
          <UserAddressCard />
          <UserAddressCard />

          <Row className='justify-content-center'>
               <Col sm='5' className='d-flex justify-content-center'>
                    <Link to="/user/add-address" style={{ textDecoration: "none"}}>
                         <button className='btn-add-address'>Add New Address</button>
                    </Link>
               </Col>
          </Row>
    </div>
  )
}

export default UserAllAddresses