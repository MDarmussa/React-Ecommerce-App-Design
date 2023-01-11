import React from 'react'
import UserSideBar from '../../components/User/UserSideBar'
import UserAddAddress from '../../components/User/UserAddAddress'
import { Container, Row, Col } from 'react-bootstrap'


function UserAddAddressPage() {
  return (
     <Container >
          <Row className='py-3'>
               <Col sm="3" xs="2" md="2">
                    <UserSideBar />
               </Col>

               <Col sm="9" xs="10" md="10">
                    <UserAddAddress />
               </Col>
          </Row>
     </Container>
  )
}

export default UserAddAddressPage