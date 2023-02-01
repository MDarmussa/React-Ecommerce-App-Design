import React from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import CategoryHeader from '../../components/Category/CategoryHeader'
import CardProductsContainer from '../../components/Products/CardProductsContainer'
import ProductDetails from '../../components/Products/ProductDetails'
import RateContainer from '../../components/Rate/RateContainer'
import viewProductsDetailsHook from '../../hook/products/view-products_details-hook'


function ProductDetailsPage() {

  const { id } = useParams();
  const [item, images, cat, brand, prod] = viewProductsDetailsHook(id)
  console.log(item)

  if(prod)
    var items = prod.slice(0, 4)

  if(item){
    var rateAvg = item.ratingsAverage
    var rateQty = item.ratingsQuantity
  }


  return (
    <div style={{minHeight: '670px'}}>
          <CategoryHeader />
          <Container>
               <ProductDetails />
               <RateContainer rateAvg={rateAvg} rateQty={rateQty} />
               <CardProductsContainer products={items} title='Products You Might Like' />
          </Container>
    </div>
  )
}

export default ProductDetailsPage