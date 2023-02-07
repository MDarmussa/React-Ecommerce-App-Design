import React, { useEffect, useState } from 'react'
import { Card, Col } from 'react-bootstrap'
import rate from '../../images/rate.png'
import favoff from '../../images/fav-on.png'
import favon from '../../images/fav-off.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addProductToWishList, removeProductToWishList } from '../../redux/actions/wishListAction'
import { ToastContainer } from 'react-toastify'
import notify from "../../hook/useNotifaction"
import productCardHook from '../../hook/products/product-card-hook'


function ProductCard({ item, favProd }) {

     const [addToWishListData, removeToWishListData, handleFav, favImg] = productCardHook(item, favProd)

  return (
     <Col xs="6" sm="6" md="4" lg="3" className="d-flex">
          <Card
               className="my-2"
               style={{
               width: "100%",
               height: "345px",
               borderRadius: "8px",
               border: "none",
               backgroundColor: "#FFFFFF",
               boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)",
               }}>
               <Link to={`/products/${item._id}`} style={{ textDecoration: 'none' }}>
                    <Card.Img style={{ height: "228px", width: "100%" }} src={item.imageCover} />
               </Link>
               <div className="d-flex justify-content-end mx-2">
               <img
                    onClick={handleFav}
                    src={favImg}
                    alt="favorite"
                    className="text-center"
                    style={{
                         height: "24px",
                         width: "26px",
                         cursor: "pointer",
                    }}
               />
               </div>
               <Card.Body>
               <Card.Title>
                    <div className="card-title">
                         {item.title}
                    </div>
               </Card.Title>
               <Card.Text>
                    <div className="d-flex justify-content-between ">
                         <div className="d-flex">
                              <img
                                   className=""
                                   src={rate}
                                   alt=""
                                   height="16px"
                                   width="16px"
                              />
                              <div className="card-rate mx-2">{item.ratingsAverage}</div>
                         </div>
                         <div className="d-flex">
                         <div className="card-currency mx-1">$</div>
                              <div className="card-price">
                                   {item.priceAfterDiscount >= 1 ? 
                                        (<div><span style={{textDecorationLine: 'line-through'}}>{item.price}</span> {item.priceAfterDiscount}</div>) : item.price 
                                   }
                              </div>
                         </div>
                    </div>
               </Card.Text>
               </Card.Body>
          </Card>
          <ToastContainer />
     </Col>
  )
}

export default ProductCard