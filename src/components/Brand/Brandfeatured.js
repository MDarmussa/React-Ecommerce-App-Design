import React from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'
import SubTitle from '../Utilities/SubTitle'
import BrandCard from './BrandCard'
import HomeBrandHook from '../../hook/brand/home-brand-hook'


//data in <BrandCard img={brand1} data={brand} /> is backend, see postman 

function BrandFeatured({ title, btnTitle }) {

     const [brand, loading] = HomeBrandHook();

  return (
     <Container>
          <SubTitle title={title} btntitle={btnTitle} pathText="/allbrand" />
          <Row className='my-1 d-flex justify-content-between'>
               {
                    loading === false ? (
                    brand.data ? (
                    brand.data.slice(0, 5).map((item, index) => {
                         return (<BrandCard key={index} img={item.image} />)
                    })
                    ) : <h4>No Brands Found</h4>
                    ) : <Spinner animation="border" variant="primary" />
               }
          </Row>
     </Container>
  )
}

export default BrandFeatured
