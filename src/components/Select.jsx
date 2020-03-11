import React, { Component } from "react";

import Option from "./Option";

class Select extends Component {
  renderOption(value, text) {
    return <Option value={value} text={text} />;
  }

  render() {
    const { name, value, onChange } = this.props;
    return (
      <select name={name} value={value} onChange={onChange}>
        {this.renderOption("", "회사선택")}
        {this.renderOption("04", "CJ 대한통운")}
        {this.renderOption("05", "한진택배")}
        {this.renderOption("23", "경동택배")}
      </select>
    );
  }
}

export default Select;
