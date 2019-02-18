import React from 'react';
import ShowImg from '../../images/shows.png'
import ShowObject from '../layout/ShowObject'

export default function Shows() {
    return (
        <div className='Shows' style={ showsStyle }>
            <img style={{ margin: 'auto' }} src={ ShowImg } alt='Shows Page for MicTV' />
            <ShowObject />
        </div>
    )
}

const showsStyle = {
    maxWidth: '600px',
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto'
}