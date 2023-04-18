import React from 'react';
import style from './body.module.css';
import Item from '../item/Item';



const Body = (props) => {




  return (
    <div className={style.todoBodyWrapper}>
      <div>
        <input ref={newItemElement} placeholder='add your new todo item' rows='3' cols='100' />
      </div>
      <div>
        <button className={style.buttonAddItem} onClick={addItem}>ADD item</button>
      </div>
    </div>
  );
}

export default Body;
