import css from './SectionContainer.module.css';

const SectionContainer = ({ children }) => {
  return <div className={css.section}>{children}</div>;
};

export default SectionContainer;
