import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {

    const [activeLink, setActiveLink] = useState('home');
    const router = useRouter();

    useEffect(() => {
        // Update the active link based on the current path
        if (router.pathname === '/') {
            setActiveLink('home');
        } else if (router.pathname === '/about') {
            setActiveLink('about');
        }
        // else if (/* Add more path checks */) {
        //     setActiveLink(/* Set active link based on path */);
        // }
    }, [router.pathname]);

    return (
        <>

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Logo</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" href="/"
                                className={activeLink === 'home' ? 'active' : ''}
                            >Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/about"
                                className={activeLink === 'about' ? 'active' : ''}
                            >About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">My Website</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Services
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Service 1</a>
                                <a class="dropdown-item" href="#">Service 2</a>
                                <a class="dropdown-item" href="#">Service 3</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav> */}


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