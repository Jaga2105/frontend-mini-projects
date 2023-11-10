import React, { useState } from "react";
import styles from "./Stepper.module.css";

const Stepper = ({ list }) => {
  const [counter, setCounter] = useState(0);
  const steps = [];
  for (let i = 0; i < list.length; i++) {
    steps.push(
      <div>
        <div
          className={`${styles["singleStep"]} ${
            counter >= i ? styles["active"] : styles[""]
          }`}
          key={i}
        >
          {i + 1}
        </div>
        {i < list.length - 1 && (
          <div
            className={`${styles["progressLine"]} ${
              counter >= i + 1 ? styles["active"] : styles[""]
            }`}
            style={{width: `${100/(list.length-1)}%`}}
          ></div>
        )}
      </div>
    );
  }

  const onNext = () =>{
    if(counter < list.length-1){
        setCounter(counter+1)
    }
  }
  const onPrev = () =>{
    if(counter > 0){
        setCounter(counter-1)
    }
  }
  console.log(counter)
  console.log(list[counter])
  return (
    <div className={styles.stepsContainer}>
      <div className={styles.steps}>{steps}</div>
      {/* <div className={styles.progressLine}></div> */}
      <div className={styles.content}>
        <h2>{list[counter]}</h2>
        <div className={styles.buttonContainer}>
            <button className={styles.button} onClick={onPrev} disabled={counter<=0}>Prev</button>
            <button className={styles.button} onClick={onNext} disabled={counter>=list.length-1}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
