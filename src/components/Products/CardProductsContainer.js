import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import cardContainerHook from '../../hook/products/card-container-hook'
import { getProductToWishList } from '../../redux/actions/wishListAction'
import SubTitle from '../Utilities/SubTitle'
import ProductCard from './ProductCard'

function CardProductsContainer({ title, btnTitle, pathText, products}) {

     const [favProd] = cardContainerHook()
     
  return (
     <Container>
          {products ? (<SubTitle title={title} btntitle={btnTitle} pathText={pathText} />) : null}
          <Row className='my-2 d-flex justify-content-between'>
               {
                    products ? ( 
                         products.map((item, index) => <ProductCard favProd={favProd} key={index} item={item} />)
                    ) : null
               }
               
          </Row>
     </Container>
  )
}

export default CardProductsContainer