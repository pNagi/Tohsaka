import React from 'react'
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from './routes.jsx';

ReactDOM.render(
    <Router routes={routes} history={createBrowserHistory()} />,
    document.getElementById('content')
);
