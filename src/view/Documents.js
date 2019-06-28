import React, { Component } from 'react';
import { Footer } from '../component/common/Footer';
import { Row, Col } from 'react-bootstrap';
import { product, welcome } from '../api/services';
import { Info, TitleNav } from '../component/common';
import { colors } from '../resources';

class Documents extends Component {
    render() {
        return (
            <section>
                <Info data={welcome} />
                <article className='d-flex flex-column pt-5 layout-body bgc-light-gray'>

                    <TitleNav dividerStyle={{ backgroundColor: colors.dark_white, }} title={'DOCUMENTS OVERVIEW'} navShow={false} />

                    <Row key={`row${0}`} className='mt-2'>
                        {
                            product.slice(0, 6).map((element, index) => {
                                return (
                                    <Col xs={12} md={6} lg={4} key={`col${index}`} className='mb-5'>
                                        <Row>
                                            <Col>
                                                <h5 className='color-medium-gray ' ><b>{element.title}</b></h5>
                                                <p className='text-light line-height-normal mt-2 mb-4'><small>{element.peragraph}</small></p>
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

export { Documents }
