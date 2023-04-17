import React from 'react';
import './App.css';
import Item from './item/Item';
import Header from './header/header';

const App = (props) => {

  let todoItems = props.state.map(element => <Item todoItem={element.message} />);

  let newItemElement = React.createRef();

  const addItem = () => {
    let textToDo = newItemElement.current.value;
    props.addToDo(textToDo);
    newItemElement.current.value = '';
  }

  return (
    <div className="app">
      <Header />
      <hr />
      <body>
        <div className='todo-body-wrapper'>
          <div>
            <input ref={newItemElement} placeholder='add your new todo item' rows='3' cols='100' />
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
