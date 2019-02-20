import React, { Component } from 'react';
import ShowImg from '../../images/shows.png'
import ShowObject from '../layout/ShowObject'
import ShowData from '../../data/shows.json'
import Line from '../layout/Line'
import uuid from 'uuid'

class Shows extends Component {
    state = {
        shows: [...ShowData]
    }

    render() {
        return (
            <div className='Shows' style={ showsStyle }>
                <img style={{ margin: 'auto' }} src={ ShowImg } alt='Shows Page for MicTV' />
                <Line />
                { 
                    this.state.shows.map( show => {
                        return (
                            <ShowObject
                                show={ show }
                                key={ uuid.v4() }  
                            />
                        )
                    })
                }
                <Line />
            </div>
        )
    }
}

export default Shows;

const showsStyle = {
    maxWidth: '600px',
    display: 'flex',
    flexDirection: 'column',
    margin: '40px auto'
}