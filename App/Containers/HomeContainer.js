import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class HomeContainer extends Component{
    render() {
        return (
            <div>
                Home Screen
                <Link to="/contact"> &#60; Contact</Link>
            </div>
        )
    }
}

export default HomeContainer