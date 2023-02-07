import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import viewProductsDetailsHook from '../../hook/products/view-products_details-hook';
import AddToCartHook from './../../hook/cart/add-to-cart-hook';


function ProductText() {


  const {id} = useParams();
  const [item, images, cat, brand] = viewProductsDetailsHook(id);

  const [colorClick, indexColor, addToCartHandle] = AddToCartHook(id, item) //item will be sent as an object to add-to-cart-hook




  return (
     <div>
     <Row className="mt-4">
       <div className="cat-text">{cat.name}: </div>
     </Row>
     <Row className="mt-4">
       <Col md="8">
         <div className="cat-title d-inline">
         {item.title} 
         <div className="cat-rate d-inline mx-3">{item.ratingsAverage}</div>
         </div>
       </Col>
     </Row>
     <Row>
       <Col md="8" className="mt-4">
         <div className="cat-text d-inline">Brand: </div>
         <div className="barnd-text d-inline mx-1">{brand.name}</div>
       </Col>
     </Row>
     <Row className="mt-4">
       <Col md="8" className="mt-1 d-flex">
       {
        item.availableColors ? (item.availableColors.map((color, index) => {
          return (
            <div
            key={index}
            onClick={() => colorClick(index, color)}
            className="color ms-2"
            style={{ backgroundColor: color, border: indexColor === index ? '2px solid black' : 'none' }}></div>
          )
        })) : null
       }
   
       </Col>
       
     </Row>
     <Row className="mt-4">
          <div className="cat-text d-inline"> Available Items: {item.quantity} </div>
     </Row>

     <Row className="mt-4">
       <div className="cat-text">Features :</div>
     </Row>
     <Row className="mt-2">
       <Col md="10">
         <div className="product-description d-inline">
           {item.description}
         </div>
       </Col>
     </Row>
     <Row className="mt-4">
       <Col md="12">

          {item.priceAfterDiscount >= 1 ? (
            <div className="product-price d-inline px-3 py-3 border"> $
              <span style={{textDecorationLine: 'line-through'}}>{item.price}</span> {item.priceAfterDiscount}
            </div>
          ): <spans className="product-price d-inline px-3 py-3 border" >${item.price}</spans>  }
        
         <div onClick={addToCartHandle} className="product-cart-add px-3 py-3 d-inline mx-3">Add to Cart</div>
       </Col>
     </Row>
     <ToastContainer />
   </div>
  )
}

export default ProductText