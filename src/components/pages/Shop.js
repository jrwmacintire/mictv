import React, { Component } from 'react'
import ShopImg from '../../images/shop.png'
import ShootOutImage from '../../images/shoot-out.png'
import Line from '../layout/Line'

class Shop extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={ shopStyle }>
                <img style={{ margin: 'auto' }} src={ ShopImg } alt='Shop Page for MicTV' />
                <Line />
                <img style={{ margin: 'auto' }} src={ ShootOutImage } alt='Artwork by John MacIntire' />
                <Line />
            </div>
        );
    }
}
 
export default Shop;

const shopStyle = {
    maxWidth: '600px',
    display: 'flex',
    flexDirection: 'column',
    margin: '40px auto'
}