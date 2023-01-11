import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminAddProducts from '../../components/Admin/AdminAddProducts'
import AdminSideBar from '../../components/Admin/AdminSideBar'

function AdminAddProductPage() {
  return (
     <Container >
          <Row className='py-3'>
               <Col sm="3" xs="2" md="2">
                    <AdminSideBar />
               </Col>

               <Col sm="9" xs="10" md="10">
                    <AdminAddProducts />
               </Col>
          </Row>
     </Container>
  )
}

export default AdminAddProductPage