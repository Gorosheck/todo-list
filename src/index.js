import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let state = {
  itemsActive: [
    { id: 1, message: 'first to-do' },
    { id: 1, message: 'second to-do' },
    { id: 1, message: 'first to-do' },
    { id: 1, message: 'first to-do' }
  ],
  itemsDone: [
    { id: 1, message: 'first to-do' }
  ],
  itemsDelete: [
    { id: 1, message: 'first to-do' }
  ],
  newItem: ""
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
