import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'
import DeleteCartHook from '../../hook/cart/delete-cart-hook'
import ApplayCouponHook from '../../hook/cart/apply-coupon-hook'
import notify from '../../hook/useNotifaction'

function CartCheckout({totalCartPrice, totalCartPriceAfterDiscount, couponNameRes, cartItems}) {
     const [handleDeleteCart] = DeleteCartHook()

     const [couponName, onChangeCoupon, handleSubmitCoupon, handleCheckout] = ApplayCouponHook(cartItems)

     useEffect(() => {
          if(couponNameRes) {
               onChangeCoupon(couponNameRes)
          }
     }, [couponNameRes])

     

  return (
     <Row className="my-1 d-flex justify-content-center cart-checkout pt-3">
          <Col xs="12" className="d-flex  flex-column  ">
               <div className="d-flex  ">
               <input
                    value={couponName}
                    onChange={(e) => onChangeCoupon(e.target.value)}
                    className="copon-input d-inline text-center "
                    placeholder="Promo Code"
               />
               <button onClick={handleSubmitCoupon} className="copon-btn d-inline ">Apply</button>
               </div>
               <div className="product-price d-inline w-100 my-3  border">
                    {
                         totalCartPriceAfterDiscount >= 1 ? 
                              `Total: $${totalCartPrice} - After Discount: $${totalCartPriceAfterDiscount}`:
                              `$${totalCartPrice} `
                    }
               </div>
                    <button onClick={handleDeleteCart} className="product-cart-add w-100 px-2 my-1"> Clear Basket</button>
                    <button onClick={handleCheckout} className="product-cart-add d-inline"> Submit Purchase</button>
          </Col>
          <ToastContainer />
     </Row>
  )
}

export default CartCheckout