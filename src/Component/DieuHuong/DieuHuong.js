import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home';
import How from './How';
import What from './What';
import Why from './Why';


class DieuHuong extends Component {
    render() {
        return (
            < div>
            <Route exact path="/why" component={Why} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/how" component={How} />
            <Route exact path="/what" component={What} />               
            </div>
        );
    }
}

export default DieuHuong;