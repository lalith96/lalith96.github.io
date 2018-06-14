import React, { Component } from 'react';
import './images/github.jpg';
import './header.css';

class Header extends Component {
    render() {
        return (
                <nav>
                    <div className="menu">
                        <ul>
                            <li><a href="index.html">About me</a></li>
                            <li><a href="posts.html">Posts</a></li>
                            <li><a href="skills.html">Skills</a></li>
                        </ul>
                    </div>
                    <div class="icons">
                        <a href="https://github.com/lalith96"><img src="./images/github.jpg" ></img></a>
                        <a href="https://twitter.com/"><img src="./images/twitter.png" ></img></a>
                    </div>
                </nav>
        );
    }
}

export default Header;