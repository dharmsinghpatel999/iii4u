import React, { Component } from 'react';
import { Carousel, Button, Row, Col, Card, Nav } from 'react-bootstrap';
import {
    FaAngleRight,
    FaGooglePlus,
    FaTwitter,
    FaFacebook,
    FaPinterest,
    FaLinkedin
} from 'react-icons/fa';
import { images, colors } from '../resources';
import { DocList, TitleNav, CardList, Info } from '../component/common';
import { NavLink } from 'react-router-dom';

class About extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            index: 0,
            direction: null,
            videoList: videoes.slice(0, 4)
        };
        console.log('window=', window.innerHeight);
    }

    handleSelect(selectedIndex, e) {
        this.setState({
            index: selectedIndex,
            direction: e.direction,
        });
        console.log(this.state, e);
    }

    render() {
        const { index, direction } = this.state;
        return (
            <section>
                <Carousel
                    interval={200000}
                    indicators={false}
                    fade={true}
                    activeIndex={index}
                    direction={direction}
                    onSelect={this.handleSelect.bind(this)}
                >
                    {
                        pictures.map((picture, index) => {
                            return (
                                <Carousel.Item key={index}>
                                    <img
                                        className='d-block w-100 img-circle'
                                        src={picture}
                                        alt='First slide'
                                    />
                                </Carousel.Item>
                            )
                        })
                    }
                </Carousel>

                <Info data={welcome} />

                <DocList data={product} />

                <TitleNav />
                <CardList data={this.state.videoList} />

                <Info data={event} />

                <article className='bgc-medium-gray pt-5 pb-5 row layout-body text-center'>
                    <Col xs={12} md={3} lg={3} className=''>
                        <h3 className='lead color-green line-height-normal'>Get in touch</h3>
                        <address className='small mt-3 mb-3 color_link_icon'>8901 Marmora Road<br />Glasgow, DO4 89GR.</address>
                        <dl className='small color_link_icon'>
                            <dt>Freephone: </dt>
                            <dd> +1 800 559 6580</dd>
                        </dl>
                        <dl className='small color_link_icon'>
                            <dt>Telephone: </dt>
                            <dd> +1 959 603 6035</dd>
                        </dl>
                        <dl className='small color_link_icon'>
                            <dt>FAX:  </dt>
                            <dd> +1 504 889 9898</dd>
                        </dl>

                        <p className='small color-white'>
                            © 2019 James. Agriculture Co.
                            Privacy Policy
                            </p>
                    </Col>
                    <Col xs={12} md={3} lg={3} className=''>
                        <h2 className='color-green lead'>Go our services</h2>
                        <Nav
                            activeKey="/home"
                            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
                            className='flex-column small'
                        >
                            <NavLink exact className='nav-link' to='/'>{'ABOUT US'}</NavLink>
                            <NavLink className='nav-link' to='/services'>{'SERVICES'}</NavLink>
                            <NavLink className='nav-link' to='/products'>{'PRODUCTS'}</NavLink>
                            <NavLink className='nav-link' to='/newsevents'>{'NEWS & EVENTS'}</NavLink>
                            <NavLink className='nav-link' to='/contacts'>{'CONTACTS'}</NavLink>
                            <NavLink className='nav-link' to='/blog'>{'BLOG'}</NavLink>
                        </Nav>
                    </Col>
                    <Col xs={12} md={3} lg={3} className='footer'>
                        <h2 className='color-dark-white lead'>Follow us</h2>
                        <Row className='d-flex justify-content-between'>
                            <FaGooglePlus size='2em' color={colors.link_icon} />
                            <FaTwitter size='2em' color={colors.link_icon} />
                            <FaFacebook size='2em' color={colors.link_icon} />
                            <FaPinterest size='2em' color={colors.link_icon} />
                        </Row>
                    </Col>
                    <Col xs={12} md={3} lg={3} className='footer'>
                        <h6 className='color-dark-white lead'>Join our newsletter</h6>
                        <p className='color_link_icon'>And always stay informed of the latest farm and location news!</p>
                        <Button>Sign up</Button>
                    </Col>

                </article>
            </section>
        );
    }
}
export { About }

const pictures = [
    'https://cdn.pixabay.com/photo/2017/03/05/01/22/barley-2117454__340.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfao7bpcWcmbzZQ6QW6LHHwljjIfFwyEgsegZKEZP5gxmZB5e1gA',
    'https://www.ruralmarketing.in/sites/default/files/styles/large/public/meet-the-guru-of-agriculture-data-collection.jpg?itok=G0E8dgJC'
]

const welcome = {
    title: 'Welcome to our company!',
    body: 'Epsum factorial non deposit quid pro quo hic escorol. Oquarrels et gorilla congolium sic ad nauseum. Souvlaki ignitus carborundum e pluribus unum. Defacto lingo est igpay atinlay. Marquee selectus non provisio incongruous feline nolo contendre. Gratuitous octopus niacin, sodium timate.',
    btn: 'Learn more'
}

const event = {
    title: 'News!',
    body: 'Epsum factorial non deposit quid pro quo hic escorol. Oquarrels et gorilla congolium sic ad nauseum. Souvlaki ignitus carborundum e pluribus unum. Defacto lingo est igpay atinlay. Marquee selectus non provisio incongruous feline nolo contendre. Gratuitous octopus niacin, sodium timate.',
    btn: 'Read More'
}

const videoes = [
    {
        link: '',
        title: 'QUISQUE NULLA VESTIBULUM1',
        peragraph: 'Epsum factorial noquid pro quo hic escorol'
    },
    {
        link: '',
        title: 'QUISQUE NULLA VESTIBULUM2',
        peragraph: 'Epsum factorial noquid pro quo hic escorol'
    },
    {
        link: '',
        title: 'QUISQUE NULLA VESTIBULUM3',
        peragraph: 'Epsum factorial noquid pro quo hic escorol'
    },
    {
        link: '',
        title: 'QUISQUE NULLA VESTIBULUM4',
        peragraph: 'Epsum factorial noquid pro quo hic escorol'
    },
    {
        link: '',
        title: 'QUISQUE NULLA VESTIBULUM5',
        peragraph: 'Epsum factorial noquid pro quo hic escorol'
    },
    {
        link: '',
        title: 'QUISQUE NULLA VESTIBULUM7',
        peragraph: 'Epsum factorial noquid pro quo hic escorol'
    },
    {
        link: '',
        title: 'QUISQUE NULLA VESTIBULUM6',
        peragraph: 'Epsum factorial noquid pro quo hic escorol'
    }
]

const product = [
    {
        img: '',
        title: 'QUISQUE NULLA VESTIBULUM1',
        peragraph: 'Epsum factorial noquid pro quo hic escorol. Olypian quarilla congolium si nauseum. Souvlakgnitus carborundume pluribus unum. facto lingo est igpay atinlay. Marquelectus non provisio incongruous feline.'
    },
    {
        img: '',
        title: 'QUISQUE NULLA VESTIBULUM2',
        peragraph: 'Epsum factorial noquid pro quo hic escorol. Olypian quarilla congolium si nauseum. Souvlakgnitus carborundume pluribus unum. facto lingo est igpay atinlay. Marquelectus non provisio incongruous feline.'
    },
    {
        img: '',
        title: 'QUISQUE NULLA VESTIBULUM3',
        peragraph: 'Epsum factorial noquid pro quo hic escorol. Olypian quarilla congolium si nauseum. Souvlakgnitus carborundume pluribus unum. facto lingo est igpay atinlay. Marquelectus non provisio incongruous feline.'
    },
    {
        img: '',
        title: 'QUISQUE NULLA VESTIBULUM4',
        peragraph: 'Epsum factorial noquid pro quo hic escorol. Olypian quarilla congolium si nauseum. Souvlakgnitus carborundume pluribus unum. facto lingo est igpay atinlay. Marquelectus non provisio incongruous feline.'
    },
    {
        img: '',
        title: 'QUISQUE NULLA VESTIBULUM5',
        peragraph: 'Epsum factorial noquid pro quo hic escorol. Olypian quarilla congolium si nauseum. Souvlakgnitus carborundume pluribus unum. facto lingo est igpay atinlay. Marquelectus non provisio incongruous feline.'
    },
    {
        img: '',
        title: 'QUISQUE NULLA VESTIBULUM6',
        peragraph: 'Epsum factorial noquid pro quo hic escorol. Olypian quarilla congolium si nauseum. Souvlakgnitus carborundume pluribus unum. facto lingo est igpay atinlay. Marquelectus non provisio incongruous feline.'
    }

]
