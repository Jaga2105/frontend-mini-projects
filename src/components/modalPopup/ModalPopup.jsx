import React, { useEffect, useRef, useState } from "react";
import styles from "./ModalPopup.module.css";
import Modal from "./Modal";

const ModalPopup = () => {
  const [showModal, setShowModal] = useState(false);
  const ModalHandler = (modalOpener) =>{
    setShowModal(modalOpener)
  }
  return (
    <div>
      <div className={styles.heading}>ModalPopup</div>
      <div><input type="range" name="range"  /></div>
      <div className={styles.modalContainer}>
        <button
          className={styles.modalButton}
          onClick={() => setShowModal(true)}
        >
          Open Modal
        </button>
        {/* {showModal && <div className={styles.backdrop}/>}
        {showModal && <div className={styles.modalDiv} ref={modalRef}>
          <h2>Modal Heading</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum mollitia quos possimus sed odio cupiditate reprehenderit distinctio dolorum natus temporibus?</p>
          <button className={styles.closeButton} onClick={()=>setShowModal(false)}>Close</button>
          </div>} */}
          {/* {showModal && <Modal ModalHandler={ModalHandler}/>} */}
          <Modal showModal={showModal} ModalHandler={ModalHandler}/>
      </div>
    </div>
  );
};

export default ModalPopup;
