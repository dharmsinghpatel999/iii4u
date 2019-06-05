import React, { Component } from 'react';
import { Button, Nav, Navbar, Form, FormControl, NavDropdown, Container } from 'react-bootstrap';
import { images, colors } from '../../resources'

export default class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            prevScrollpos: window.pageYOffset,
            visible: true
        };
    }

    // Adds an event listener when the component is mount.
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    // Remove the event listener when the component is unmount.
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    // Hide or show the menu.
    handleScroll = () => {
        const { prevScrollpos } = this.state;

        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos > currentScrollPos;

        this.setState({
            prevScrollpos: currentScrollPos,
            visible
        });
    };

    render() {
        console.log('match', this.props.match);
        return (
            <section>
                <article className={this.state.visible ? 'bg-light' : 'bg-light container-fluid fixed-top'}>
                    <div className={this.state.visible ? 'divider' : ''} />
                    <Navbar expand='lg' bg='light' variant='dark' className='header shadow'>
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
                                <Nav.Link href='/about' >{'ABOUT US'}</Nav.Link>
                                <Nav.Link href='/services'>{'SERVICES'}</Nav.Link>
                                <NavDropdown title='PRODUCTS' id='basic-nav-dropdown'>
                                    <NavDropdown.Item href='/'>Apple</NavDropdown.Item>
                                    <NavDropdown.Item href='#action/3.2'>Mengo</NavDropdown.Item>
                                    <NavDropdown.Item href='#action/3.3'>Banana</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href='#action/3.4'>OTHER</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href='/newsevents'>{'NEWS & EVENTS'}</Nav.Link>
                                <Nav.Link href='/contacts'>{'CONTACTS'}</Nav.Link>
                                <Nav.Link href='/blog'>{'BLOG'}</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <div className={this.state.visible ? 'mb-1' : ''} />
                </article>
            </section>
        );
    }
}
