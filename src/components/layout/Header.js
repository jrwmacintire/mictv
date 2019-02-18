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
            <div className='Header' style={ headerStyle }>
                <Link exact='true' to='/'><img style={ logoStyle } src={ Logo } alt="MicTV Logo" /></Link>
                <nav className='NavLinks' style={ navbarStyle }>
                    <Link to='/shop'><img id='shopLink' style={ linkStyle } src={ ShopLink } alt='shop - navigation link'></img></Link>
                    <Link to='/shows'><img id='showsLink' style={ linkStyle } src={ ShowsLink } alt='shows - navigation link'></img></Link>
                    <Link to='/contact'><img id='contactLink' style={ linkStyle } src={ ContactLink } alt='contact - navigation link'></img></Link>
                </nav>
            </div>
        )
    }
}
 
export default Header;

const navbarStyle = {
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center'
}

const linkStyle = {
    margin: '0 50px'
}

const headerStyle = {
    width: '100%',
    margin: '0 auto'
  }

const logoStyle = {
    margin: '60px auto 30px'
}