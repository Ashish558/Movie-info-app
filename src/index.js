import React from 'react';
import ReactDOM from 'react-dom';

import './bootstrap.min.css'
import './style.css'

import App from './App';
import { AppProvider } from './context'

ReactDOM.render(
   <AppProvider>
      <App />
   </AppProvider>,
   document.getElementById('root')
);