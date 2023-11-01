import React, { useState } from "react";
import styles from "./Accordin.module.css";
import questions from "./Data";

const Accordion = () => {
  const [showInfo, setShowInfo]=useState(0);
  const showInfoHandler = (id)=>{
    setShowInfo(id)
  }
  return (
    <div>
      <div className={styles.heading}>Accordion</div>
      <div className={styles.container}>
        {questions.map((singleData) => (
          <div className={styles.singleData} key={singleData.id}>
            <div className={styles.titleIconContainer}>
              <p className={styles.title}>{singleData.title}</p>
              <span className={styles.icon} onClick={()=>showInfoHandler(singleData.id)}>{showInfo===singleData.id ? "-" : "+"}</span>
            </div>
            {showInfo===singleData.id && <p>{singleData.info}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
