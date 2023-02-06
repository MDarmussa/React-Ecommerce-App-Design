import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import UserAddressCard from './UserAddressCard'
import ViewAddressesHook from '../../hook/user/view-addresses-hook'

function UserAllAddresses() {
     const [res] = ViewAddressesHook()
     // if(res.data)
     //      console.log(res)

     //note: return <UserAddressCard key={index} item={item}/> item is a prop will be sent to the card to inject the elements with dynamic values

  return (
    <div>
          <div className='admin-content-text pb-4'>Addresses Book</div>
          {
               res.data ? (res.data.map((item, index) => {
                    return <UserAddressCard key={index} item={item}/>
               })) : <h6>No Addresses Found</h6>
          }
          
 
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