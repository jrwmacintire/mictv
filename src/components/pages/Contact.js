import React from 'react';
import ContactImg from '../../images/contact.png'
import DinoMac from '../../images/dino-mac.png'

export default function Contact() {
    return (
        <div style={ contactPageStyle }>
            <img style={{ margin: 'auto' }} src={ ContactImg } alt='Contact Page for MicTV' />
            <img style={{ margin: 'auto' }} src={ DinoMac } alt='Drawing of Dinosaur McDonalds - Tucson, AZ, by John MacIntire' />
        </div>
    )
}

const contactPageStyle = {
    display: 'flex',
    flexDirection: 'column',
    margin: '50px auto'
}