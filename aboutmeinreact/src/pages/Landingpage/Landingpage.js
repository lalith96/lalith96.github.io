import React, { Component } from 'react';
import Header from '../../header/header';
import Content from './content/content';
import Footer from '../../footer/footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Posts from './content/posts';
import Skill from './content/skill';

class LandingPage extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path='/' component={Content} />
                        <Route exact path='/posts' component={Posts} />
                        <Route exact path='/skill' component={Skill} />
                    </Switch>
                    <Footer />
                </div>
            </Router>
        )
    }
}

export default LandingPage;