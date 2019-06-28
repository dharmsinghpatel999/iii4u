
import React, { Component } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

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
        return (
            <header id='header'>
                {/* <article className={this.state.visible ? 'bg-light' : 'bg-light container-fluid fixed-top color-dark-white'}> */}
                <article className={this.state.visible ? 'bg-light' : 'bg-light color-dark-white'}>
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
                        <Navbar.Collapse className='justify-content-end text-size-medium text-center' id='basic-navbar-nav'>
                            <Nav>
                                <NavLink exact className='nav-link' to='/'>{'HOME'}</NavLink>
                                <NavLink className='nav-link' to='/documents'>{'DOCUMENTS'}</NavLink>
                                <NavLink className='nav-link' to='/products'>{'PRODUCTS'}</NavLink>
                                <NavLink className='nav-link' to='/newsevents'>{'NEWS & EVENTS'}</NavLink>
                                <NavLink className='nav-link' to='/services'>{'SERVICES'}</NavLink>
                                <NavLink className='nav-link' to='/comments'>{'COMMENTS'}</NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <div className={this.state.visible ? 'medium-divider' : ''} />
                </article>
            </header>
        );
    }
}
