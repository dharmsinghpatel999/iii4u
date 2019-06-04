import React, { Component } from 'react';
import { Button, Nav, Navbar, Form, FormControl, NavDropdown, Container } from 'react-bootstrap';
import { images, colors } from '../../resources'

export default class NavBar extends Component {
    render() {
        console.log('match', this.props.match);
        return (
            <div>
                <Container className="bg-white fixed-top header" fluid>
                    <div className='mt-2' />
                    <Navbar expand='lg' bg='light' variant='dark'>
                        <Navbar.Brand href='#home'>
                            {/* <img
                                src={images.logo}
                                width='30'
                                height='30'
                                className='d-inline-block align-top'
                                alt='iii4u'
                            /> */}
                            <h1 className='text-dark'>iii4U</h1>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls='basic-navbar-nav' variant='dark' />
                        <Navbar.Collapse className='justify-content-end text-size-medium ' id='basic-navbar-nav'>
                            <Nav>
                                <Nav.Link href='/home' >{'ABOUT US'}</Nav.Link>
                                <Nav.Link href='/about'>{'SERVICES'}</Nav.Link>
                                <NavDropdown title='PRODUCT' id='basic-nav-dropdown'>
                                    <NavDropdown.Item href='/Topics'>Apple</NavDropdown.Item>
                                    <NavDropdown.Item href='#action/3.2'>Mengo</NavDropdown.Item>
                                    <NavDropdown.Item href='#action/3.3'>Banana</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href='#action/3.4'>OTHER</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href='/about'>{'NEWS & EVENTS'}</Nav.Link>
                                <Nav.Link href='/about'>{'CONTACTS'}</Nav.Link>
                                <Nav.Link href='/about'>{'BLOG'}</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
                <div className='medium-divider' />
            </div>
        );
    }
}
