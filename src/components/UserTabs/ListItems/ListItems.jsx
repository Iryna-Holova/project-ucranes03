import css from './ListItems.module.css';

const ListItems = ({ children }) => {
  return <ul className={css.list}>{children}</ul>;
};

export default ListItems;
