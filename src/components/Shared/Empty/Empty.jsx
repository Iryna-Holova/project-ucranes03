import css from './Empty.module.css';

const Empty = ({ children }) => {
  return <p className={css.text}>{children}</p>;
};

export default Empty;
