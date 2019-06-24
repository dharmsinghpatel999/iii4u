import React, { Component } from 'react';
import { TitleNav } from '../component/common';
import { colors } from '../resources';
import { Row, Card, Button, Col } from 'react-bootstrap';
import { videoes } from '../api/services';
import { Footer } from '../component/common/Footer';

class Products extends Component {
  render() {
    return (
      <section>
        <article className='d-flex flex-column layout-body bgc-white mt-5 mb-5'>
          <TitleNav dividerStyle={{ backgroundColor: colors.dark_gray }} faAngleRight={'white'} title={'products overview'} navShow={false} />

          <Row key={`row${0}`}>
            {
              videoes.slice(0, 4).map((element, index) => {
                return (
                  <Col key={`col${index}`} xs={12} md={6} lg={4}>
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
      </section>
    );
  }
}

export { Products }
