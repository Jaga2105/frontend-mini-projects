import React, { useState } from "react";
import "./PasswordGenerator.css";
import usePasswordGenerator from "./hook/useGeneratePassword";
import Button from "./Button";
import Checkbox from "./Checkbox";
import PasswordStrengthIndicator from "./StrengthChecker";

const PasswordGenerator = () => {
    const [length, setLength] = useState(4)
  const [checkboxData, setCheckboxData] = useState([
    { title: "Include Uppercase Letters", state: false },
    { title: "Include Lowercase Letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false },
  ]);

  const handleCheckboxChange = (i) => {
    const updatedCheckboxData = [...checkboxData];
    updatedCheckboxData[i].state = !updatedCheckboxData[i].state;
    setCheckboxData(updatedCheckboxData);
  };

  const { password, errorMessage, generatePassword } = usePasswordGenerator();

  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <div className="pwd_gen_container">
      {/* Password Text and Copy */}
      {password && (
        <div className="pwd_gen_header">
          <div className="title">{password}</div>
          <Button
            text={copied ? "Copied" : "copy"}
            onClick={handleCopy}
            customClass="copyBtn"
          />
        </div>
      )}
      {/* {Character Length} */}
      <div className="charlength">
        <span>
          <label>Character Length</label>
          <label>{length}</label>
        </span>
        <input
          type="range"
          min="4"
          max="20"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </div>

      {/* Checkboxes */}
      <div className="checkboxes">
        {checkboxData.map((checkbox, index) => {
          return (
            <Checkbox
              key={index}
              title={checkbox.title}
              onChange={() => handleCheckboxChange(index)}
              state={checkbox.state}
            />
          );
        })}
      </div>
      {/* Strength */}
      <PasswordStrengthIndicator password={password} />

      {/* Error Handling */}
      {errorMessage && <div className="errorMessage">{errorMessage}</div>}

      <Button
        text="Generate Password"
        onClick={() => generatePassword(checkboxData, length)}
        customClass="generateBtn"
      />
    </div>
  );
};

export default PasswordGenerator;
