import React, { useState } from "react";
import styles from "./Accordin.module.css";
import questions from "./Data";
import AccordionDetails from "./AccordionDetails";

const Accordion = () => {
  // const [showInfo, setShowInfo]=useState(1);
  // const showInfoHandler = (id)=>{
  //   // showInfo
  //   if(showInfo===0 || showInfo!==id){
  //     setShowInfo(id)
  //   }else{
  //     setShowInfo(0)
  //   }
  // }
  const [multiple, setMultiple] = useState(false)
  const [openedIndexOfAccordion, setOpenedIndexOfAccordion] = useState(1);
  const setIdOfAccordion = (id)=>{
    setOpenedIndexOfAccordion(multiple ? 0 : id)
  }
  const multipleHandler = ()=>{
    setMultiple(!multiple)
  }
  return (
    <div>
      <div className={styles.heading}>Accordion</div>
      <div className={styles.multipleChecker}>Show multiple Accordion
        <input type="checkbox" checked={multiple} onClick={multipleHandler} />
      </div>
      <div className={styles.container}>
        {questions.map((singleData) => (
          <AccordionDetails  key={singleData.id} id={singleData.id} title={singleData.title} description={singleData.info} openedIndexOfAccordion={openedIndexOfAccordion} setIdOfAccordion={setIdOfAccordion} />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
