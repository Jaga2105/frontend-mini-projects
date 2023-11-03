import React, { useEffect, useRef } from "react";
import styles from "./Modal.module.css";

const Modal = ({ showModal, ModalHandler }) => {
  const modalRef = useRef(null);
  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleClickOutside = (e) => {
    if (!modalRef.current.contains(e.target)) {
      ModalHandler(false);
    }
  };
  return (
    <>
      {showModal && (
        <div>
          <div className={styles.backdrop} />
          <div className={styles.modalDiv} ref={modalRef}>
            <h2>Modal Heading</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              mollitia quos possimus sed odio cupiditate reprehenderit
              distinctio dolorum natus temporibus?
            </p>
            <button
              className={styles.closeButton}
              onClick={() => ModalHandler(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
