import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ENV from 'dotenv';

import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));

ENV.config();

// serviceWorker.unregister();