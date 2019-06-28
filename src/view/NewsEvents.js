import React, { Component } from 'react';
import { Footer } from '../component/common/Footer';
import { TitleNav, Info } from '../component/common';
import { colors } from '../resources';
import { Row, Col } from 'react-bootstrap';
import { product, welcome } from '../api/services';

class NewsEvents extends Component {
  render() {
    return (
      <section>
        <Info data={welcome} />
        <article className='d-flex flex-column pt-5 layout-body bgc-dark-white'>

          <TitleNav dividerStyle={{ backgroundColor: colors.light_gray, }} title={'News & Events'} navShow={false} />

          <Row key={`row${0}`} className='mt-2'>
            {
              product.slice(0, 6).map((element, index) => {
                return (
                  <Col xs={12} md={6} lg={4} key={`col${index}`} className='mb-5'>
                    <Row>
                      <Col>
                        <h5 className='color-medium-gray' >
                          <b>{element.title}</b>
                        </h5>

                        <h6 className='color-light-gray'>March 29</h6>

                        <p className='line-height-normal mt-2 mb-4'>
                          <small>{element.peragraph}</small>
                        </p>

                        <p className='color-medium-gray line-height-normal'>
                          <small>
                            <b>{`Read more>>`}</b>
                          </small>
                        </p>

                      </Col>
                    </Row>
                  </Col>
                )
              })
            }
          </Row>
        </article>
        <Footer />
      </section>
    );
  }
}

export { NewsEvents }
