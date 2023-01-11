import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import rate from '../../images/rate.png'
import Pagination from '../Utilities/Pagination'
import RateItem from './RateItem'
import RatePost from './RatePost'

function RateContainer() {
  return (
     <Container className='rate-container'>
          <Row>
               <Col className="d-flex">
                    <div className="sub-tile d-inline p-1 ">Reviews</div>
                    <img className="mt-2" src={rate} alt="" height="16px" width="16px" />
                    <div className="cat-rate  d-inline  p-1 pt-2">4.3</div>
                    <div className="rate-count d-inline p-1 pt-2">(Review # 160)</div>
               </Col>
          </Row>
          <RatePost />
          <RateItem />
          <RateItem />
          <RateItem />
          <RateItem />

          <Pagination />
     </Container>
  )
}

export default RateContainer
