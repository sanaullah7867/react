import React, {Component} from 'react';
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'

class About extends Component {
    render() {
        return ( 
            <div>           
            <Navbar />
                <section> 
                    <div className="container">
                        <h2> About Us</h2>
                        <p> React First Paragraph </p>
                        <div className="row">
                            <div className="col-md-6">
                                <img src="https://joannacwhalen.files.wordpress.com/2016/01/sheet-11.jpg" className="img-fluid" />
                            </div>
                            <div className="col-md-6">
                                <img src="https://joannacwhalen.files.wordpress.com/2016/01/sheet-21.jpg" className="img-fluid" />
                            </div>
                        </div>
                    </div>                
                </section>
            <Footer />
            </div>
        );
    }
}

export default About