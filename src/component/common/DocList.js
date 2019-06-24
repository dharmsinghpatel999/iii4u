import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { images } from '../../resources';
import { TitleNav } from './TitleNav';
import { FaAngleRight, FaArrowRight } from 'react-icons/fa';
import { colors } from '../../resources';

const DocList = ({ data, key = 0, title, nav, date = null }) => {
    let dateTag = date ? <h6 className='color-dark-white'>March 29</h6> : null

    if (data.length !== 0) {
        return (
            <article className='d-flex flex-column pt-5 layout-body bgc-light-gray'>

                <TitleNav dividerStyle={{ backgroundColor: colors.dark_white, }} title={title} nav={nav} />

                <Row key={`row${key}`} className='mt-2'>
                    {
                        data.slice(0, 6).map((element, index) => {
                            return (
                                <Col xs={12} md={6} lg={4} key={`col${index}`} className='mb-5'>
                                    <Row>
                                        {/* <div className='flex-column text-center mr-2'>
                                            <h5 className='color-green'>March</h5>
                                            <h6 className='color-green'>29</h6>
                                        </div> */}

                                        <Col>
                                            <h5 className='color-medium-gray ' >
                                                <b>{element.title}</b>
                                            </h5>

                                            {dateTag}

                                            <p className='text-light line-height-normal mt-2 mb-4'>
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
        )
    }
}
export { DocList }