

import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import CardProductsContainer from '../../components/Products/CardProductsContainer';
import Pagination from '../../components/Utilities/Pagination';
import ViewAllProductsCategoryHook from '../../hook/products/view-all-products-category-hook';

function ProductsByCategory() {

     const {id} = useParams()

     const [items, pagination, onPress] = ViewAllProductsCategoryHook(id)

     if(pagination)
          var pageCount = pagination
     else 
          pageCount = 0

  return (
     <div style={{minHeight: '670px'}}>

          <Container>
               <Row className='d-flex flex-row'>
                    <Col sm='12'>
                         <CardProductsContainer products={items} title="" btnTitle="" />
                    </Col>
               </Row>
               <Pagination pageCount={pageCount} onPress={onPress} />
          </Container>

     </div>  )
}

export default ProductsByCategory