import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import PhotoList from '../components/photo-list-container';
import PhotoDetails from '../components/photo-details-container';

import 'normalize.css';
import './app.css';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route exact path="/photos/:id" component={PhotoDetails} />
                        <Route exact path="/photos" component={PhotoList} />
                        <Redirect to="/photos" />
                    </Switch>
                </Router>
            </Provider>
        );
    }
}

export default App;
