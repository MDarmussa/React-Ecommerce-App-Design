import React from 'react'
import { Container,Row ,Col} from 'react-bootstrap'


function CategoryHeader() {
  return (
     <div className="cat-header">
          <Container>
          <Row>
               <Col className="d-flex justify-content-start py-2 flex-wrap">
                    <div className="cat-text-header ">All</div>
                    <div className="cat-text-header">Electronics</div>
                    <div className="cat-text-header">Clother</div>
                    <div className="cat-text-header"> Electronics</div>
                    <div className="cat-text-header">Sales</div>
                    <div className="cat-text-header">Discount</div>
                    <div className="cat-text-header">Promotions</div>
                    <div className="cat-text-header">Discount</div>
                    <div className="cat-text-header">Discount</div>
                    <div className="cat-text-header">More</div>
               </Col>
          </Row>
          </Container>
     </div>
  )
}

export default CategoryHeader