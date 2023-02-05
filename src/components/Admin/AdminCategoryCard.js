import React from 'react'
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import prod3 from "../../images/prod3.png"
import editicon from "../../images/edit.png"
import deleteicon from "../../images/delete.png"
import CategoryCardHook from '../../hook/category/category-card-hook'



function AdminCategoryCard({ categories }) {

     const [show, handleClose, handleShow, handleDelete] = CategoryCardHook(categories)
 

  return (

          <Row xs="6" sm="6" md="4" lg="3" className="d-flex">

               <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title><div className='font'>Confirm Delete Coupon!</div></Modal.Title>
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

               <Col xs={12} md={6} style={{ padding: '10px' }}>
                    <Card>
                         <Card.Img variant="top" src={categories.image} className="category-admin-card-img" />
                         <Card.Body className='categoty-admin-card-text'>
                              <Card.Title>{categories.name}</Card.Title>
                              <Col className="d-flex d-flex justify-content-end mt-5">
                                   <div className="d-flex p-2">
                                        <Link to={`/admin/editcategory/${categories._id}`} style={{ textDecoration: "none" }}>
                                             <div className="d-flex mx-2">
                                                  <img
                                                       alt=""
                                                       className="ms-1 mt-2"
                                                       src={editicon}
                                                       height="17px"
                                                       width="15px"
                                                  />
                                                       <p className="item-delete-edit"> تعديل</p>
                                             </div>
          
                                        </Link>
                                        <div onClick={handleShow} className="d-flex ">
                                             <img
                                                  alt=""
                                                  className="ms-1 mt-2"
                                                  src={deleteicon}
                                                  height="17px"
                                                  width="15px"
                                             />
                                             <p className="item-delete-edit"> ازاله</p>
                                        </div>
                                   </div>
                              </Col>
                         </Card.Body>
                    </Card>
               </Col>
          </Row>
  )
}

export default AdminCategoryCard