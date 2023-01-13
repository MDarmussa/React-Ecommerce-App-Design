import React from 'react'

import { Container, Row, Spinner } from 'react-bootstrap'
import BrandCard from './BrandCard'


function BrandContainer({data, loading}) {

     
  return (
     <Container>
          <div className='admin-content-text'>All Brands</div>
          <Row className='my-1 d-flex justify-content-between'>
               {
                    loading === false ? (
                         data ? (
                              data.slice(0, 5).map((item, index) => {
                              return (<BrandCard key={index} img={item.image} />)
                              })
                              ) : <h4>No Brands Found</h4>
                              ) : <Spinner animation="border" variant="primary" />
               }
          </Row>
     </Container>
  )
}

export default BrandContainer