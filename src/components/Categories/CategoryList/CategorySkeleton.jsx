import css from './CategoryList.module.css';

const CategorySkeleton = () => {
  return (
    <li
      style={{
        backgroundColor: 'var(--color-main-10)',
        animation: 'var(--animation-skeleton)',
      }}
      className={css.category_item}
    ></li>
  );
};

export default CategorySkeleton;
