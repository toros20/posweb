import React, { Component } from 'react';
import Header from './header';
import Sidemenu from './sidemenu';

export default class products extends Component {
    render() {
        return (
            <div>
                <Header />
                <Sidemenu />
            </div>
        )
    }
}
