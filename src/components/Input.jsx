import React from "react";

function Input({ value, onChange, name, type }) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="submitInput"
      placeholder="송장번호를 입력하세요."
    ></input>
  );
}

export default Input;
