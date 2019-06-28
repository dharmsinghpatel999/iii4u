import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { TitleNav } from './TitleNav';
import { colors } from '../../resources';

const CardList = ({ data, key = 0, title, nav }) => {
    if (data.length !== 0) {
        return (
            <article className='d-flex flex-column layout-body bgc-dark-white pt-5 pb-3'>
                <TitleNav dividerStyle={{ backgroundColor: colors.dark_gray }} faAngleRight={'white'} title={title} nav={nav} />
                <Row key={key}>
                    {
                        data.map((element, index) => {
                            return (
                                <Col key={index} xs={12} md={6} lg={4}>
                                    <Card className='mb-3'>
                                        <Card.Img variant='top' src={element.link} />
                                        <Card.Body>
                                            <Card.Title className="h6">{element.title}</Card.Title>
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