import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { NavItem } from 'react-bootstrap';

const TitleNav = ({ dividerStyle, faAngleRight = 'default', title = null, nav = '/', navShow = true }) => {
    return (
        <section className='title-divider-nav' id='title-divider-nav'>
            <article className='d-flex flex-row d-flex justify-content-between'>
                <h6 className="text-uppercase color-dark-gray">{title.toUpperCase()}</h6>
                {navShow ? renderNav(faAngleRight, nav) : null}
            </article>
            <div className='divider' style={dividerStyle}></div>
        </section>

    );
}

const renderNav = (faAngleRight, nav) => {
    return (
        faAngleRight === 'white' ?
            <NavLink to={nav}>
                <FaAngleRight size={30} className='icon-white' />
            </NavLink>
            :
            <NavLink to={nav}>
                <FaAngleRight size={30} className='icon' />
            </NavLink>
    )

}
export { TitleNav }