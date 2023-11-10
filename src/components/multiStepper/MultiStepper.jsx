import React from "react";
import Stepper from "./Stepper";
import styles from "./Stepper.module.css"

const MultiStepper = () => {
  const list = [<Example1 />, <Example2 />, <Example3 />, <Example4 />,<Example5 />];
  return (
    <div className={styles.MultiStepperContainer}>
      <h2 className={styles.heading}>MultiStepper</h2>
      <Stepper list={list} />
    </div>
  );
};

const Example1 = () => {
  return <div>Example 1</div>;
};
const Example2 = () => {
  return <div>Example 2</div>;
};
const Example3 = () => {
  return <div>Example 3</div>;
};
const Example4 = () => {
  return <div>Example 4</div>;
};
const Example5 = () => {
    return <div>Example 5</div>;
  };

export default MultiStepper;
