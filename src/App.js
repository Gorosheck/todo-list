import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='header-title'><h1>ToDo List</h1></div>
      </header>
      <hr />
      <body>
        <div className='todo-body-wrapper'>
          <div>
            <textarea placeholder='add your new todo item' rows='3' cols='100' />
          </div>
          <div>
            <button className='button-add-item'>ADD item</button>
          </div>
        </div>
        <hr />
        <div className='todo-items-wrapper'>
          <div className='todo-item'>

          </div>
        </div>
        <hr />
      </body>
    </div>
  );
}

export default App;
