import React from 'react';
import { FaAngleRight } from 'react-icons/fa';

const TitleNav = ({ dividerStyle, faAngleRight = 'default' }) => {
    return (
        <section className='title-divider-nav' id='title-divider-nav'>
            <article className='d-flex flex-row d-flex justify-content-between'>
                <h6 className="text-uppercase color-dark-gray">{`OUR PRODUCTS`}</h6>
                {
                    faAngleRight === 'white' ?
                        <FaAngleRight size={30} className='icon-white' />
                        :
                        <FaAngleRight size={30} className='icon' />
                }

            </article>
            <div className='divider' style={dividerStyle}></div>
        </section>

    );
}
export { TitleNav }