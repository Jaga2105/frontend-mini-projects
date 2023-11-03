import React, { useEffect, useState } from "react";
import styles from "./AccordionDetails.module.css"

const AccordionDetails = ({id,title, description,openedIndexOfAccordion, setIdOfAccordion}) => {
    const [showInfo, setShowInfo]=useState(false);
  const showInfoHandler = (id)=>{
    setShowInfo((prevInfo)=>!prevInfo)
    setIdOfAccordion(id)
  }
  console.log("testing")
  useEffect(()=>{
    if(openedIndexOfAccordion){
        setShowInfo(openedIndexOfAccordion===id)
    }
    
  },[openedIndexOfAccordion,id])
  return (
    <div className={styles.singleData}>
      <div className={styles.titleIconContainer}>
        <p className={styles.title}>{title}</p>
        <span
          className={styles.icon}
          onClick={() => showInfoHandler(id)}
        >
          {/* {showInfo === id ? "-" : "+"} */}
          {showInfo ? "-" : "+"}
        </span>
      </div>
      {/* {showInfo === id && <p>{description}</p>} */}
      {showInfo && <p>{description}</p>}
    </div>
  );
};

export default AccordionDetails;
