import React, { Component } from 'react';
import Search from './Search';
import Buttons from './Buttons';

class Navbar extends Component {
    render () {
        return (
            <nav>
                <div className="flex">
                    <div className="logo-container">
                        <a className="logo" href="google.com"></a>
                    </div>
                    <Search />
                    <Buttons />
                </div>
            </nav>
        )
    }
}

export default Navbar; 