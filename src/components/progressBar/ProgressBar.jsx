import React, { useEffect, useRef, useState } from "react";
import styles from "./ProgressBar.module.css";

const ProgressBar = () => {
  const [currentCycle, setCurrentCycle] = useState(0);
  const [activeProgress, setActiveProgress] = useState(false)
  const timeInterval = 1000;
  const totalTime = 10 * 1000;
  const totalCycles = totalTime / timeInterval;

  console.log("testing");
  const intervalId = useRef(null);

  const startProgress = () => {
    clearInterval(intervalId.current);
    setActiveProgress(true);
    intervalId.current = setInterval(() => {
      setCurrentCycle((cycle) => {
        if (cycle >= totalCycles) {
          clearInterval(intervalId.current);
          return cycle;
        }
        return cycle + 1;
      });
      // updateProgress()
    }, timeInterval);
  };
  const pauseProgress = () => {
    clearInterval(intervalId.current);
    setActiveProgress(false)
    // setCurrentCycle(0)
  };
  const resetProgress = () => {
    setCurrentCycle(0);
    setActiveProgress(false)
  };

  const getPercentage = () => {
    return (currentCycle / totalCycles) * 100;
  };

  useEffect(() => {
    if (currentCycle > 0) startProgress();
    return () => {
      clearInterval(intervalId.current);
    };
  }, [currentCycle]);
  return (
    <div>
      <div className={styles.heading}>
        <h1>Progress Bar</h1>
      </div>
      <div className={styles.bg_progress}>
        <div
          className={styles.acive_progress}
          style={{ transform: `translateX(${-100 + getPercentage()}%)` }}
        ></div>
      </div>
      <div className={styles.control_btn_container}>
        <button className={styles['disabled', 'control_btn']} disabled={activeProgress}  onClick={startProgress}>
          Start
        </button>
        <button className={styles.control_btn} disabled={!activeProgress} onClick={pauseProgress}>
          Stop
        </button>
        <button className={styles.control_btn} onClick={resetProgress}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default ProgressBar;
