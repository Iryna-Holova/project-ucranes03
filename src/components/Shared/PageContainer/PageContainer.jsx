import css from './PageContainer.module.css';

const PageContainer = ({ page, children, tag = 'div' }) => {
  return tag === 'section' ? (
    <section className={`${css.page} ${page ? css[page] : ''}`}>
      {children}
    </section>
  ) : (
    <div className={`${css.page} ${page ? css[page] : ''}`}>{children}</div>
  );
};

export default PageContainer;
