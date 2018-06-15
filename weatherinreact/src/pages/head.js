import React, { Component } from 'react';
import './head.css';

export default class Head extends Component {
    render() {
        return (
            <div>
                <div class="searched-place" id="searched-place">
                    <span id="place">Hyderabad,Telangana
                </span>
                </div>
                <div class="day" id="current-day">
                    <span id="day">Saturday</span>
                </div>
                <div class="weather-condition">
                    <p id="cond">Cloudy</p>
                </div>
            </div>
        );
    }
}