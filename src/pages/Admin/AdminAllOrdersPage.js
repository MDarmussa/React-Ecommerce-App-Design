import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminAllOrders from '../../components/Admin/AdminAllOrders'
import AdminAllProduct from '../../components/Admin/AdminAllProduct'
import AdminSideBar from '../../components/Admin/AdminSideBar'
import Pagination from '../../components/Utilities/Pagination'

function AdminAllOrdersPage() {
  return (
    <Container>
          <Row className='py-3'>
               <Col sm="3" xs="2" md="2">
                    <AdminSideBar />
               </Col>
               <Col sm="9" xs="10" md="10">
                    <AdminAllOrders />
               </Col>
          </Row>
    </Container>
  )
}

export default AdminAllOrdersPage