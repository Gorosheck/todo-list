import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let items = [
  { id: 1, message: 'first to-do' },
  { id: 1, message: 'second to-do' },
  { id: 1, message: 'first to-do' },
  { id: 1, message: 'first to-do' }
]

export let addToDo = (textToDo) => {
  let newTodo = { id: 5, message: textToDo };
  items.push(newTodo);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App state={items} addToDo={addToDo} />
  </React.StrictMode>
);

reportWebVitals();
