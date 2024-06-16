import { useSearchParams } from 'react-router-dom';
import css from './Pagination.module.css';

const Pagination = ({ totalPages }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get('page')) || 1;

  const changePage = page => {
    setSearchParams(prevParams => {
      const newParams = new URLSearchParams(prevParams);
      newParams.set('page', page);
      return newParams;
    });
  };

  const getPageNumbers = () => {
    if (totalPages <= 3) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    if (currentPage === 1) {
      return [1, 2, 3];
    }
    if (currentPage === totalPages) {
      return [totalPages - 2, totalPages - 1, totalPages];
    }
    return [currentPage - 1, currentPage, currentPage + 1];
  };

  return (
    <div className={css.pagination}>
      {currentPage > 1 && (
        <button
          onClick={() => changePage(currentPage - 1)}
          className={css.prev}
        >
          Previous
        </button>
      )}
      {getPageNumbers().map(page => (
        <button
          key={page}
          onClick={() => changePage(page)}
          className={`${page === currentPage && css.active} ${css.page}`}
        >
          {page}
        </button>
      ))}
      {currentPage < totalPages && (
        <button
          onClick={() => changePage(currentPage + 1)}
          className={css.next}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
