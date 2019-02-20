import React from 'react';
import ContactImg from '../../images/contact.png'
import Line from '../layout/Line'
import ContactForm from '../layout/ContactForm'

export default function Contact() {
    return (
        <div className='Contact col-sm-10 col-md-8 col-lg-6' >
            <img id='ContactHeader' src={ ContactImg } alt='Contact Page for MicTV' />
            <Line />
            <ContactForm />
            <Line />
        </div>
    )
}
