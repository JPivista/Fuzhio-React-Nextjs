import React from 'react'
import { Container, Image, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <Container fluid className='position-absolute'>
                <Container>
                    <nav class="navbar navbar-expand-lg bg-transparent">
                        <a class="navbar-brand" href="/">
                            <Image src='/fuzhio_logo.png' width={130} />
                        </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item active px-md-2">
                                    <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item px-md-2">
                                    <a class="nav-link" href="/about">About</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle px-md-2" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Our Work
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a class="dropdown-item" href="/agriculture">Agriculture</a>
                                        <a class="dropdown-item" href="/noble-plastic">Noble Plastic</a>
                                    </div>
                                </li>
                                <li class="nav-item px-md-2">
                                    <a class="nav-link" href="/fuzhio-covid-response">Fuzhio & Covid Response</a>
                                </li>
                                <li class="nav-item px-md-2">
                                    <a class="nav-link" href="/blog">Blog</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </Container>
            </Container>


            {/* <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#">Your Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <a href="/" passHref>
                            <Nav.Link>Home</Nav.Link>
                        </a>
                        <a href="/about" passHref>
                            <Nav.Link>About</Nav.Link>
                        </a>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <a href="/dropdown-item-1" passHref>
                                <NavDropdown.Item>Dropdown Item 1</NavDropdown.Item>
                            </a>
                            <a href="/dropdown-item-2" passHref>
                                <NavDropdown.Item>Dropdown Item 2</NavDropdown.Item>
                            </a>
                            <NavDropdown.Divider />
                            <a href="/dropdown-item-3" passHref>
                                <NavDropdown.Item>Dropdown Item 3</NavDropdown.Item>
                            </a>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar> */}


            {/* <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/about">About</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav> */}
        </>
    )
}
export default Header