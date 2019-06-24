import React from 'react';
import { Carousel } from 'react-bootstrap';

let index = 0, direction = null;
const CustomCarousel = ({ pictures }) => {
    return (
        <Carousel
            interval={2000}
            indicators={false}
            activeIndex={index}
            direction={direction}
            onSelect={handleSelect}
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

function handleSelect(selectedIndex, e) {

    index = selectedIndex;
    direction = e.direction;

    console.log(selectedIndex, e);
}

export { CustomCarousel };