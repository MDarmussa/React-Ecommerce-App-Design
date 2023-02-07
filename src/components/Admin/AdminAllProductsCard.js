import React, { useState } from 'react'
import { Card, Col, Modal, Button, Row } from 'react-bootstrap'
import rate from '../../images/rate.png'
import prod1 from '../../images/prod1.png'
import favoff from '../../images/fav-off.png'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteProducts } from '../../redux/actions/productsAction'

function AdminAllProductsCard({ item }) {

     const [show, setShow] = useState(false);

     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);

     const dispatch = useDispatch();
     const handleDelete = async () => {
          await dispatch(deleteProducts(item._id))
          setShow(false);
          window.location.reload();
     }

  return (
     <Col xs="12" sm="6" md="5" lg="4" className="d-flex">

          <Modal show={show} onHide={handleClose}>
               <Modal.Header closeButton>
               <Modal.Title><div className='font'>Confirm Delete Item!</div></Modal.Title>
               </Modal.Header>
               <Modal.Body><div className='font'>Are You Sure?</div></Modal.Body>
               <Modal.Footer>
                    <Button className='font' variant="success" onClick={handleClose}>
                         Close
                    </Button>
                    <Button className='font' variant="dark" onClick={handleDelete}>
                         Save Changes
                    </Button>
               </Modal.Footer>
          </Modal>

          <Card
               className="my-2"
               style={{
               width: "100%",
               height: "380px",
               borderRadius: "8px",
               border: "none",
               backgroundColor: "#FFFFFF",
               boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)",
               }}>
               <Row className="d-flex justify-content-center px-2">
                    <Col className=" d-flex justify-content-between">
                         <div onClick={handleShow} className="d-inline item-delete-edit">ازاله</div>
                         <Link to={`/admin/editproduct/${item._id}`} style={{ textDecoration: "none" }}>
                              <div className="d-inline item-delete-edit">تعديل</div>
                         </Link>
                    </Col>
               </Row>
               <Link to={`/products/${item._id}`} style={{TextDecoration: 'none'}}>
                    <Card.Img style={{ height: "228px", width: "100%" }} src={item.imageCover} />
               </Link>
               <div className="d-flex justify-content-end mx-2">
               <img
                    src={favoff}
                    alt=""
                    className="text-center"
                    style={{
                         height: "24px",
                         width: "26px",
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
                              <img className="" src={rate} alt="" height="16px" width="16px" />
                              <div className="card-rate mx-1">{item.ratingsQuantity}</div>
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
     </Col>
  )
}

export default AdminAllProductsCard