import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { SuperProvider } from './state/SuperContext';
import App from './App';
import './css/index.css';

ReactDOM.render(
    <SuperProvider>
        <Router>
            <App />
        </Router>
    </SuperProvider>,
    document.getElementById('root')
);
