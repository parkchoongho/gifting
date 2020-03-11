import React, { Component } from "react";

import DeliveryInfo from "./DeliveryInfo";
import Form from "./Form";

import { findTracking } from "../services/trackingInfo";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sendingData: { code: "", invoice: "" },
      deliveryInfo: "",
      errors: {}
    };
  }

  handleSubmit = async e => {
    e.preventDefault();

    try {
      const { sendingData } = this.state;
      const { data: trackingInfo } = await findTracking(
        sendingData.code,
        sendingData.invoice
      );
      console.log(trackingInfo);

      this.setState({ deliveryInfo: trackingInfo });
      console.log(this.state);
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = ({ currentTarget: input }) => {
    const sendingData = { ...this.state.sendingData };
    sendingData[input.name] = input.value;

    this.setState({ sendingData });
  };

  render() {
    const { deliveryInfo, sendingData } = this.state;
    return (
      <>
        <Form
          sendingData={sendingData}
          onChange={e => this.handleChange(e)}
          onSubmit={e => this.handleSubmit(e)}
        />
        <DeliveryInfo deliveryInfo={deliveryInfo} />
      </>
    );
  }
}

export default Main;
