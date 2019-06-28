import React from 'react';
import { Button, Col, Nav } from 'react-bootstrap';
import {
    FaGooglePlus,
    FaTwitter,
    FaFacebook,
    FaPinterest,
} from 'react-icons/fa';
import { colors } from '../../resources';
import { NavLink } from 'react-router-dom';

const Footer = ({ footer = mainFooter }) => {
    return (
        <article className='bgc-medium-gray pt-5 pb-3 mb-2 row layout-body' id='footer'>
            <Col xs={12} md={3} lg={3} className=''>
                <h3 className='lead color-green line-height-normal mb-4 mb-0'>Get in touch</h3>
                <p className='small mt-3 mb-3 color-light-gray'>8901 Marmora Road Glasgow, DO4 89GR.</p>
                <dl className='footer-row small color-light-gray mb-0'>
                    <dt>Freephone: </dt>
                    <dd>{footer.getInTouch.freephone}</dd>
                </dl>
                <dl className='footer-row small color-light-gray mb-0'>
                    <dt>Telephone: </dt>
                    <dd>{footer.getInTouch.telephone}</dd>
                </dl>
                <dl className='footer-row small color-light-gray'>
                    <dt>FAX:  </dt>
                    <dd>{footer.getInTouch.fax}</dd>
                </dl>

                <p className='footer-row small color-white'>{footer.getInTouch.by}</p>
            </Col>
            <Col xs={12} md={3} lg={3} className='text-center' id='footer-nav'>
                {/* <h2 className='color-green lead mb-4'>Go our services</h2> */}
                <h2 className='mb-5' />
                <Nav
                    activeKey="/home"
                    onSelect={selectedKey => alert(`selected ${selectedKey}`)}
                    className='flex-column small'
                >
                    <NavLink exact className='nav-link  small pt-0' to='/'>{'HOME'}</NavLink>
                    <NavLink className='nav-link small pt-1' to='/documents'>{'DOCUMENTS'}</NavLink>
                    <NavLink className='nav-link small pt-1' to='/products'>{'PRODUCTS'}</NavLink>
                    <NavLink className='nav-link small pt-1' to='/newsevents'>{'NEWS & EVENTS'}</NavLink>
                    <NavLink className='nav-link small pt-1' to='/services'>{'SERVICES'}</NavLink>
                    <NavLink className='nav-link small pt-1' to='/comments'>{'COMMENTS'}</NavLink>
                </Nav>
            </Col>
            <Col xs={12} md={3} lg={3} className='footer'>
                <h2 className='color-dark-white lead mb-4'>Follow us</h2>

                <FaGooglePlus size='2em' color={colors.link_icon} className='mr-3' />
                <FaTwitter size='2em' color={colors.link_icon} className='mr-3' />
                <FaFacebook size='2em' color={colors.link_icon} className='mr-3' />
                <FaPinterest size='2em' color={colors.link_icon} className='mr-3' />

            </Col>
            <Col xs={12} md={3} lg={3} className='footer'>
                <h6 className='color-dark-white lead mb-4'>Join our newsletter</h6>
                <p className='color-light-gray small'>And always stay informed of the latest farm and location news!</p>
                <Button className='color-green bgc-white border-0'>Sign up</Button>
            </Col>
        </article>
    )
}
export { Footer }

const mainFooter = {
    getInTouch: {
        address: '8901 Marmora Road Glasgow, DO4 89GR.',
        freephone: '+1 800 559 6580',
        telephone: '+1 959 603 6035',
        fax: '+1 504 889 9898',
        by: '© 2019 James. Agriculture Co.Privacy Policy'
    }
}

