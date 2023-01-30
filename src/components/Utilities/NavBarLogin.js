import React, { useEffect, useState } from 'react'
import { Navbar, Container, FormControl, Nav, NavDropdown } from 'react-bootstrap'
import logo from '../../images/logo.png'
import login from '../../images/login.png'
import cart from '../../images/cart.png'
import NavbarSearchHook from '../../hook/search/navbar-search-hook'



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
    console.log(user)
    const logout = () => {
        localStorage.removeItem("user")
        setUser('')
    }


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
                    <NavDropdown title={user.name} id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.2">Profile</NavDropdown.Item>
                        <NavDropdown.Item onClick={logout} href="#action/3.3">Sign Out</NavDropdown.Item>
                        <NavDropdown.Divider />
                    </NavDropdown>
                ) : ( <Nav.Link href='/login'
                className="nav-text d-flex mt-3 justify-content-center">
                <img src={login} className="login-img" alt="sfvs" />
                <p style={{ color: "white" }}>Login</p>
            </Nav.Link>)
            }
               
                <Nav.Link href='/cart'
                    className="nav-text d-flex mt-3 justify-content-center"
                    style={{ color: "white" }}>
                    <img src={cart} className="login-img" alt="sfvs" />
                    <p style={{ color: "white" }}>Cart</p>
                </Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>
  )
}

export default NavBarLogin