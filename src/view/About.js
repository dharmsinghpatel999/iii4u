import React, { Component } from 'react';
import { Carousel, Button, Row, Col, Card, Container } from 'react-bootstrap';
import { images, colors } from '../resources';

class About extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            index: 0,
            direction: null,
            videoList: videoes.slice(0, 4)
        };
    }

    handleSelect(selectedIndex, e) {
        this.setState({
            index: selectedIndex,
            direction: e.direction,
        });
        console.log(this.state, e);
    }

    renderProduct(data, key = 0) {
        console.log('element', data)
        if (data.length !== 0) {
            return (
                <Row key={`row${key}`}>
                    {
                        data.map((element, index) => {
                            return (
                                <Col xs={12} md={4} key={`col${index}`}>
                                    <Row>
                                        <img
                                            src={images.logo}
                                            width='50'
                                            height='50'
                                            className='d-inline-block align-top'
                                            alt='iii4u'
                                            color={colors.medium_gray}
                                        />
                                        <Col>
                                            <h4 style={{ color: colors.medium_gray }}><strong>{element.title}</strong></h4>
                                            <p className='text-light text-bold-x1'>{element.peragraph}</p>
                                        </Col>
                                    </Row>
                                </Col>
                            )
                        })
                    }
                </Row>
            )
        }
    }

    videoesList(videoes, key = 0) {
        console.log('element', videoes)
        if (videoes.length !== 0) {
            return (
                <Row xs={12} md={4} key={`row${key}`}>
                    {
                        videoes.map((element, index) => {
                            return (
                                <Col key={`col${index}`}>
                                    <Card style={{ width: '15rem' }}>
                                        <Card.Img variant='top' src='https://www.w3schools.com/images/picture.jpg' />
                                        <Card.Body>
                                            <Card.Title>{element.title}</Card.Title>
                                            <Card.Text>
                                                {element.peragraph}
                                            </Card.Text>
                                            <Button variant='primary'>Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            )
        } else {
            return null;
        }
    }

    render() {
        const { index, direction } = this.state;
        return (
            <section>
                {/* slide show */}
                <Carousel
                    interval={200000}
                    indicators={false}
                    fade={true}
                    activeIndex={index}
                    direction={direction}
                    onSelect={this.handleSelect.bind(this)}
                >
                    <Carousel.Item>
                        <img
                            className='d-block w-100 img-circle'
                            src='https://cdn.pixabay.com/photo/2017/03/05/01/22/barley-2117454__340.jpg'
                            alt='First slide'
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className='d-block w-100'
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfao7bpcWcmbzZQ6QW6LHHwljjIfFwyEgsegZKEZP5gxmZB5e1gA'
                            alt='Third slide'
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className='d-block w-100'
                            src='https://www.ruralmarketing.in/sites/default/files/styles/large/public/meet-the-guru-of-agriculture-data-collection.jpg?itok=G0E8dgJC'
                            alt='Third slide'
                        />
                    </Carousel.Item>
                </Carousel>

                {/* content */}
                <article className='welcome-body layout-body text-center'>
                    <h2 className='text-light'><strong>Welcome to our company!</strong></h2>
                    <p className='text-light mt-3 text-light-x2'>Epsum factorial non deposit quid pro quo hic escorol. Oquarrels et gorilla congolium sic ad nauseum. Souvlaki ignitus carborundum e pluribus unum. Defacto lingo est igpay atinlay. Marquee selectus non provisio incongruous feline nolo contendre. Gratuitous octopus niacin, sodium timate.
                    </p>
                    <Button variant='light' className='pr-5 pl-5 mt-3' style={{ color: colors.green }}>Learn more >></Button>
                </article>

                <article className='d-flex flex-column pt-5 pb-5 layout-body' style={{ backgroundColor: colors.light_gray }}>
                    {this.renderProduct(product)}
                </article>

                <Col className='mt-5 mb-5 layout-body'>
                    <div>
                        <div className='d-flex justify-content-between'>
                            <h6>OUR PRODUCTS</h6>
                            <div className='d-flex flex-row'>
                                <h6 onClick={() => this.setState({ videoList: videoes.slice(4, 6) })}>{`<`}</h6>
                                <h6 onClick={() => this.setState({ videoList: videoes.slice(0, 4) })}>{`>`}</h6>
                            </div>
                        </div>
                        <div className='divider' />
                    </div>

                    <div className='d-flex justify-content-around bg-primary'>
                        {this.videoesList(this.state.videoList)}
                    </div>
                </Col>
            </section>
        );
    }
}
export { About }

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
