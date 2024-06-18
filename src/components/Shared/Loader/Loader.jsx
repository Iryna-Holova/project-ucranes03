import css from './Loader.module.css';

const Loader = ({ type = 'section' }) => {
  return <div className={`${css.loader} ${css[type]}`}></div>;
};

export default Loader;
