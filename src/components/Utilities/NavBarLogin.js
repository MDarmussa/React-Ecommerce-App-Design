import React, { useEffect, useState } from 'react'
import { Navbar, Container, FormControl, Nav, NavDropdown } from 'react-bootstrap'
import logo from '../../images/logo.png'
import login from '../../images/login.png'
import cart from '../../images/cart.png'
import NavbarSearchHook from '../../hook/search/navbar-search-hook'
import { ToastContainer } from 'react-toastify'
import notify from '../../hook/useNotifaction'
import GetAllUserCartHook from '../../hook/cart/get-all-user-cart-hook'



function NavBarLogin() {

    const [onChangeSearch, searchWord] = NavbarSearchHook();
    let word = "";
    if(localStorage.getItem("searchWord") != null)
         word = localStorage.getItem("searchWord")

    const [user, setUser] = useState('');

    useEffect(() => {
        if(localStorage.getItem("user") != null)
        setUser(JSON.parse(localStorage.getItem("user")))
    }, [])


    const logout = () => {
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        setUser('')
        setTimeout(() => {
            notify("You Logout Successfully", "success")
        }, 1500)
    }

    const [itemsNum] = GetAllUserCartHook()


  return (
  <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
    <Container>
        <Navbar.Brand>
            <a href='/'>
                <img src={logo} className='logo' />
            </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <FormControl
                value={word}
                onChange={onChangeSearch}
                type="search"
                placeholder="Search..."
                className="me-2 w-100 text-center"
                aria-label="Search"
            />
            <Nav className="me-auto">
            {
                user != '' ? (
                    <NavDropdown title={user.name}id="basic-nav-dropdown">
                        {
                            user.role === "admin" ? 
                            (
                                <NavDropdown.Item href="/admin/allproducts">Control Panel</NavDropdown.Item>
                            ) 
                            : 
                            (
                                <NavDropdown.Item href="/user/profile">Profile</NavDropdown.Item>
                            )
                        }
                        <NavDropdown.Divider className='Divider' />
                        <NavDropdown.Item onClick={logout} href="/">Sign Out</NavDropdown.Item>
                    </NavDropdown>
                ) : ( <Nav.Link href='/login'
                className="nav-text d-flex mt-3 justify-content-center">
                <img src={login} className="login-img" alt="sfvs" />
                <p style={{ color: "white" }}>Login</p>
            </Nav.Link>)
            }
               
                <Nav.Link href='/cart'
                    className="nav-text position-relative d-flex mt-3 justify-content-center"
                    style={{ color: "white" }}>
                    <img src={cart} className="login-img" alt="sfvs" />
                    <p style={{ color: "white" }}>Cart</p>

                    <span class="position-absolute top-10 start-100 translate-middle badge rounded-pill bg-danger">
                        {itemsNum || 0}
                    </span>

                </Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Container>
    <ToastContainer />
</Navbar>
  )
}

export default NavBarLogin