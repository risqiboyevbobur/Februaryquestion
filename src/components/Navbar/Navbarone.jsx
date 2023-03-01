import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navbarone = () => {
  return (
    <div>
      

      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link style={{ textDecoration:"none"}} to="/">
            <p style={{color:"black",margin:"0px 0 0 40px"}}> Login page</p>
            </Link>
            <Link style={{ textDecoration:"none"}} to="/crud">
            <p  style={{color:"black",margin:"0px 0 0 20px"}}> CRUD page</p>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    </div>
  )
}

export default Navbarone
