import { useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import icons from '../../images/icons.svg';
import css from './Modal.module.css';

const Modal = ({ showModal, onClose, children }) => {
  const nodeRef = useRef(null);

  useEffect(() => {
    const handleEscape = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (showModal) {
      document.documentElement.classList.add('no-scroll');
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.documentElement.classList.remove('no-scroll');
      document.removeEventListener('keydown', handleEscape);
    };
  }, [showModal, onClose]);

  return (
    <CSSTransition
      in={showModal}
      timeout={500}
      classNames={{
        enter: css['modal-enter'],
        enterActive: css['modal-enter-active'],
        exit: css['modal-exit'],
        exitActive: css['modal-exit-active'],
      }}
      unmountOnExit
      nodeRef={nodeRef}
    >
      <div
        ref={nodeRef}
        className={css.modalWrapper}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <div className={css.backdrop} onClick={onClose} />
        <div className={css.modal}>
          <button onClick={onClose} className={css.close} aria-label="close">
            <svg width={24} height={24}>
              <use href={`${icons}#icon-close`} />
            </svg>
          </button>
          <div className={css.content}>{children}</div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Modal;
