import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalCont } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ closeModal, children}) => {
  useEffect(() => {
    const hendleKeyDown = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', hendleKeyDown);
    return () => {
      window.removeEventListener('keydown', hendleKeyDown);
    };
  }, [closeModal]);

  const hendleClickBackdrop = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  return createPortal(
    <Overlay onClick={hendleClickBackdrop}>
      <ModalCont>{children}</ModalCont>
    </Overlay>,
    modalRoot
  );
};

