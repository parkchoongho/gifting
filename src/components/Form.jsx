import React, { Component } from "react";

import Select from "./Select";
import Input from "./Input";
import Button from "./Button";

class Form extends Component {
  renderSelect(name) {
    const { sendingData, onChange } = this.props;

    return <Select name={name} value={sendingData[name]} onChange={onChange} />;
  }

  renderInput(name, type) {
    const { sendingData, onChange } = this.props;
    return (
      <Input
        name={name}
        type={type}
        value={sendingData[name]}
        onChange={onChange}
      />
    );
  }

  renderButton(value) {
    return <Button value={value} />;
  }

  render() {
    const { onSubmit } = this.props;

    return (
      <>
        <form onSubmit={onSubmit}>
          {this.renderSelect("code")}
          {this.renderInput("invoice", "text")}
          {this.renderButton("검색")}
        </form>
      </>
    );
  }
}

export default Form;
