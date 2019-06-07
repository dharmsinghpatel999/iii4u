import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselList = ({ pictures }) => {
    return (
        <Carousel
            interval={200000}
            indicators={false}
            fade={true}
            // activeIndex={index}
            // direction={direction}
            onSelect={this.handleSelect.bind(this)}
        >
            {
                pictures.map((picture, index) => {
                    return (
                        <Carousel.Item key={index}>
                            <img
                                className='d-block w-100 img-circle'
                                src={picture}
                                alt='First slide'
                            />
                        </Carousel.Item>
                    )
                })
            }
        </Carousel>
    )
}