import React from "react";
import "./Input.modules.scss";
import { useState, useRef } from "react";

export const Input = ({ onNumberChange, value, id }) => {
  const numberChanged = (event) => {
    onNumberChange(String(event.target.value).replace(/[,]/g, "."));
  };

  return (
    <div className="form_group">
      <label>Enter the number:</label>
      <input
        type="text"
        placeholder="1"
        name="number"
        id={id}
        defaultValue={value}
        onBlur={numberChanged}
      />
    </div>
  );
};
