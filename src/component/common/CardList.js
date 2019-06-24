import React from 'react';
import { Button, Row, Col, Card } from 'react-bootstrap';
import { TitleNav } from './TitleNav';
import { colors } from '../../resources';

const CardList = ({ data, key = 0, title, nav }) => {
    if (data.length !== 0) {
        return (
            <article className='d-flex flex-column layout-body bgc-white mt-5 mb-5'>
                <TitleNav dividerStyle={{ backgroundColor: colors.dark_gray }} faAngleRight={'white'} title={title} nav={nav} />

                <Row key={`row${key}`}>
                    {
                        data.slice(0, 4).map((element, index) => {
                            return (
                                <Col key={`col${index}`} xs={12} md={6} lg={3}>
                                    <Card >
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
            </article>
        )
    }
}
export { CardList }