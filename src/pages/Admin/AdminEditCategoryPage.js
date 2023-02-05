import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AdminSideBar from '../../components/Admin/AdminSideBar'
import AdminEditCoupon from '../../components/Admin/AdminEditCoupon'
import AdminEditCategory from '../../components/Admin/AdminEditCategory'

function AdminEditCategoryPage() {
 
     return (
          <Container >
               <Row className='py-3'>
                   <Col sm="3" xs="2" md="2">
                         <AdminSideBar />
                   </Col>
     
                   <Col sm="3" xs="2" md="10">
                         <AdminEditCategory />
                    </Col>
               </Row>
           </Container>
          )
}

export default AdminEditCategoryPage