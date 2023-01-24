import React from 'react'
import { Container } from 'react-bootstrap'
import CategoryHeader from '../../components/Category/CategoryHeader'
import CardProductsContainer from '../../components/Products/CardProductsContainer'
import ProductDetails from '../../components/Products/ProductDetails'
import RateContainer from '../../components/Rate/RateContainer'


function ProductDetailsPage() {


  return (
    <div style={{minHeight: '670px'}}>
          <CategoryHeader />
          <Container>
               <ProductDetails />
               <RateContainer />
               <CardProductsContainer title='Products You Might Like' />
          </Container>
    </div>
  )
}

export default ProductDetailsPage