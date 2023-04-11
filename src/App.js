import React from 'react';
import './App.css';
import Item from './Item';

const App = (props) => {

  let todoItems = props.state.map(element => <Item todoItem={element.message} />);

  let newItemElement = React.createRef();

  const addItem = (props) => {
    let text = newItemElement.current.value;

  }

  return (
    <div className="app">
      <header className="app-header">
        <div className='header-title'><h1>ToDo List</h1></div>
      </header>
      <hr />
      <body>
        <div className='todo-body-wrapper'>
          <div>
            <textarea ref={newItemElement} placeholder='add your new todo item' rows='3' cols='100' />
          </div>
          <div>
            <button className='button-add-item' onClick={addItem}>ADD item</button>
          </div>
        </div>
        <hr />
        <div className='todo-items-wrapper'>
          {todoItems}
        </div>
        <hr />
      </body>
    </div>
  );
}

export default App;
