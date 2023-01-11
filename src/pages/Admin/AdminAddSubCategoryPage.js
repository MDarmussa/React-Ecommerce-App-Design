import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminAddSubCategory from '../../components/Admin/AdminAddSubCategory'
import AdminSideBar from '../../components/Admin/AdminSideBar'

function AdminAddSubCategoryPage() {
  return (
     <Container >
          <Row className='py-3'>
               <Col sm="3" xs="2" md="2">
               <AdminSideBar />
               </Col>

               <Col sm="9" xs="10" md="10">
                    <AdminAddSubCategory />
               </Col>
          </Row>
     </Container>
  )
}

export default AdminAddSubCategoryPage