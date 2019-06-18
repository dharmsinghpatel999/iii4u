import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { images } from '../../resources';
import { TitleNav } from './TitleNav';
import { FaAngleRight } from 'react-icons/fa';
import { colors } from '../../resources';

const DocList = ({ data, key = 0 }) => {
    console.log('element', data)
    if (data.length !== 0) {
        return (
            <article className='d-flex flex-column pt-5 layout-body bgc-light-gray'>

                <section className='title-divider-nav'>
                    <article className='d-flex flex-row d-flex justify-content-between'>
                        <h6 className="text-uppercase color-medium-gray">{`OUR PRODUCTS`}</h6>
                        <FaAngleRight size={20} color={colors.medium_gray} />
                    </article>
                    <div className='divider'></div>
                </section>

                <Row key={`row${key}`}>
                    {
                        data.slice(0, 6).map((element, index) => {
                            return (
                                <Col xs={12} md={6} lg={4} key={`col${index}`} className='mb-5 border'>
                                    <Row>
                                        {/* <img
                                            src={images.smily}
                                            width='80'
                                            height='80'
                                            // className='d-inline-block align-top'
                                            alt='iii4u'
                                        /> */}
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
        )
    }
}
export { DocList }