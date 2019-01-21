import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="py-3 fixed-bottom bg-dark">
                <div className="container">
                    <p className="m-0 text-center text-white">Copyright &copy; Your Website 2018</p>
                </div>
            </footer>
        );
    }
}

export default Footer