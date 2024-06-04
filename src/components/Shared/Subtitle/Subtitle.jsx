import css from './Subtitle.module.css';

const Subtitle = ({ section, children }) => {
  return (
    <p className={`${css.text} ${section ? css[section] : ''}`}>{children}</p>
  );
};

export default Subtitle;
