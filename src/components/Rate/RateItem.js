import React, { useState } from 'react'
import { Row, Col, Modal, Button, Container } from 'react-bootstrap'
import rate from '../../images/rate.png'
import deleteicone from '../../images/delete.png'
import editicone from '../../images/edit.png'
import { useParams } from 'react-router-dom'
import DeleteRateHook from '../../hook/review/delete-rate-hook'
import { ToastContainer } from 'react-toastify'
import ReactStars from 'react-rating-stars-component'
import EditRateHook from '../../hook/review/edit-review-hook'


function RateItem({ review }) { //{review} is a prop coming from RateContainer.js

     const [isUser, handleDelete, handleShow, handleClose, showDelete] = DeleteRateHook(review)

     const [newRateText, newRateValue, showEdit, handleCloseEdit, handleShowEdit, onChangeRateText, onChangeRateValue, handleEdit] = EditRateHook(review)

     const setting = {
          size: 20,
          count: 5,
          color: "#979797",
          activeColor: "#ffc107",
          value: newRateValue,
          a11y: true,
          isHalf: true,
          emptyIcon: <i className="far fa-star" />,
          halfIcon: <i className="fa fa-star-half-alt" />,
          filledIcon: <i className="fa fa-star" />,
          onChange: newValue => {
               onChangeRateValue(newValue);
          }
     };


  return (
     <div>

          <Modal show={showDelete} onHide={handleClose}>
               <Modal.Header>
               <Modal.Title><div className='font'>Confirm Delete Review!</div></Modal.Title>
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

          <Modal show={showEdit} onHide={handleCloseEdit}>
               <Modal.Header>
               <Modal.Title><div className='font'>Edit Review</div></Modal.Title>
               </Modal.Header>
               <Modal.Body>
               <ReactStars {...setting} />
               <input
                    onChange={onChangeRateText}
                    value={newRateText}
                    type="text"
                    className='font w-100 mt-2'
                    style={{ border: 'none' }}
               />
               </Modal.Body>
               <Modal.Footer>
                    <Button className='font' variant="success" onClick={handleCloseEdit}>
                         Close
                    </Button>
                    <Button className='font' variant="dark" onClick={handleEdit}>
                         Save Changes
                    </Button>
               </Modal.Footer>
          </Modal>

          <Row className="mt-3">
          <Col className="d-felx me-5">
               <div className="rate-name  d-inline ms-2">{review.user.name}</div>
               <img className="" src={rate} alt="" height="16px" width="16px" />
               <div className="cat-rate  d-inline  p-1 pt-2">{review.rating}</div>
          </Col>
          </Row>

          <Row className="border-bottom mx-2">
          <Col className="d-felx me-4 pb-2">
               <div className="rate-description  d-inline ms-1">
                    {review.review}
               </div>

               {
                    isUser === true ? 
                    (
                         <div className='d-inline d-flex justify-content-end'>
                              <img onClick={handleShow} src={deleteicone} width="20px" height="20px" style={{ cursor: "pointer" }} alt="delete" className="me-3 mb-3" />
                              <img onClick={handleShowEdit} src={editicone} width="20px" height="20px" style={{ cursor: "pointer" }} alt="edit" />)
                         </div>
                    ) : null
               }

          </Col>
          </Row>

          <ToastContainer />

     </div>
  )
}

export default RateItem