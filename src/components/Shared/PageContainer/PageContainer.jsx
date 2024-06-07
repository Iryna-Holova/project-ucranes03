import css from './PageContainer.module.css';

const PageContainer = ({ page, children }) => {
  return (
    <div className={`${css.page} ${page ? css[page] : ''}`}>{children}</div>
  );
};

export default PageContainer;
