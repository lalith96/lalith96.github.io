import React, { Component } from 'react';
import Header from '../../header/header';
import Content from './content/content';
import Footer from '../../footer/footer';
import { BrowserRouter as Router } from 'react-router-dom';

class LandingPage extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Header />
                </Router>
                <Content />
                <Footer />
            </div>
        )
    }
}

export default LandingPage;