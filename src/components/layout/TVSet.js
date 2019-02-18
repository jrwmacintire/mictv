import React from 'react'
import TV from '../../images/tv-base.png'

export default function TVSet() {
    return (
        <div className='TVSet'>
            <img style={ tvImageStyle } src={TV} alt="MicTV TV set"></img>
        </div>
    )
}

const tvImageStyle = {
    maxWidth: '600px',
    height: 'auto'
}