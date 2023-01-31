import React from 'react'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LoginHook from '../../hook/auth/login-hook'
import { ToastContainer } from 'react-toastify';

function VerifyPasswordPage() {
     const [code, onChangeCode, onSubmit] = VerifyPasswordPage()

  return (
     <Container style={{ minHeight: "680px" }}>
     <Row className="py-5 d-flex justify-content-center ">
           <Col sm="12" className="d-flex flex-column ">
               <label className="mx-auto title-login">Enter Code</label>
               <input
                   value={code}
                   onChange={onChangeCode}
                   placeholder="Enter the Code that You Received in Your Email..."
                   type="email"
                   className="user-input my-3 text-center mx-auto"
               />
               <button onClick={onSubmit} className="btn-login mx-auto mt-2">Submit</button>
           </Col>
     </Row>
     <ToastContainer />
   </Container>
  )
}

export default VerifyPasswordPage