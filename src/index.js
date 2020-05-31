import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ENV from 'dotenv';

import './index.css';

ENV.config();

ReactDOM.render(<App />, document.getElementById('root'));

// serviceWorker.unregister();