import React from 'react'
import Signature from '../../images/designed-by.png'

export default function Footer() {
    return (
        <div className='Footer' style={ footerStyle }>
            <img src={ Signature } alt="Designed by John MacIntire" />
        </div>
    )
}

const footerStyle = {
    margin: '20px auto 60px'
}