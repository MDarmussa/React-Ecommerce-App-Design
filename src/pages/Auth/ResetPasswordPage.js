import React from 'react'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LoginHook from '../../hook/auth/login-hook'
import { ToastContainer } from 'react-toastify';
import ResetPasswordHook from '../../hook/auth/reset-password-hook';

function ResetPasswordPage() {
     const [password, confirmPassword, onChangePassword, onChangeConfirmPassword, onSubmit] = ResetPasswordHook()

  return (
     <Container style={{ minHeight: "680px" }}>
     <Row className="py-5 d-flex justify-content-center ">
           <Col sm="12" className="d-flex flex-column ">
               <label className="mx-auto title-login">Enter New Password</label>
               <input
                    value={password}
                    onChange={onChangePassword}
                    placeholder="Enter New Password"
                    type="password"
                    className="user-input my-3 text-center mx-auto"
               />
               <input
                    value={confirmPassword}
                    onChange={onChangeConfirmPassword}
                    placeholder="Repeat New Password"
                    type="password"
                    className="user-input my-3 text-center mx-auto"
               />
               <button onClick={onSubmit} className="btn-login mx-auto mt-2">Submit</button>
           </Col>
     </Row>
     <ToastContainer />
   </Container>
  )
}

export default ResetPasswordPage