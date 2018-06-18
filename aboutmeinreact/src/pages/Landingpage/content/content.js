import React, { Component } from 'react';
import './content.css';

class Content extends Component {
    render() {
        return (
            <div class="banner">
                <div class="left">
                    <img src="images/lalith.jpg" alt=""></img>
                </div>
                <div class="right">
                    <br /><br /><br />
                    <center><h1>Hi</h1></center>
                    <p>This is <span style={this.props.font}>Kasa Lalith Kumar</span> from visakhapatnam currently working as Associate software engineer in Virtusa, Hyderabad.
               I am passionate about solving real world problems with the help of technology.</p>
                    <p>Basically I love technology. So I choose computer science in my graduation. Apart from technology, I was interested in
            politics and travelling.</p>
                    <p></p>
                </div>
            </div>
        )
    }
}

export default Content