import React, { Component } from 'react';

class ShowObject extends Component {
    render() { 
        const { showName, date, location, time, price } = this.props.show;
        return ( 
            <div className='ShowObject' >
                <h3>{ showName }</h3>
                <h5>{ location }</h5>
                <p>{ date }</p>
                <p>{ time }</p>
                <p>{ price }</p>
            </div>
        );
    }
}
 
export default ShowObject;
