import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CategoryHeader from '../../components/Category/CategoryHeader'
import SearchCountResult from '../../components/Utilities/SearchCountResult'
import SideFilter from '../../components/Utilities/SideFilter'
import CardProductsContainer from '../../components/Products/CardProductsContainer'
import Pagination from '../../components/Utilities/Pagination'

function ShopProductsPage() {
  return (
    <div style={{minHeight: '670px'}}>
    
          <CategoryHeader />

          <Container>
               <SearchCountResult title='400 Search Result' />
               <Row className='d-flex flex-row'>
                  <Col sm='2' xs='2' md='1' className='d-flex'>
                    <SideFilter />
                  </Col>
                  <Col sm='10' xs='10' md='11'>
                    <CardProductsContainer title="" btnTitle="" />
                  </Col>
               </Row>
               <Pagination />
          </Container>

    </div>
  )
}

export default ShopProductsPage