import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Banner from '../components/banner';
import PhotoList from '../components/photo-list-container';
import PhotoDetails from '../components/photo-details-container';

import './app.css';

class App extends Component {
    render() {
        return (
                <Router>
                    <Switch>
                        <Route exact path="/photos/:id" component={PhotoDetails} />
                        <Route exact path="/photos" component={PhotoList} />
                        <Redirect to="/photos" />
                    </Switch>
                </Router>
        );
    }
}

export default App;
