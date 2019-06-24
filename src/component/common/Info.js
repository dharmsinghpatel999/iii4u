import React from 'react';
import { Button } from 'react-bootstrap';

const Info = ({ data, nav = '/' }) => {
    const { title, body, btn } = data;
    return (
        <article className='welcome-body layout-body text-center'>
            <h2 className='text-light'><strong>{title}</strong></h2>
            <p className='text-light mt-3 text-light-x2'>{body}</p>
            <Button variant='light' className='pr-5 pl-5 mt-3 color-green' href={nav} >{`${btn}>>`}</Button>
        </article>
    )
}
export { Info }

