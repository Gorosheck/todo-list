import style from './item.module.css';

const Item = (props) => {
  return (
    <div className={style.wrapper}>
      <div className={style.item}>{props.todoItem}</div>
    </div>
  );
}

export default Item;
