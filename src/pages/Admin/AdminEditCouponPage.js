import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AdminSideBar from '../../components/Admin/AdminSideBar'
import AdminEditCoupon from '../../components/Admin/AdminEditCoupon'

function AdminEditCouponPage() {
 
     return (
          <Container >
               <Row className='py-3'>
                   <Col sm="3" xs="2" md="2">
                         <AdminSideBar />
                   </Col>
     
                   <Col sm="3" xs="2" md="10">
                         <AdminEditCoupon />
                    </Col>
               </Row>
           </Container>
          )
}

export default AdminEditCouponPage