import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import App from './app';

import 'normalize.css';

const AppWrapper = createGlobalStyle`
    body,
    html,
    div {
        background-color: black;
    }
`;

ReactDOM.render(
    <Fragment>
        <AppWrapper />
        <App />
    </Fragment>,
    document.getElementById('root')
);
