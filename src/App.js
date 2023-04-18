import React from 'react';
import './App.css';
import Item from './item/Item';
import Header from './header/header';
import Body from './body/body';

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
        <Body />
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
