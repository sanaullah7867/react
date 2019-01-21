import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">Start Bootstrap</Link>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li> <Link className="nav-link" to="/About">About</Link> </li>
                            <li> <Link className="nav-link" to="/Services">Services</Link> </li>
                            <li> <Link className="nav-link" to="/Contact">Contact</Link> </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar