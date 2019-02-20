import React, { Component } from 'react'

class ContactForm extends Component {

    render() {
        return (
            <div className='ContactForm container'>
                <form action='/submit-form' method='POST'>
                    <div className='form-group row'>
                        <label htmlFor='Name' className='col-sm-2 col-form-label'>Name: </label>
                        <div className='col-sm-10'>
                            <input type='text' name='name' className='form-control' required></input>
                        </div>
                    </div>
                    <div className='form-group row'>
                        <label htmlFor='email' className='col-sm-2 col-form-label'>Email: </label>
                        <div className='col-sm-10'>
                            <input type='text' name='email' className='form-control' required></input>
                        </div>
                    </div>
                    <div className='form-group row'>
                        <label htmlFor='phone' className='col-sm-2 col-form-label'>Phone: </label>
                        <div className='col-sm-10'>
                            <input type='text' name='phone' className='form-control' required></input>
                        </div>
                    </div>
                    <div className='form-group row'>
                        <label htmlFor='Name' className='col-sm-2 col-form-label'>Message: </label>
                        <div className='col-sm-10'>
                            <textarea lines='3' className='form-control' required></textarea>
                        </div>
                    </div>
                    <div className='form-group row'>
                        <button type='submit' className='btn btn-primary submitButton' >Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default ContactForm;