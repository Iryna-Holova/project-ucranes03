import { useEffect } from 'react';
import icons from '../../images/icons.svg';
import css from './Modal.module.css';

const Modal = ({ onClose, children }) => {
  useEffect(() => {
    const handleEscape = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.documentElement.classList.add('no-scroll');
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.documentElement.classList.remove('no-scroll');
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return (
    <>
      <div className={css.backdrop} onClick={onClose} />
      <div className={css.modal}>
        <button onClick={onClose} className={css.close}>
          <svg width={24} height={24}>
            <use href={`${icons}#icon-close`} />
          </svg>
        </button>
        <div className={css.content}>{children}</div>
      </div>
    </>
  );
};

export default Modal;
