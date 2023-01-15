import React from 'react'
import { Container, Row } from 'react-bootstrap'
import SubTitle from '../Utilities/SubTitle'
import ProductCard from './ProductCard'

function CardProductsContainer({ title, btnTitle, pathText, products}) {
  return (
     <Container>
          {products ? (<SubTitle title={title} btntitle={btnTitle} pathText={pathText} />) : null}
          <Row className='my-2 d-flex justify-content-between'>
               {
                    products ? ( 
                         products.map((item, index) => <ProductCard key={index} item={item} />)
                    ) : null
               }
               
          </Row>
     </Container>
  )
}

export default CardProductsContainer