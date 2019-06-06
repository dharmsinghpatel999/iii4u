import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown, } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { colors } from '../../resources';

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
            <header id='header'>
                <article className={this.state.visible ? 'bg-light' : 'bg-light container-fluid fixed-top'} style={{ color: colors.dark_white }}>
                    <div className={this.state.visible ? 'divider' : ''} />
                    <Navbar expand='lg' bg='light' variant='dark' className={this.state.visible ? 'header-static shadow' : 'header-flow'}>
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
                                <NavLink exact className='nav-link' to='/'>{'ABOUT US'}</NavLink>
                                <NavLink className='nav-link' to='/services'>{'SERVICES'}</NavLink>
                                <NavDropdown as={NavLink} title='PRODUCTS' id='basic-nav-dropdown'>
                                    <NavDropdown.Item className='nav-link' to='/'>Apple</NavDropdown.Item>
                                    <NavDropdown.Item className='nav-link' to='#action/3.2'>Mengo</NavDropdown.Item>
                                    <NavDropdown.Item className='nav-link' to='#action/3.3'>Banana</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item className='nav-link' to='#action/3.4'>OTHER</NavDropdown.Item>
                                </NavDropdown>
                                <NavLink className='nav-link' to='/newsevents'>{'NEWS & EVENTS'}</NavLink>
                                <NavLink className='nav-link' to='/contacts'>{'CONTACTS'}</NavLink>
                                <NavLink className='nav-link' to='/blog'>{'BLOG'}</NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <div className={this.state.visible ? 'medium-divider' : ''} />
                </article>
            </header>
        );
    }
}
