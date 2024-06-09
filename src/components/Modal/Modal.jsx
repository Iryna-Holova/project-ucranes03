import icons from '../../images/icons.svg';
import css from './Modal.module.css';

const Modal = ({ children, onClose }) => {
  return (
    <>
      <div className={css.backdrop}></div>
      <div className={css.modal}>
        <button onClick={onClose} className={css.close}>
          <svg width={24} height={24}>
            <use href={`${icons}#icon-close`} />
          </svg>
        </button>
        {children}
      </div>
    </>
  );
};

export default Modal;
