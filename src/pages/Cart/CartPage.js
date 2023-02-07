import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CartCheckout from '../../components/Cart/CartCheckout'
import CartItem from '../../components/Cart/CartItem'
import GetAllUserCartHook from '../../hook/cart/get-all-user-cart-hook'

function CartPage() {
     const [itemsNum, cardItems, totalCartPrice, couponNameRes, totalCartPriceAfterDiscount] = GetAllUserCartHook()

  return (
    <Container style={{minHeight: '670px'}}>
          <Row>
               <div className='cart-title mt-4'>Basket</div>
          </Row>
          <Row className='d-flex justify-content-center'>
               <Col xs="12" md="9">
                    {
                         CartItem ? (cardItems.map((item, index) => {
                         return <CartItem item={item} key={index} />
                         })) : <h6>No items in your basket</h6>
                    }
               </Col>

               <Col xs="6" md="3">
                    <CartCheckout couponNameRes={couponNameRes} totalCartPriceAfterDiscount={totalCartPriceAfterDiscount} totalCartPrice={totalCartPrice} />
               </Col>

          </Row>
    </Container>
  )
}

export default CartPage