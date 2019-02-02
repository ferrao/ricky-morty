import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import posed, { PoseGroup } from 'react-pose';
import store from '../redux/store';
import PhotoList from '../components/photo-list-container';
import PhotoDetails from '../components/photo-details-container';

import 'normalize.css';
import './app.css';

const RouteContainer = posed.div({
    enter: { opacity: 1, delay: 200, beforeChildren: true },
    exit: { opacity: 0, delay: 200 }
});

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Route
                        render={({ location }) => (
                            <PoseGroup>
                                <RouteContainer key={location.pathname}>
                                    <Switch>
                                        <Route exact path="/photos/:id" component={PhotoDetails} />
                                        <Route exact path="/photos" component={PhotoList} />
                                        <Redirect to="/photos" />
                                    </Switch>
                                </RouteContainer>
                            </PoseGroup>
                        )}
                    />
                </Router>
            </Provider>
        );
    }
}

export default App;
