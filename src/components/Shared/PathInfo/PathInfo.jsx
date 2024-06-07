import { Link } from 'react-router-dom';
import css from './PathInfo.module.css';

const PathInfo = ({ current }) => {
  return (
    <div className={css.path}>
      <Link to="/">Home</Link>
      <span>/</span>
      <span className={css.current}>{current}</span>
    </div>
  );
};

export default PathInfo;
