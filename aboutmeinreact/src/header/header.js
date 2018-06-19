import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

class Header extends Component {
    render() {
        return (
            <nav>
                <div className="menu">
                    <ul>
                        <li><Link to={"/"}>About me</Link></li>
                        <li><Link to={"/posts"}>Posts</Link></li>
                        <li><Link to={"/skill"}>Skills</Link></li>
                    </ul>
                </div>
                <div class="icons">
                    <a href="https://github.com/lalith96"><img src="images/github.jpg" alt=""></img></a>
                    <a href="https://twitter.com/"><img src="images/twitter.png" alt="" ></img></a>
                </div>
            </nav>
        );
    }
}

export default Header;