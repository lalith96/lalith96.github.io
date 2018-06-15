import React, { Component } from 'react';
import Head from './head';
import Banner from './banner';
import Chart from './chart';
import Forecast from './forecast';
import './box.css';

export default class Box extends Component{
    render(){
        return(
            <div class="main-container" id="main-con">
                <Head />
                <Banner />
                <Chart />
                <Forecast />
            </div>
        );
    }
}