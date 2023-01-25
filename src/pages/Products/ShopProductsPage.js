import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CategoryHeader from '../../components/Category/CategoryHeader'
import SearchCountResult from '../../components/Utilities/SearchCountResult'
import SideFilter from '../../components/Utilities/SideFilter'
import CardProductsContainer from '../../components/Products/CardProductsContainer'
import Pagination from '../../components/Utilities/Pagination'
import ViewSearchProductHook from '../../hook/products/view-search-products-hook'

function ShopProductsPage() {

  const [items, pagination, onPress] = ViewSearchProductHook();
  if(pagination)
    var pageCount = pagination;
  else
    pagination = 0

  return (
    <div style={{minHeight: '670px'}}>
    
          <CategoryHeader />

          <Container>
               <SearchCountResult title={`There is ${items.length} Search Products`} />
               <Row className='d-flex flex-row'>
                  <Col sm='2' xs='2' md='1' className='d-flex'>
                    <SideFilter />
                  </Col>
                  <Col sm='10' xs='10' md='11'>
                    <CardProductsContainer products={items} title="" btnTitle="" />
                  </Col>
               </Row>
               <Pagination />
          </Container>

    </div>
  )
}

export default ShopProductsPage