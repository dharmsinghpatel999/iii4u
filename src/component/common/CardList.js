import React from 'react';
import { Button, Row, Col, Card } from 'react-bootstrap';

const CardList = ({ data, key = 0 }) => {
    if (data.length !== 0) {
        return (
            <article className='d-flex flex-column layout-body bgc-white'>
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