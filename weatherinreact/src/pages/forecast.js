import React, { Component } from 'react';
import './forecast.css';

export default class Forecast extends Component {
    render() {
        return (
            <div>
                <div class="forecast">
                <div class="row">
                    <div class="col-xs-6" id="fore1">
                        <div class="row">
                            <div class="col-xs-3"id="grid1">
                              <p id="fday1">Sun</p>
                              <img src="images/cloudy.png" id="fimg1" alt="image"/>
                              <p><span id="high1">31</span><sup>o</sup><span id="low1">27</span><sup>o</sup></p>
                            </div>
                            <div class="col-xs-3"id="grid2">
                              <p id="fday2">Sun</p>
                              <img src="images/cloudy.png" id="fimg2" alt="image"/>
                              <p><span id="high2">31</span><sup>o</sup><span id="low2">27</span><sup>o</sup></p>
                            </div>
                            <div class="col-xs-3"id="grid3">
                              <p id="fday3">Sun</p>
                              <img src="images/cloudy.png" id="fimg3" alt="image"/>
                              <p><span id="high3">31</span><sup>o</sup><span id="low3">27</span><sup>o</sup></p>
                            </div>
                            <div class="col-xs-3"id="grid4">
                              <p id="fday4">Sun</p>
                              <img src="images/cloudy.png" id="fimg4" alt="image"/>
                              <p><span id="high4">31</span><sup>o</sup><span id="low4">27</span><sup>o</sup></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-6">
                        <div class="row">
                            <div class="col-xs-3"id="grid5">
                              <p id="fday5">Sun</p>
                              <img src="images/cloudy.png" id="fimg5" alt="image"/>
                              <p><span id="high5">31</span><sup>o</sup><span id="low5">27</span><sup>o</sup></p>
                            </div>
                            <div class="col-xs-3"id="grid6">
                              <p id="fday6">Sun</p>
                              <img src="images/cloudy.png" id="fimg6" alt="image"/>
                              <p><span id="high6">31</span><sup>o</sup><span id="low6">27</span><sup>o</sup></p>
                            </div>
                            <div class="col-xs-3"id="grid7">
                              <p id="fday7">Sun</p>
                              <img src="images/cloudy.png" id="fimg7" alt="image"/>
                              <p><span id="high7">31</span><sup>o</sup><span id="low7">27</span><sup>o</sup></p>
                            </div>
                            <div class="col-xs-3"id="grid8">
                              <p id="fday8">Sun</p>
                              <img src="images/cloudy.png" id="fimg8" alt="image"/>
                              <p><span id="high8">31</span><sup>o</sup><span id="low8">27</span><sup>o</sup></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}