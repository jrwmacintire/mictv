import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ShopLink from '../../images/shop-lg-button.png'
import ShowsLink from '../../images/shows-lg-button.png'
import ContactLink from '../../images/contact-lg-button.png'
import Logo from '../../images/mictv-logo.png'

class Header extends Component {

    linkClicked = (e) => {
        // e.preventDefault();
        console.log(`nav link clicked! event target id: ${e.target.id}`)
    }

    render() { 
        return (
            <div className='Header col-sm-10 col-md-8 col-lg-6' >
                <Link exact='true' to='/'><img src={ Logo } className='logoStyle' alt="MicTV Logo" /></Link>
                <nav className='navbarStyle'>
                    <Link to='/shop'><img id='shopLink' src={ ShopLink } className='linkStyle' alt='shop - navigation link'></img></Link>
                    <Link to='/shows'><img id='showsLink' src={ ShowsLink } className='linkStyle' alt='shows - navigation link'></img></Link>
                    <Link to='/contact'><img id='contactLink' src={ ContactLink } className='linkStyle' alt='contact - navigation link'></img></Link>
                </nav>
            </div>
        )
    }
}
 
export default Header;

