import React, { useEffect, useRef, useState } from 'react';
import './styles.css';

export const useModal = () => {
  const backdropRef = useRef(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const keyDownHandler = e => {
    if (e.code !== 'Escape') {
      return;
    }

    closeModal();
  };

  useEffect(() => {
    window.addEventListener('keydown', keyDownHandler);

    return () => {
      window.removeEventListener('keydown', keyDownHandler);
    };
  }, []);

  const ModalJSX = (props) => 
    <div className ='backDrop' ref={backdropRef}>
        <div className ='modal'>
         {props.children}
        <button  className ="btnClose" onClick={closeModal}>Close</button>
      </div>
    </div>

  return { ModalJSX, closeModal, openModal, isModalOpen}
};
