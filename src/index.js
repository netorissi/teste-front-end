import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import './index.css';
import App from './App';

// ## --------- CONFIG --------- ## //
import history from './config/history';

ReactDOM.render(
    <Router history={history}>
        <App />
    </Router>,
	document.getElementById('root')
);
