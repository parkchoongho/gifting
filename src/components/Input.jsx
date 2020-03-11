import React from "react";

function Input({ value, onChange, name, type }) {
  return (
    <input type={type} name={name} value={value} onChange={onChange}></input>
  );
}

export default Input;
