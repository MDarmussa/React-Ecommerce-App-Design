import React from 'react'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LoginHook from '../../hook/auth/login-hook'
import { ToastContainer } from 'react-toastify';



function LoginPage() {

    const [email, password, loading, onchangeEmail, onchangePassword, onSubmit, isPress] = LoginHook();
  return (
    <Container style={{ minHeight: "680px" }}>
      <Row className="py-5 d-flex justify-content-center ">
            <Col sm="12" className="d-flex flex-column ">
                <label className="mx-auto title-login">Login Page</label>
                <input
                    value={email}
                    onChange={onchangeEmail}
                    placeholder="Email..."
                    type="email"
                    className="user-input my-3 text-center mx-auto"
                />
                <input
                    value={password}
                    onChange={onchangePassword}
                    placeholder="Password..."
                    type="password"
                    className="user-input text-center mx-auto"
                />
                <button onClick={onSubmit} className="btn-login mx-auto mt-4">Login</button>
                <label className="mx-auto my-4">
                    Don't Have an Account? {" "}
                    <Link to="/register" style={{textDecoration:'none'}}>
                        <span style={{ cursor: "pointer" }} className="text-danger">
                            Click Here
                        </span>
                    </Link>
                </label>

                {isPress === true ? (loading === true ? ( 
                    <Spinner animation="border" role="status">
                    </Spinner>) : null) : null}

            </Col>


            <label className="mx-auto my-4">
            <Link to="/admin/allproducts" style={{textDecoration:'none'}}>
                <span style={{ cursor: "pointer" }} className="text-danger">
                    Admin Login
                </span>
            </Link>

            <Link to="/user/allorders" style={{textDecoration:'none'}}>
                <span style={{ cursor: "pointer" }} className="text-danger mx-3">
                    User Login
                </span>
            </Link>
        </label>
      </Row>
      <ToastContainer />
    </Container>
  )
}

export default LoginPage