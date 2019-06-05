import React, { Component } from 'react';
import { Carousel, Button, Row, Col, Card } from 'react-bootstrap';
import { images } from '../resources';

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
                            if (index > 2) {
                                data = data.slice(3)
                                return this.renderProduct(data, ++key)
                            } else {
                                return (
                                    <Col xs={12} md={4} key={`col${index}`}>
                                        <Row>
                                            <img
                                                src={images.logo}
                                                width='30'
                                                height='30'
                                                className='d-inline-block align-top'
                                                alt='iii4u'
                                            />
                                            <Col>
                                                <h6>{element.title}</h6>
                                                <p className='text-light'>{element.peragraph}</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                )
                            }
                        })
                    }
                </Row>
            )
        } else {
            return null;
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
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className='d-block w-100'
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfao7bpcWcmbzZQ6QW6LHHwljjIfFwyEgsegZKEZP5gxmZB5e1gA'
                            alt='Third slide'
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className='d-block w-100'
                            src='https://www.ruralmarketing.in/sites/default/files/styles/large/public/meet-the-guru-of-agriculture-data-collection.jpg?itok=G0E8dgJC'
                            alt='Third slide'
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                {/* content */}
                <article className='welcome-body'>
                    <h2 className='text-light'><strong>Welcome to our company!</strong></h2>
                    <p className='text-light align-self-center mt-2'>Epsum factorial non deposit quid pro quo hic escorol. Oquarrels et gorilla congolium sic ad nauseum. Souvlaki ignitus carborundum e pluribus unum. Defacto lingo est igpay atinlay. Marquee selectus non provisio incongruous feline nolo contendre. Gratuitous octopus niacin, sodium timate.
                    </p>
                    <Button variant='light' className='text-success pr-2 pl-2'>Learn more >></Button>
                </article>

                <div className='d-flex bg-secondary flex-column pt-5 pb-5 pl-5 pr-5'>
                    {this.renderProduct(product)}
                </div>

                <Col className='mt-5 mb-5'>
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