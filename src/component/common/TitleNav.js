import React, { Component } from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { colors } from '../../resources';

const TitleNav = () => {
    return (
        <article className='d-flex flex-column pt-5 layout-body bgc-white'>
            <section className='title-divider-nav '>
                <article className='d-flex flex-row d-flex justify-content-between'>
                    <h6 className="text-uppercase color-medium-gray">{`OUR PRODUCTS`}</h6>
                    <FaAngleRight size={20} color={colors.medium_gray} />
                </article>
                <div className='divider'></div>
            </section>
        </article>
    );
}
export { TitleNav }