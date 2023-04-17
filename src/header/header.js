import style from './header.module.css';

const Header = (props) => {
  return (
    <header>
      <div className={style.headerTitle}><h1>ToDo List</h1></div>
    </header>
  );
}

export default Header;
